import { describe, expect, it } from "vitest";
import {
  describeContentStatus,
  getSourceRecord,
  getTopicMetadata,
  getTopicSources,
  isTopicContentStatus,
  isTopicDifficulty,
  isTopicProgram,
  isTopicPublished,
  listSourceRecords,
  listTopicMetadataIds,
  topicMetadataGeneratedOn,
  topicMetadataOmissions,
} from "../../src/lib/content/metadata";
import type { TopicContentStatus } from "../../src/lib/content/metadata";

const knownTopicId = "topic:anatomy-physiology-1:basic-chemistry-for-ap:acids-bases-and-ph";
const allStatuses: TopicContentStatus[] = ["source-grounded", "medically-reviewed", "needs-medical-review", "draft", "archived"];

describe("topic metadata accessor", () => {
  it("resolves a known topic and rejects an unknown one", () => {
    const metadata = getTopicMetadata(knownTopicId);
    expect(metadata).toBeDefined();
    expect(metadata?.contentStatus).toBe("source-grounded");
    expect(metadata?.programs).toContain("nursing");
    expect(metadata?.sourceIds).toContain("collection:prenursing_notes");
    expect(getTopicMetadata("topic:not-a-subject:not-a-unit:not-a-topic")).toBeUndefined();
    expect(getTopicMetadata("")).toBeUndefined();
  });

  it("covers every topic with a complete, in-range entry", () => {
    const ids = listTopicMetadataIds();
    expect(ids).toHaveLength(1317);
    for (const id of ids) {
      const entry = getTopicMetadata(id);
      expect(entry).toBeDefined();
      if (!entry) continue;
      expect(entry.programs.length).toBeGreaterThan(0);
      expect(entry.estimatedStudyMinutes).toBeGreaterThanOrEqual(2);
      expect(entry.estimatedStudyMinutes).toBeLessThanOrEqual(90);
      expect(entry.sectionCharacterCount).toBeGreaterThanOrEqual(0);
      expect(entry.citationReviewQuestionCount).toBeLessThanOrEqual(entry.exactQuestionCount);
      expect(entry.sourceIds.length).toBeGreaterThan(0);
      expect(typeof entry.publish).toBe("boolean");
    }
  });

  it("never claims a credentialed clinical review it cannot evidence", () => {
    const claimed = listTopicMetadataIds().filter((id) => getTopicMetadata(id)?.contentStatus === "medically-reviewed");
    expect(claimed).toHaveLength(0);
  });

  it("never publishes a topic that is held for medical review or still a draft", () => {
    const wronglyPublished = listTopicMetadataIds().filter((id) => {
      const entry = getTopicMetadata(id);
      return entry?.publish === true && entry.contentStatus !== "source-grounded";
    });
    expect(wronglyPublished).toHaveLength(0);
    expect(isTopicPublished(knownTopicId)).toBe(true);
    expect(isTopicPublished("topic:not-a-subject:not-a-unit:not-a-topic")).toBe(false);
  });

  it("keeps every derived enum value legal", () => {
    for (const id of listTopicMetadataIds()) {
      const entry = getTopicMetadata(id);
      if (!entry) continue;
      expect(isTopicContentStatus(entry.contentStatus)).toBe(true);
      for (const program of entry.programs) expect(isTopicProgram(program)).toBe(true);
      if (entry.difficulty) expect(isTopicDifficulty(entry.difficulty)).toBe(true);
    }
  });

  it("emits relatedTopics only as real, non-self topic ids", () => {
    const ids = new Set(listTopicMetadataIds());
    let withRelated = 0;
    for (const id of ids) {
      const related = getTopicMetadata(id)?.relatedTopics;
      if (!related) continue;
      withRelated += 1;
      expect(related.length).toBeLessThanOrEqual(6);
      for (const relatedId of related) {
        expect(relatedId).not.toBe(id);
        expect(ids.has(relatedId)).toBe(true);
      }
    }
    expect(withRelated).toBe(64);
  });

  it("documents the fields it deliberately omits", () => {
    const omissions = topicMetadataOmissions();
    expect(omissions.length).toBeGreaterThan(0);
    expect(omissions.some((note) => note.startsWith("prerequisites:"))).toBe(true);
    expect(omissions.some((note) => note.startsWith("examAlignment:"))).toBe(true);
    expect(omissions.some((note) => note.startsWith("tags:"))).toBe(true);
    expect(omissions.some((note) => note.startsWith("lastReviewed:"))).toBe(true);
    expect(topicMetadataGeneratedOn()).toBe("2026-08-15");
  });
});

describe("source registry accessor", () => {
  it("resolves a known record and rejects an unknown one", () => {
    const record = getSourceRecord("collection:prenursing_notes");
    expect(record?.title).toBe("Prenursing Notes");
    expect(record?.usageType).toBe("adaptation");
    expect(getSourceRecord("collection:not-a-collection")).toBeUndefined();
  });

  it("resolves every source id referenced by every topic", () => {
    for (const id of listTopicMetadataIds()) {
      const entry = getTopicMetadata(id);
      if (!entry) continue;
      expect(getTopicSources(id)).toHaveLength(entry.sourceIds.length);
    }
    expect(getTopicSources("topic:not-a-subject:not-a-unit:not-a-topic")).toEqual([]);
  });

  it("only carries a licence where the repository states one, and never guesses one", () => {
    const licensed = listSourceRecords().filter((record) => record.license !== undefined);
    expect(licensed).toHaveLength(2);
    for (const record of licensed) {
      expect(record.license).toBe("CC BY 4.0");
      expect(record.attributionRequired).toBe(true);
      expect(record.notes).toMatch("copied, not inferred");
    }
    for (const record of listSourceRecords()) {
      if (record.license === undefined) expect(record.attributionRequired).toBeUndefined();
      if (record.url !== undefined) expect(record.url).toMatch(/^https?:\/\//);
      expect(record.authorOrOrganization).toBeUndefined();
    }
  });
});

describe("describeContentStatus", () => {
  it("returns short, honest copy for every status", () => {
    for (const status of allStatuses) {
      const copy = describeContentStatus(status);
      expect(typeof copy).toBe("string");
      expect(copy.length).toBeGreaterThan(0);
      expect(copy.length).toBeLessThan(160);
    }
  });

  it("says source-grounded material is cited but not clinically reviewed", () => {
    const copy = describeContentStatus("source-grounded");
    expect(copy).toMatch("cited sources");
    expect(copy).toMatch("has not had a credentialed clinical review");
  });

  it("never implies clinical approval for material that has none", () => {
    for (const status of allStatuses) {
      if (status === "medically-reviewed") continue;
      expect(describeContentStatus(status)).not.toMatch(/\b(?:approved|verified by a (?:doctor|clinician)|clinically approved)\b/i);
    }
    expect(describeContentStatus("medically-reviewed")).toMatch("No content in this library currently carries this status");
  });
});
