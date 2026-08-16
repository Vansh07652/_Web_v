import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Breadcrumbs, EmptyState, Link, LoadingState, PageHeader, PreviousNext } from "../components/ui";
import { CourseCoverageCatalog, CourseCoverageSummary } from "../components/CourseTransparency";
import { ExplanationTabs } from "../components/ExplanationTabs";
import { markdownSection, normalizeForOverlap, sectionUnlessDuplicated } from "../lib/content/sections";
import { ListenControls } from "../components/ListenControls";
import { MarkdownDocument } from "../components/MarkdownDocument";
import { RichQuestionPractice } from "../components/RichQuestionPractice";
import { ConnectedLearning, TopicFacts, type RelatedTopicLink } from "../components/TopicDetails";
import { EvidenceExplorer } from "../components/sources/EvidenceExplorer";
import { StudyUseNotice } from "../components/LegalNotice";
import {
  curriculumPracticeHref,
  curriculumSubjectHref,
  curriculumTopicHref,
  curriculumUnitHref,
  getCurriculumSubjectSummary,
  loadCurriculumCatalog,
  loadCurriculumQuestions,
  loadCurriculumSearchIndex,
  loadCurriculumSubject,
  loadCurriculumTopic,
} from "../lib/content/curriculum-v2";
import { getTopicMetadata } from "../lib/content/metadata";
import type { Navigate } from "../lib/navigation";
import { recordTopicView } from "../lib/progress";
import { plainTextFromMarkdown, type SpeechSection } from "../lib/speech";
import type { CurriculumQuestionBankV2, CurriculumSearchEntryV2, CurriculumSubjectV2, CurriculumTopicV2 } from "../types";

type TopicTab = "learn" | "practice" | "review";

const catalog = loadCurriculumCatalog();

