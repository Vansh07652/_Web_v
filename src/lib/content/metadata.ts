import sourceRegistryJson from "../../../content-v2/indexes/source-registry.json";
import topicMetadataJson from "../../../content-v2/indexes/topic-metadata.json";

/**
 * Read-only accessor over the generated content metadata sidecar.
 *
 * The sidecar sits beside the curriculum corpus and is joined to it by topic id
 * at runtime; it never edits content-v2/subjects/ or content-v2/client/. Every
 * field it carries is derived from evidence already in the repository by
 * scripts/build-topic-metadata.mjs and scripts/build-source-registry.mjs, and
 * anything that could not be derived is absent rather than estimated.
 *
 * The sidecar is bundled into the first paint, so it is stored interned: repeated
 * strings live once in the file's `tables` and topic tree, and each entry cites
 * them by integer. This module reverses that once, on first use, and hands every
 * caller the same full-string entries it always did. The file's own `encoding`
 * block documents the layout; scripts/build-topic-metadata.mjs carries the same
 * walk in JavaScript for the validator, so the two must change together.
 */
export type TopicProgram = "pre-nursing" | "nursing" | "premed" | "healthcare";
export type TopicDifficulty = "beginner" | "intermediate" | "advanced";
export type TopicContentStatus = "source-grounded" | "medically-reviewed" | "needs-medical-review" | "draft" | "archived";

export interface TopicMetadata {
  /** Programmes the topic's subject category serves. A category-level mapping, not a per-topic judgement. */
  programs: TopicProgram[];
  /** Rough planning aid from the topic's own prose length plus its mapped questions. Not authoritative. */
  estimatedStudyMinutes: number;
  /** Summed length of the topic's non-empty prose sections. */
  sectionCharacterCount: number;
  /** Questions whose mappedCanonicalTopicIds include this topic. */
  exactQuestionCount: number;
  /** Of those questions, how many are flagged citationReviewRequired. */
  citationReviewQuestionCount: number;
  contentStatus: TopicContentStatus;
  /** Ids into the source registry: the topic's own collection plus each cited reference host. */
  sourceIds: string[];
  /** True only for source-grounded topics; drafts and review-flagged topics are held back. */
  publish: boolean;
  /** Present only when at least five exact-mapped questions carry a mappable difficulty. */
  difficulty?: TopicDifficulty;
  /** Present only when a question co-maps this topic with another. Up to six ids. */
  relatedTopics?: string[];
}

export interface SourceRecord {
  id: string;
  title: string;
  authorOrOrganization?: string;
  provider?: string;
  url?: string;
  license?: string;
  usageType?: string;
  attributionRequired?: boolean;
  importedAt?: string;
  notes?: string;
}

export interface TopicMetadataIndex {
  schemaVersion: string;
  generatedOn: string;
  generatedBy: string;
  notes: string[];
  derivationRules: string[];
  topics: Record<string, TopicMetadata>;
}

export interface SourceRegistry {
  schemaVersion: string;
  generatedOn: string;
  generatedBy: string;
  derivationRules: string[];
  sources: SourceRecord[];
}

/**
 * One topic, positional. The trailing two are dropped from the right when absent,
 * and `difficulty` is -1 when it alone is absent. See the sidecar's `encoding`.
 */
type EncodedTopic = readonly [
  slug: string,
  programs: number,
  estimatedStudyMinutes: number,
  sectionCharacterCount: number,
  exactQuestionCount: number,
  citationReviewQuestionCount: number,
  contentStatus: number,
  sourceIds: readonly number[],
  difficulty?: number,
  relatedTopics?: readonly number[],
];

type EncodedUnit = readonly [unitSlug: string, topics: readonly EncodedTopic[]];
type EncodedSubject = readonly [subjectSlug: string, units: readonly EncodedUnit[]];

interface EncodedTopicMetadataIndex {
  schemaVersion: string;
  generatedOn: string;
  generatedBy: string;
  notes: string[];
  derivationRules: string[];
  tables: {
    sources: string[];
    programs: TopicProgram[][];
    contentStatus: TopicContentStatus[];
    difficulty: TopicDifficulty[];
  };
  topics: readonly EncodedSubject[];
}

const sourceRegistry = sourceRegistryJson as unknown as SourceRegistry;
const sourcesById = new Map<string, SourceRecord>(sourceRegistry.sources.map((source) => [source.id, source]));

/**
 * Reverses the interning. Entries are keyed by full topic id in the sidecar's own
 * order, so `listTopicMetadataIds` still returns catalog order, and each entry
 * gets its own arrays so a caller cannot mutate the shared tables.
 */
