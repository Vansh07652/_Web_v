import { useEffect, useMemo, useState } from "react";
import { Breadcrumbs, Link, LoadingState, PageHeader } from "../components/ui";
import { MarkdownDocument } from "../components/MarkdownDocument";
import { RichQuestionPractice } from "../components/RichQuestionPractice";
import {
  getPilotTopicSummary,
  getPilotUnit,
  loadAnatomyPhysiology1Pilot,
  loadPilotQuestionBank,
  loadPilotTopic,
  pilotSubjectHref,
  pilotTopicHref,
  pilotUnitHref,
} from "../lib/content/curriculum-v2";
import type { Navigate } from "../lib/navigation";
import type { CurriculumQuestionBankV2, CurriculumTopicV2 } from "../types";

const subject = loadAnatomyPhysiology1Pilot();
type TopicTab = "learn" | "eli10" | "practice" | "review" | "sources";

const markdownSection = (title: string, content: string) => content ? `## ${title}\n\n${content}` : "";

export function CurriculumPilotRoutes({ segments, navigate }: { segments: string[]; navigate: Navigate }) {
  if (segments.length === 2) return <PilotSubjectPage navigate={navigate} />;
  const unit = getPilotUnit(segments[2]);
  if (!unit) return <PilotNotFound navigate={navigate} />;
  if (segments.length === 3) return <PilotUnitPage unitSlug={unit.slug} navigate={navigate} />;
  const topic = getPilotTopicSummary(unit.slug, segments[3]);
  if (!topic || segments.length !== 4) return <PilotNotFound navigate={navigate} />;
  return <PilotTopicPage unitSlug={unit.slug} topicSlug={topic.slug} navigate={navigate} />;
}

function PilotSubjectPage({ navigate }: { navigate: Navigate }) {
  const stats = subject.statistics;
  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: subject.subject.title }]} />
      <PageHeader
        eyebrow="Registry-backed pilot"
        title={subject.subject.title}
        description="A complete canonical course with college-level notes, ELI‑10 explanations, high-yield review, practice rationales, and source provenance kept as separate content layers."
        actions={<Link href={pilotTopicHref(subject.units[0].slug, subject.units[0].topics[0].slug)} navigate={navigate} className="button">Start topic 1</Link>}
      />
      <div className="pilot-summary" aria-label="Pilot content summary">
        <div><strong>{stats.unitCount}</strong><span>Units</span></div>
        <div><strong>{stats.topicCount}</strong><span>Canonical topics</span></div>
        <div><strong>{stats.uniqueQuestionCount}</strong><span>Unique questions</span></div>
        <div><strong>{stats.completeTeachingTopicCount}</strong><span>Complete ELI‑10 notes</span></div>
      </div>
      <div className="notice" role="note"><strong>Question provenance is visible.</strong><p>{stats.studyPackQuestionCount} cited study-pack questions and {stats.nativeAppQuestionCount} supplemental app-bank questions are preserved. The {stats.citationReviewRequiredCount} app-bank questions remain clearly flagged for citation review.</p></div>
      <section className="section-block" aria-labelledby="ap1-units-title">
        <div className="section-heading"><div><p className="eyebrow">Master curriculum</p><h2 id="ap1-units-title">Eight canonical units</h2></div></div>
        <div className="unit-grid">
          {subject.units.map((unit) => (
            <article className="unit-card" key={unit.id}>
              <p className="eyebrow">Unit {unit.order}</p>
              <h3><Link href={pilotUnitHref(unit.slug)} navigate={navigate}>{unit.title}</Link></h3>
              <p>{unit.topics.length} topics · {unit.topics.reduce((count, topic) => count + topic.mappedQuestionCount, 0)} question associations</p>
              <ol>{unit.topics.map((topic) => <li key={topic.id}><Link href={pilotTopicHref(unit.slug, topic.slug)} navigate={navigate}>{topic.title}</Link><span>{topic.mappedQuestionCount}</span></li>)}</ol>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PilotUnitPage({ unitSlug, navigate }: { unitSlug: string; navigate: Navigate }) {
  const unit = getPilotUnit(unitSlug)!;
  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: subject.subject.title, href: pilotSubjectHref }, { label: unit.title }]} />
      <PageHeader eyebrow={`Unit ${unit.order} · ${subject.subject.title}`} title={unit.title} description={`${unit.topics.length} canonical topics, each with complete Learn, ELI‑10, Quick Review, and Sources sections.`} />
      <div className="topic-list">
        {unit.topics.map((topic) => (
          <article key={topic.id}>
            <span className="topic-order">{unit.order}.{topic.order}</span>
            <div><h2><Link href={pilotTopicHref(unit.slug, topic.slug)} navigate={navigate}>{topic.title}</Link></h2><p>Complete teaching note · {topic.mappedQuestionCount} mapped practice questions</p></div>
            <Link href={pilotTopicHref(unit.slug, topic.slug)} navigate={navigate} className="button button-secondary">Open topic</Link>
          </article>
        ))}
      </div>
    </>
  );
}