// A single "#" renders as <h2>, keeping the topic panel directly under the page <h1>.
const cleanExcerpt = (value = "") => value.replace(/[#*_`>|[\]]/g, "").replace(/\s+/g, " ").trim();

const readableExcerpt = (value = "", maximumLength = 220) => {
  const cleaned = cleanExcerpt(value);
  if (cleaned.length <= maximumLength) return cleaned;
  const candidate = cleaned.slice(0, maximumLength + 1);
  const boundary = candidate.lastIndexOf(" ");
  return `${candidate.slice(0, boundary > maximumLength * 0.75 ? boundary : maximumLength).replace(/[,:;—-]+$/, "")}…`;
};

const availabilityLabel = (availability?: { collegeNotes?: boolean; eli10?: boolean; exactQuestions?: number }) => {
  const parts: string[] = [];
  parts.push(availability?.collegeNotes ? "College-level note" : "Question-led topic");
  if (availability?.eli10) parts.push("Plain-language explanation");
  const questions = availability?.exactQuestions ?? 0;
  if (questions) parts.push(`${questions} question${questions === 1 ? "" : "s"}`);
  return parts.join(" · ");
};

function useCurriculumSubject(subjectSlug: string) {
  const [subject, setSubject] = useState<CurriculumSubjectV2>();
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let active = true;
    setSubject(undefined);
    setFailed(false);
    const request = loadCurriculumSubject(subjectSlug);
    if (!request) setFailed(true);
    else void request.then((loaded) => { if (active) setSubject(loaded); }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [subjectSlug]);
  return { subject, failed };
}

export function CurriculumRoutes({ segments, navigate }: { segments: string[]; navigate: Navigate }) {
  if (segments.length === 1) return <CurriculumCatalogPage navigate={navigate} />;
  const subjectSummary = getCurriculumSubjectSummary(segments[1]);
  if (!subjectSummary) return <CurriculumNotFound navigate={navigate} />;
  if (segments.length === 2) return <CurriculumSubjectPage subjectSlug={segments[1]} navigate={navigate} />;
  if (segments.length === 3 && segments[2] === "practice") return <CurriculumSubjectPractice subjectSlug={segments[1]} navigate={navigate} />;
  if (segments.length === 3) return <CurriculumUnitPage subjectSlug={segments[1]} unitSlug={segments[2]} navigate={navigate} />;
  if (segments.length === 4) return <CurriculumTopicPage subjectSlug={segments[1]} unitSlug={segments[2]} topicSlug={segments[3]} navigate={navigate} />;
  return <CurriculumNotFound navigate={navigate} />;
}

/* -------------------------------------------------------------------------
   Catalog
   ------------------------------------------------------------------------- */

function TopicSearch({ navigate }: { navigate: Navigate }) {
  const [query, setQuery] = useState("");
  const [searchIndex, setSearchIndex] = useState<CurriculumSearchEntryV2[]>();
  const [searchFailed, setSearchFailed] = useState(false);
  const fieldId = useId();
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const searchTokens = useMemo(() => normalizedQuery.split(/[^\p{L}\p{N}]+/u).filter(Boolean), [normalizedQuery]);

  useEffect(() => {
    if (!normalizedQuery || searchIndex) return;
    let active = true;
    setSearchFailed(false);
    void loadCurriculumSearchIndex()
      .then((loaded) => { if (active) setSearchIndex(loaded); })
      .catch(() => { if (active) setSearchFailed(true); });
    return () => { active = false; };
  }, [normalizedQuery, searchIndex]);

  const matchingTopics = useMemo(() => {
    if (!normalizedQuery || !searchIndex) return [];
    return searchIndex.filter((entry) => {
      const searchable = [entry.topicTitle, entry.unitTitle, entry.subjectTitle, ...entry.aliases].join(" ").toLocaleLowerCase();
      return searchTokens.every((token) => searchable.includes(token));
    });
  }, [normalizedQuery, searchIndex, searchTokens]);

  return (
    <>
      <div className="filter-bar">
        <label htmlFor={fieldId}>Search all {catalog.totals.topics} topics</label>
        <input
          id={fieldId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try homeostasis, dosage calculations or genetics"
        />
        {query
          ? <button type="button" className="button button-secondary" onClick={() => setQuery("")}>Clear</button>
          : <span aria-hidden="true" />}
      </div>

      {normalizedQuery && (
        searchFailed ? (
          <EmptyState title="Topic search could not load">Clear the search and try again.</EmptyState>
        ) : !searchIndex ? (
          <LoadingState label="Loading the topic index…" />
        ) : (
          <section className="search-results" aria-live="polite">
            <h2>{matchingTopics.length} matching topic{matchingTopics.length === 1 ? "" : "s"}</h2>
            {matchingTopics.length ? (
              <>
                <div className="result-list">
                  {matchingTopics.slice(0, 100).map((entry) => (
                    <article className="result-card" key={entry.id}>
                      <p className="result-labels">
                        <span>{entry.subjectTitle}</span><span aria-hidden="true">›</span><span>{entry.unitTitle}</span>
                      </p>
                      <h3><Link href={entry.href} navigate={navigate}>{entry.topicTitle}</Link></h3>
                      <p>{availabilityLabel(entry.availability)}</p>
                    </article>
                  ))}
                </div>
                {matchingTopics.length > 100 && (
                  <p className="result-limit">Showing the first 100 of {matchingTopics.length} matches. Add another word to narrow it down.</p>
                )}
              </>
            ) : (
              <EmptyState title="No topic matches that">Try a broader word, or the name of the course or unit.</EmptyState>
            )}
          </section>
        )
      )}
    </>
  );
}

/**
 * The course grid this page renders below its totals, exposed for the /learn
 * landing page so the full catalog appears there too and no course is reachable
 * only through a study path.
 *
 * A re-export, not a second implementation: both surfaces mount the same
 * component, with the same filter and the same per-course figures, so neither
 * can start describing a course differently from the other.
 */
export { CourseCoverageCatalog as CurriculumCourseCatalog } from "../components/CourseTransparency";

function CurriculumCatalogPage({ navigate }: { navigate: Navigate }) {
  const totals = catalog.totals;
  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "All courses" }]} />
      <PageHeader
        eyebrow="The curriculum"
        title="All pre-health courses"
        description={`${totals.subjects} courses, ${totals.units} units and ${totals.topics} topics — one consistent system, so a concept means the same thing everywhere it appears.`}
      />

      <dl className="stat-band" aria-label="Curriculum totals">
        <div><dt>Courses</dt><dd>{totals.subjects}</dd></div>
        <div><dt>Topics</dt><dd>{totals.topics}</dd></div>
        <div><dt>Topics with college notes</dt><dd>{totals.teachingTopics}</dd></div>
        <div><dt>Questions</dt><dd>{totals.uniqueQuestionsAcrossCatalog.toLocaleString("en-US")}</dd></div>
      </dl>

      <div className="section-block">
        <TopicSearch navigate={navigate} />
      </div>

      <CourseCoverageCatalog navigate={navigate} />
    </>
  );
}