const decodeTopicMetadataIndex = (): TopicMetadataIndex => {
  const encoded = topicMetadataJson as unknown as EncodedTopicMetadataIndex;
  const { sources, programs, contentStatus, difficulty } = encoded.tables;
  const topicIds: string[] = [];
  const rows: EncodedTopic[] = [];
  for (const [subjectSlug, units] of encoded.topics) {
    for (const [unitSlug, unitTopics] of units) {
      for (const row of unitTopics) {
        topicIds.push(`topic:${subjectSlug}:${unitSlug}:${row[0]}`);
        rows.push(row);
      }
    }
  }

  const topics: Record<string, TopicMetadata> = {};
  rows.forEach((row, ordinal) => {
    const status = contentStatus[row[6]];
    const entry: TopicMetadata = {
      programs: [...programs[row[1]]],
      estimatedStudyMinutes: row[2],
      sectionCharacterCount: row[3],
      exactQuestionCount: row[4],
      citationReviewQuestionCount: row[5],
      contentStatus: status,
      sourceIds: row[7].map((code) => sources[code]),
      // Never stored: it is a pure function of contentStatus, so a stored copy
      // could only ever drift from the status beside it.
      publish: status === "source-grounded",
    };
    const difficultyCode = row[8];
    if (difficultyCode !== undefined && difficultyCode >= 0) entry.difficulty = difficulty[difficultyCode];
    const relatedOrdinals = row[9];
    if (relatedOrdinals !== undefined) entry.relatedTopics = relatedOrdinals.map((related) => topicIds[related]);
    topics[topicIds[ordinal]] = entry;
  });

  return {
    schemaVersion: encoded.schemaVersion,
    generatedOn: encoded.generatedOn,
    generatedBy: encoded.generatedBy,
    notes: encoded.notes,
    derivationRules: encoded.derivationRules,
    topics,
  };
};

let decodedIndex: TopicMetadataIndex | undefined;

/** Decoded once, on first use, and reused. Nothing is decoded if nothing asks. */
const topicMetadataIndex = (): TopicMetadataIndex => {
  decodedIndex ??= decodeTopicMetadataIndex();
  return decodedIndex;
};

const topicPrograms: readonly TopicProgram[] = ["pre-nursing", "nursing", "premed", "healthcare"];
const topicDifficulties: readonly TopicDifficulty[] = ["beginner", "intermediate", "advanced"];
const topicContentStatuses: readonly TopicContentStatus[] = ["source-grounded", "medically-reviewed", "needs-medical-review", "draft", "archived"];

const contentStatusCopy: Record<TopicContentStatus, string> = {
  "source-grounded": "Grounded in the cited sources listed on this topic. It has not had a credentialed clinical review.",
  "medically-reviewed": "Checked by a credentialed clinician. No content in this library currently carries this status.",
  "needs-medical-review": "Held back from study because its citations are still being checked. Do not rely on it yet.",
  draft: "Incomplete. Sections are still missing, so it is not published for study.",
  archived: "Withdrawn from the library and kept only for reference.",
};

export const isTopicProgram = (value: string): value is TopicProgram => (topicPrograms as readonly string[]).includes(value);
export const isTopicDifficulty = (value: string): value is TopicDifficulty => (topicDifficulties as readonly string[]).includes(value);
export const isTopicContentStatus = (value: string): value is TopicContentStatus => (topicContentStatuses as readonly string[]).includes(value);

export const getTopicMetadata = (topicId: string): TopicMetadata | undefined => topicMetadataIndex().topics[topicId];
export const getSourceRecord = (sourceId: string): SourceRecord | undefined => sourcesById.get(sourceId);

/** Every registry record backing a topic, in the sidecar's own order. Unknown ids are dropped. */
export const getTopicSources = (topicId: string): SourceRecord[] => (getTopicMetadata(topicId)?.sourceIds ?? [])
  .map((sourceId) => sourcesById.get(sourceId))
  .filter((source): source is SourceRecord => source !== undefined);

export const isTopicPublished = (topicId: string): boolean => getTopicMetadata(topicId)?.publish === true;

/** Short, honest, user-facing copy. It never implies clinical approval. */
export const describeContentStatus = (status: TopicContentStatus): string => contentStatusCopy[status];

export const listTopicMetadataIds = (): string[] => Object.keys(topicMetadataIndex().topics);
export const listSourceRecords = (): readonly SourceRecord[] => sourceRegistry.sources;
export const topicMetadataGeneratedOn = (): string => topicMetadataIndex().generatedOn;
export const topicMetadataOmissions = (): readonly string[] => topicMetadataIndex().notes;