function PilotTopicPage({ unitSlug, topicSlug, navigate }: { unitSlug: string; topicSlug: string; navigate: Navigate }) {
  const [topic, setTopic] = useState<CurriculumTopicV2>();
  const [questionBank, setQuestionBank] = useState<CurriculumQuestionBankV2>();
  const [failed, setFailed] = useState(false);
  const [tab, setTab] = useState<TopicTab>("learn");
  const unit = getPilotUnit(unitSlug)!;
  const summary = getPilotTopicSummary(unitSlug, topicSlug)!;

  useEffect(() => {
    let active = true;
    setTopic(undefined);
    setFailed(false);
    setTab("learn");
    void loadPilotTopic(unitSlug, topicSlug).then((loaded) => {
      if (!active) return;
      if (loaded) setTopic(loaded); else setFailed(true);
    }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [unitSlug, topicSlug]);

  useEffect(() => {
    if (tab !== "practice" || questionBank) return;
    let active = true;
    void loadPilotQuestionBank().then((bank) => { if (active) setQuestionBank(bank); }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [tab, questionBank]);

  const questions = useMemo(
    () => questionBank?.questions.filter((question) => question.mappedCanonicalTopicIds.includes(summary.id)) ?? [],
    [questionBank, summary.id],
  );
  const allTopics = subject.units.flatMap((itemUnit) => itemUnit.topics.map((itemTopic) => ({ unit: itemUnit, topic: itemTopic })));
  const currentIndex = allTopics.findIndex((item) => item.topic.id === summary.id);

  if (failed) return <PilotNotFound navigate={navigate} />;
  if (!topic) return <LoadingState />;

  const learnMarkdown = [
    markdownSection("What This Topic Is", topic.sections.overview),
    markdownSection("Why It Matters", topic.sections.whyItMatters),
    markdownSection("Learning Objectives", topic.sections.learningObjectives),
    markdownSection("Key Terms", topic.sections.keyTerms),
    markdownSection("Core Explanation", topic.sections.collegeNotes),
    markdownSection("How It Works", topic.sections.howItWorks),
    markdownSection("Important Relationships and Comparisons", topic.sections.comparisons),
    markdownSection("High-Yield Pre-Nursing Connections", topic.sections.highYield),
    markdownSection("Common Confusions", topic.sections.commonConfusions),
    markdownSection("Memory Aids", topic.sections.memoryAids),
  ].filter(Boolean).join("\n\n");

  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: subject.subject.title, href: pilotSubjectHref }, { label: unit.title, href: pilotUnitHref(unit.slug) }, { label: topic.title }]} />
      <PageHeader eyebrow={`Unit ${unit.order} · Topic ${topic.order}`} title={topic.title} description={topic.sections.whyItMatters.replace(/[*_`]/g, "").slice(0, 220)} />
      <nav className="topic-tabs" aria-label="Topic study modes">
        {([
          ["learn", "Learn"], ["eli10", "ELI‑10"], ["practice", `Practice (${summary.mappedQuestionCount})`], ["review", "Quick Review"], ["sources", "Sources"],
        ] as Array<[TopicTab, string]>).map(([value, label]) => <button key={value} type="button" className={tab === value ? "is-active" : ""} aria-pressed={tab === value} onClick={() => setTab(value)}>{label}</button>)}
      </nav>
      <div className="topic-panel">
        {tab === "learn" && <MarkdownDocument source={learnMarkdown} />}
        {tab === "eli10" && <><div className="mode-intro"><p className="eyebrow">Explain Like I’m 10</p><h2>Same science, simpler mental model</h2><p>The analogy is a bridge to the college-level explanation, not a replacement for it.</p></div><MarkdownDocument source={topic.sections.eli10} /></>}
        {tab === "practice" && (!questionBank ? <LoadingState /> : <><div className="mode-intro"><p className="eyebrow">Mapped practice</p><h2>{questions.length} questions from two preserved sources</h2><p>Each answer keeps its full “why correct” rationale and ELI‑10 explanation. Broad source-topic mappings are labeled in the quiz.</p></div><RichQuestionPractice questions={questions} /></>)}
        {tab === "review" && <MarkdownDocument source={[markdownSection("Quick Recap", topic.sections.quickReview), markdownSection("High-Yield Connections", topic.sections.highYield), markdownSection("Common Confusions", topic.sections.commonConfusions), markdownSection("Memory Aids", topic.sections.memoryAids)].join("\n\n")} />}
        {tab === "sources" && <section className="source-panel"><p className="eyebrow">Authority and provenance</p><h2>Teaching sources</h2><p>This topic’s teaching layers come from the canonical pre-nursing corpus and were imported without rewriting.</p><dl><div><dt>Canonical ID</dt><dd>{topic.id}</dd></div><div><dt>Source collection</dt><dd>{String(topic.provenance.sourceCollection)}</dd></div><div><dt>Source file</dt><dd><code>{String(topic.provenance.sourceFile)}</code></dd></div><div><dt>Fact checked</dt><dd>{topic.provenance.factChecked ? "Yes" : "Not recorded"}</dd></div></dl><h3>References</h3><ul>{topic.sections.references.map((reference, index) => <li key={index}>{reference.url ? <a href={reference.url} rel="noreferrer">{reference.text}</a> : reference.text}</li>)}</ul></section>}
      </div>
      <nav className="previous-next" aria-label="Canonical topics">
        {currentIndex > 0 ? <Link href={pilotTopicHref(allTopics[currentIndex - 1].unit.slug, allTopics[currentIndex - 1].topic.slug)} navigate={navigate}><span>Previous topic</span><strong>{allTopics[currentIndex - 1].topic.title}</strong></Link> : <span />}
        {currentIndex < allTopics.length - 1 && <Link href={pilotTopicHref(allTopics[currentIndex + 1].unit.slug, allTopics[currentIndex + 1].topic.slug)} navigate={navigate}><span>Next topic</span><strong>{allTopics[currentIndex + 1].topic.title}</strong></Link>}
      </nav>
    </>
  );
}

function PilotNotFound({ navigate }: { navigate: Navigate }) {
  return <section className="not-found"><p className="error-code">404</p><h1>That curriculum topic is not in the A&P I registry</h1><p>Use the canonical course index to choose a unit or topic.</p><div className="action-row"><Link href={pilotSubjectHref} navigate={navigate} className="button">Open A&P I</Link></div></section>;
}