/* -------------------------------------------------------------------------
   Subject
   ------------------------------------------------------------------------- */

function CurriculumSubjectPage({ subjectSlug, navigate }: { subjectSlug: string; navigate: Navigate }) {
  const { subject, failed } = useCurriculumSubject(subjectSlug);
  if (failed) return <CurriculumNotFound navigate={navigate} />;
  if (!subject) return <LoadingState label="Loading course…" />;

  const stats = subject.statistics;
  const firstUnit = subject.units[0];
  const firstTopic = firstUnit?.topics[0];

  return (
    <>
      <Breadcrumbs navigate={navigate} items={[
        { label: "Home", href: "/" },
        { label: "All courses", href: "/learn" },
        { label: subject.subject.title },
      ]} />
      <PageHeader
        eyebrow="Course"
        title={subject.subject.title}
        description={stats.teachingTopicCount
          ? "Work through the topics in order, or jump to the one you need. Each topic has a college-level explanation, a plain-language version, quick review and practice."
          : "This course is question-led: it has practice questions with full rationales for every topic. Standalone teaching notes are still being written."}
        actions={
          <>
            {firstUnit && firstTopic && (
              <Link href={curriculumTopicHref(subjectSlug, firstUnit.slug, firstTopic.slug)} navigate={navigate} className="button">
                Start the first topic
              </Link>
            )}
            {stats.uniqueQuestionCount > 0 && (
              <Link href={curriculumPracticeHref(subjectSlug)} navigate={navigate} className="button button-secondary">
                Practise all {stats.uniqueQuestionCount.toLocaleString("en-US")} questions
              </Link>
            )}
          </>
        }
      />

      <CourseCoverageSummary statistics={stats} status={subject.subject.status} navigate={navigate} />

      {(stats.subjectWideQuestionCount ?? 0) > 0 && (
        <div className="notice" role="note">
          <strong>About {stats.subjectWideQuestionCount} of these questions</strong>
          <p>
            They are matched to this course but not yet to a specific topic, so they appear in the
            course-wide practice set rather than on an individual topic page.
          </p>
        </div>
      )}

      <section className="section-block" aria-labelledby="units-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">In study order</p>
            <h2 id="units-title">Units and topics</h2>
          </div>
        </div>
        <div className="unit-grid">
          {subject.units.map((unit) => (
            <article className="unit-card" key={unit.id}>
              <p className="eyebrow">Unit {unit.order}</p>
              <h3><Link href={curriculumUnitHref(subjectSlug, unit.slug)} navigate={navigate}>{unit.title}</Link></h3>
              <p>{unit.topics.length} topic{unit.topics.length === 1 ? "" : "s"}</p>
              <ol>
                {unit.topics.map((topic) => (
                  <li key={topic.id}>
                    <Link href={curriculumTopicHref(subjectSlug, unit.slug, topic.slug)} navigate={navigate}>{topic.title}</Link>
                    <span>{topic.mappedQuestionCount ? `${topic.mappedQuestionCount} Q` : "—"}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------
   Unit
   ------------------------------------------------------------------------- */

function CurriculumUnitPage({ subjectSlug, unitSlug, navigate }: { subjectSlug: string; unitSlug: string; navigate: Navigate }) {
  const { subject, failed } = useCurriculumSubject(subjectSlug);
  if (failed) return <CurriculumNotFound navigate={navigate} />;
  if (!subject) return <LoadingState label="Loading unit…" />;

  const unit = subject.units.find((item) => item.slug === unitSlug);
  if (!unit) return <CurriculumNotFound navigate={navigate} />;

  const unitIndex = subject.units.findIndex((item) => item.slug === unitSlug);

  return (
    <>
      <Breadcrumbs navigate={navigate} items={[
        { label: "Home", href: "/" },
        { label: "All courses", href: "/learn" },
        { label: subject.subject.title, href: curriculumSubjectHref(subjectSlug) },
        { label: unit.title },
      ]} />
      <PageHeader
        eyebrow={`Unit ${unit.order} · ${subject.subject.title}`}
        title={unit.title}
        description={`${unit.topics.length} topic${unit.topics.length === 1 ? "" : "s"}, in the order they are usually taught.`}
      />
      <section className="section-block" aria-labelledby="unit-topics-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">In order</p>
            <h2 id="unit-topics-title">Topics in this unit</h2>
          </div>
        </div>
        <div className="topic-list">
        {unit.topics.map((topic) => (
          <article key={topic.id}>
            <p className="topic-order" aria-hidden="true">{unit.order}.{topic.order}</p>
            <div>
              <h3><Link href={curriculumTopicHref(subjectSlug, unit.slug, topic.slug)} navigate={navigate}>{topic.title}</Link></h3>
              <p>{availabilityLabel(topic.availability ? { ...topic.availability, exactQuestions: topic.mappedQuestionCount } : { exactQuestions: topic.mappedQuestionCount })}</p>
            </div>
            <Link href={curriculumTopicHref(subjectSlug, unit.slug, topic.slug)} navigate={navigate} className="button button-secondary">Open topic</Link>
          </article>
        ))}
        </div>
      </section>
      <PreviousNext
        navigate={navigate}
        label="Units"
        previous={unitIndex > 0
          ? { label: "Previous unit", title: subject.units[unitIndex - 1].title, href: curriculumUnitHref(subjectSlug, subject.units[unitIndex - 1].slug) }
          : undefined}
        next={unitIndex < subject.units.length - 1
          ? { label: "Next unit", title: subject.units[unitIndex + 1].title, href: curriculumUnitHref(subjectSlug, subject.units[unitIndex + 1].slug) }
          : undefined}
      />
    </>
  );
}

/* -------------------------------------------------------------------------
   Topic
   ------------------------------------------------------------------------- */

const TAB_LABELS: Record<TopicTab, string> = {
  learn: "Learn",
  practice: "Practice",
  review: "Quick review",
};

/**
 * Sections read aloud, in the order a reader would take them: what the topic is,
 * the plain-language version, the college-level note, then the terms. Markup is
 * stripped here so nothing is spoken that is not prose, and an empty section is
 * dropped rather than announced and skipped.
 */
const speechSectionsFor = (topic: CurriculumTopicV2): SpeechSection[] => [
  { id: "overview", label: "What this topic is", text: topic.sections.overview },
  { id: "eli10", label: "The plain-language explanation", text: topic.sections.eli10 },
  { id: "college-notes", label: "The college-level explanation", text: topic.sections.collegeNotes },
  { id: "key-terms", label: "Key terms", text: topic.sections.keyTerms },
]
  .map((section) => ({ ...section, text: plainTextFromMarkdown(section.text) }))
  .filter((section) => Boolean(section.text));

function CurriculumTopicPage({ subjectSlug, unitSlug, topicSlug, navigate }: { subjectSlug: string; unitSlug: string; topicSlug: string; navigate: Navigate }) {
  const { subject, failed: subjectFailed } = useCurriculumSubject(subjectSlug);
  const [topic, setTopic] = useState<CurriculumTopicV2>();
  const [bank, setBank] = useState<CurriculumQuestionBankV2>();
  const [failed, setFailed] = useState(false);
  const [tab, setTab] = useState<TopicTab>("learn");
  const tabsId = useId();
  const tabRefs = useRef<Partial<Record<TopicTab, HTMLButtonElement | null>>>({});
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    setTopic(undefined);
    setBank(undefined);
    setFailed(false);
    const request = loadCurriculumTopic(subjectSlug, unitSlug, topicSlug);
    if (!request) setFailed(true);
    else void request.then((loaded) => {
      if (!active) return;
      setTopic(loaded);
      // Counted once per topic, in this browser only; see lib/progress.ts.
      recordTopicView(subjectSlug, loaded.id);
      const hasExplanation = Boolean(loaded.sections.collegeNotes.trim() || loaded.sections.eli10.trim());
      setTab(hasExplanation ? "learn" : "practice");
    }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [subjectSlug, unitSlug, topicSlug]);

  useEffect(() => {
    if (tab !== "practice" || bank) return;
    let active = true;
    const request = loadCurriculumQuestions(subjectSlug);
    if (!request) setFailed(true);
    else void request.then((loaded) => { if (active) setBank(loaded); }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [tab, bank, subjectSlug]);

  const questions = useMemo(
    () => (topic && bank ? bank.questions.filter((question) => question.mappedCanonicalTopicIds.includes(topic.id)) : []),
    [bank, topic],
  );

  const speechSections = useMemo(() => (topic ? speechSectionsFor(topic) : []), [topic]);

  /**
   * "Continue with", resolved against this course's own bundle. The metadata
   * sidecar's related ids are only ever produced by a question that maps to two
   * topics, and no question in the corpus maps across courses, so every id that
   * exists resolves here; one that did not would be dropped rather than guessed
   * at from its slug.
   */
  const relatedTopics = useMemo<RelatedTopicLink[]>(() => {
    const ids = topic ? getTopicMetadata(topic.id)?.relatedTopics ?? [] : [];
    if (!subject || !ids.length) return [];
    const byId = new Map(subject.units.flatMap((unitItem) =>
      unitItem.topics.map((topicItem) => [topicItem.id, { unit: unitItem, topic: topicItem }] as const)));
    return ids.flatMap((id) => {
      const found = byId.get(id);
      if (!found) return [];
      return [{
        id,
        title: found.topic.title,
        unitTitle: found.unit.title,
        href: curriculumTopicHref(subjectSlug, found.unit.slug, found.topic.slug),
      }];
    });
  }, [subject, subjectSlug, topic]);

  if (failed || subjectFailed) return <CurriculumNotFound navigate={navigate} />;
  if (!subject || !topic) return <LoadingState label="Loading topic…" />;

  const unit = subject.units.find((item) => item.slug === unitSlug);
  if (!unit) return <CurriculumNotFound navigate={navigate} />;

  const flatTopics = subject.units.flatMap((itemUnit) => itemUnit.topics.map((itemTopic) => ({ unit: itemUnit, topic: itemTopic })));
  const currentIndex = flatTopics.findIndex((item) => item.topic.id === topic.id);
  const metadata = getTopicMetadata(topic.id);
  const questionCount = topic.availability?.exactQuestions ?? 0;

  // Everything the college-level reading holds, in source order. On a topic with
  // no college note this composes whatever prose the bundle does carry — usually
  // the learning objectives — which is why it is also the head of the
  // plain-language reading below.
  // Matched against, so a passage the college note already carries is not
  // printed a second time under its own heading. See `sectionUnlessDuplicated`.
  const collegeNotesNormalized = normalizeForOverlap(topic.sections.collegeNotes);

  const college = [
    sectionUnlessDuplicated("What this topic is", topic.sections.overview, collegeNotesNormalized),
    sectionUnlessDuplicated("Why it matters", topic.sections.whyItMatters, collegeNotesNormalized),
    sectionUnlessDuplicated("Learning objectives", topic.sections.learningObjectives, collegeNotesNormalized),
    sectionUnlessDuplicated("Key terms", topic.sections.keyTerms, collegeNotesNormalized),
    markdownSection("College-level explanation", topic.sections.collegeNotes),
    sectionUnlessDuplicated("How it works", topic.sections.howItWorks, collegeNotesNormalized),
    sectionUnlessDuplicated("Comparisons", topic.sections.comparisons, collegeNotesNormalized),
    sectionUnlessDuplicated("Worked examples", topic.sections.workedExamples, collegeNotesNormalized),
    sectionUnlessDuplicated("High-yield connections", topic.sections.highYield, collegeNotesNormalized),
    sectionUnlessDuplicated("Common confusions", topic.sections.commonConfusions, collegeNotesNormalized),
    sectionUnlessDuplicated("Memory aids", topic.sections.memoryAids, collegeNotesNormalized),
  ].filter(Boolean).join("\n\n");

  const hasCollege = Boolean(topic.sections.collegeNotes.trim());
  const hasPlain = Boolean(topic.sections.eli10.trim());
  const plain = hasCollege
    ? topic.sections.eli10
    : [college, markdownSection("In plain language", topic.sections.eli10)].filter(Boolean).join("\n\n");

  const review = [
    markdownSection("Quick review", topic.sections.quickReview),
    markdownSection("High-yield connections", topic.sections.highYield),
    markdownSection("Common confusions", topic.sections.commonConfusions),
    markdownSection("Memory aids", topic.sections.memoryAids),
  ].filter(Boolean).join("\n\n");

  const tabs: TopicTab[] = [];
  if (hasCollege || hasPlain) tabs.push("learn");
  if (questionCount > 0) tabs.push("practice");
  if (review) tabs.push("review");
  // The stored tab can name a mode this topic does not have, either while the
  // next topic is loading or after a topic with a different shape.
  const activeTab = tabs.includes(tab) ? tab : tabs[0];

  const openTab = (next: TopicTab) => {
    setTab(next);
    // The panel is the reading surface, so focus lands there rather than on the
    // tab: a keyboard reader presses "Start learning" and is already in the text.
    panelRef.current?.focus();
  };

  // Roving arrow-key navigation, as expected of a tablist.
  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const offset = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : event.key === "Home" ? -index : event.key === "End" ? tabs.length - 1 - index : 0;
    if (!offset) return;
    event.preventDefault();
    const next = tabs[(index + offset + tabs.length) % tabs.length];
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <Breadcrumbs navigate={navigate} items={[
        { label: "Home", href: "/" },
        { label: "All courses", href: "/learn" },
        { label: subject.subject.title, href: curriculumSubjectHref(subjectSlug) },
        { label: unit.title, href: curriculumUnitHref(subjectSlug, unitSlug) },
        { label: topic.title },
      ]} />
      <PageHeader
        eyebrow={`Unit ${unit.order} · Topic ${topic.order} · ${subject.subject.title}`}
        title={topic.title}
        description={readableExcerpt(
          topic.sections.whyItMatters
          || topic.sections.overview
          || (topic.availability?.collegeNotes ? "A topic in this course." : "A question-led topic with full answer rationales."),
        )}
      />

      <TopicFacts
        subjectSlug={subjectSlug}
        topicId={topic.id}
        metadata={metadata}
        questionCount={questionCount}
        onStartLearning={tabs.length ? () => openTab(tabs[0]) : undefined}
        onPractice={questionCount > 0 ? () => openTab("practice") : undefined}
      />

      <ListenControls key={topic.id} sections={speechSections} sourceId={topic.id} label={topic.title} />

      {activeTab && (
        <>
          <div className="topic-tabs" role="tablist" aria-label="How to study this topic">
            {tabs.map((value, index) => (
              <button
                key={value}
                ref={(element) => { tabRefs.current[value] = element; }}
                type="button"
                role="tab"
                id={`${tabsId}-tab-${value}`}
                aria-selected={activeTab === value}
                aria-controls={`${tabsId}-panel`}
                tabIndex={activeTab === value ? 0 : -1}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                onClick={() => setTab(value)}
              >
                {value === "practice" ? `${TAB_LABELS[value]} (${questionCount})` : TAB_LABELS[value]}
              </button>
            ))}
          </div>

          <div
            className="topic-panel"
            role="tabpanel"
            id={`${tabsId}-panel`}
            aria-labelledby={`${tabsId}-tab-${activeTab}`}
            tabIndex={-1}
            ref={panelRef}
          >
            {activeTab === "learn" && (
              <ExplanationTabs college={hasCollege ? college : ""} plain={hasPlain ? plain : ""} />
            )}

            {activeTab === "practice" && (
              !bank ? <LoadingState label="Loading questions…" /> : questions.length ? (
                <>
                  <div className="mode-intro">
                    <p className="eyebrow">Matched to this topic</p>
                    <h2>{questions.length} practice question{questions.length === 1 ? "" : "s"}</h2>
                    <p>Every question explains why the right answer is right, then says it again in plain language.</p>
                  </div>
                  <RichQuestionPractice questions={questions} subjectSlug={subjectSlug} />
                </>
              ) : (
                <EmptyState
                  title="No questions for this topic yet"
                  action={<Link href={curriculumPracticeHref(subjectSlug)} navigate={navigate} className="button">Practise the whole course</Link>}
                >
                  This topic has no questions matched to it. The course-wide practice set may still cover it.
                </EmptyState>
              )
            )}

            {activeTab === "review" && <MarkdownDocument source={review} />}
          </div>
        </>
      )}

      <ConnectedLearning topics={relatedTopics} navigate={navigate} />

      <EvidenceExplorer key={topic.id} initialQuery={topic.title} />

      {/* The per-topic provenance block was removed. Source and licence
          information now lives in one place, on /licensing, which is also what
          the CC BY 4.0 material in this library requires. The educational-use
          notice stays on the page: it is a safety statement, not provenance. */}
      <StudyUseNotice />

      <PreviousNext
        navigate={navigate}
        label="Topics"
        previous={currentIndex > 0
          ? { label: "Previous topic", title: flatTopics[currentIndex - 1].topic.title, href: curriculumTopicHref(subjectSlug, flatTopics[currentIndex - 1].unit.slug, flatTopics[currentIndex - 1].topic.slug) }
          : undefined}
        next={currentIndex < flatTopics.length - 1
          ? { label: "Next topic", title: flatTopics[currentIndex + 1].topic.title, href: curriculumTopicHref(subjectSlug, flatTopics[currentIndex + 1].unit.slug, flatTopics[currentIndex + 1].topic.slug) }
          : undefined}
      />
    </>
  );
}

/* -------------------------------------------------------------------------
   Course-wide practice
   ------------------------------------------------------------------------- */

function CurriculumSubjectPractice({ subjectSlug, navigate }: { subjectSlug: string; navigate: Navigate }) {
  const summary = getCurriculumSubjectSummary(subjectSlug)!;
  const [bank, setBank] = useState<CurriculumQuestionBankV2>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    const request = loadCurriculumQuestions(subjectSlug);
    if (!request) setFailed(true);
    else void request.then((loaded) => { if (active) setBank(loaded); }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [subjectSlug]);

  // Memoised so the practice component never resets a run mid-session on an
  // unrelated re-render of this page.
  const questions = useMemo(() => (bank ? [...bank.questions, ...(bank.subjectWideQuestions ?? [])] : []), [bank]);

  if (failed) return <CurriculumNotFound navigate={navigate} />;
  if (!bank) return <LoadingState label="Loading questions…" />;

  return (
    <>
      <Breadcrumbs navigate={navigate} items={[
        { label: "Home", href: "/" },
        { label: "All courses", href: "/learn" },
        { label: summary.title, href: curriculumSubjectHref(subjectSlug) },
        { label: "Practice" },
      ]} />
      <PageHeader
        eyebrow="Course-wide practice"
        title={`${summary.title} questions`}
        description={`${questions.length.toLocaleString("en-US")} questions, from topic-matched banks and course-wide sets.`}
      />
      {questions.length ? (
        <RichQuestionPractice questions={questions} subjectSlug={subjectSlug} />
      ) : (
        <EmptyState
          title="No questions yet"
          action={<Link href={curriculumSubjectHref(subjectSlug)} navigate={navigate} className="button">Read the course notes</Link>}
        >
          This course has teaching content only for now. Its question bank is still being written.
        </EmptyState>
      )}
    </>
  );
}

/* -------------------------------------------------------------------------
   404
   ------------------------------------------------------------------------- */

function CurriculumNotFound({ navigate }: { navigate: Navigate }) {
  return (
    <section className="not-found">
      <p className="error-code">404</p>
      <h1>We could not find that topic</h1>
      <p>The link may be out of date, or the course or topic may have been renamed.</p>
      <div className="action-row">
        <Link href="/learn" navigate={navigate} className="button">Browse all courses</Link>
        <Link href="/search" navigate={navigate} className="button button-secondary">Search instead</Link>
      </div>
    </section>
  );
}
