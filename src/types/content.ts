export type ApprovalStatus = "approved";
export type ReviewStatus = "audited";
export type ContentType = "note" | "question" | "flashcard";
export type QuestionDifficulty = "easy" | "medium" | "hard" | "unknown";
export type NoteDifficulty = "introductory" | "intermediate" | "advanced" | "unknown";

export interface Subject {
  id: string;
  slug: string;
  name: string;
  status: ApprovalStatus;
  approvedContentCount?: number;
}

export interface Lesson {
  id: string;
  subject: string;
  title: string;
  slug: string;
  lessonNumber: number;
  status: "approved";
}

export interface Note {
  id: string;
  subject: string;
  contentType: "note";
  title: string;
  lesson: string;
  filePath: string;
  status: "approved";
  reviewStatus: ReviewStatus;
  source: string;
  originalFile: string;
  tags: string[];
}

export interface NoteFrontMatter {
  id: string;
  title: string;
  slug: string;
  subject: string;
  subjectName: string;
  contentType: "note";
  lesson: string;
  lessonNumber: number;
  description: string;
  status: "approved";
  reviewStatus: ReviewStatus;
  humanVerificationRequired: false;
  difficulty: NoteDifficulty;
  tags: string[];
  source: string;
  sourceUrl: string;
  originalFile: string;
  lastReviewed: string;
  version: string;
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  subject: string;
  lesson: string;
  contentType: "question";
  questionType: "multiple-choice" | "multiple-select" | "true-false" | "short-answer" | "fill-in-the-blank" | "matching" | "calculation" | "case-study" | "NCLEX-style";
  question: string;
  options: QuestionOption[];
  correctAnswer: string | string[];
  explanation: string;
  difficulty: QuestionDifficulty;
  tags: string[];
  source: string;
  originalFile: string;
  status: "approved";
  reviewStatus: ReviewStatus;
  humanVerificationRequired: false;
  filePath: string;
}

export interface Tag {
  id: string;
  name: string;
  count: number;
}

export interface ContentIndexItem {
  id: string;
  subject: string;
  contentType: ContentType;
  title: string;
  lesson?: string;
  filePath: string;
  status: "approved";
  reviewStatus: ReviewStatus;
  source: string;
  originalFile: string;
  tags?: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  subject: string;
  contentType: ContentType;
  lesson?: string;
  difficulty?: QuestionDifficulty | NoteDifficulty;
  tags: string[];
  href: string;
}

export interface Asset {
  id: string;
  path: string;
  kind: "image" | "diagram" | "download";
  alt?: string;
  title?: string;
  mimeType?: string;
}

export interface ValidationIssue {
  code: string;
  message: string;
  path?: string;
  severity: "error" | "warning";
}

export interface ValidationResult {
  valid: boolean;
  checkedAt: string;
  filesChecked: number;
  issues: ValidationIssue[];
}

export interface SearchFilters {
  query?: string;
  subject?: string;
  contentType?: ContentType | "all";
  lesson?: string;
  difficulty?: string;
  tag?: string;
}

export interface CurriculumReferenceV2 {
  text: string;
  url?: string;
}

export interface CurriculumTopicSummaryV2 {
  id: string;
  slug: string;
  title: string;
  order: number;
  status: string;
  bundlePath: string;
  mappedQuestionCount: number;
  availability?: CurriculumTopicAvailabilityV2;
}

export interface CurriculumUnitV2 {
  id: string;
  slug: string;
  title: string;
  order: number;
  aliases: Array<Record<string, unknown>>;
  topics: CurriculumTopicSummaryV2[];
}

export interface CurriculumSubjectV2 {
  schemaVersion: "2.0.0";
  subject: {
    id: string;
    slug: string;
    title: string;
    aliases: Array<Record<string, unknown>>;
    status: string;
    category?: string;
  };
  units: CurriculumUnitV2[];
  statistics: {
    unitCount: number;
    topicCount: number;
    completeTeachingTopicCount?: number;
    teachingTopicCount?: number;
    eli10TopicCount?: number;
    highYieldTopicCount?: number;
    referencedTopicCount?: number;
    exactOrMappedQuestionCount?: number;
    subjectWideQuestionCount?: number;
    uniqueQuestionCount: number;
    studyPackQuestionCount?: number;
    nativeAppQuestionCount?: number;
    deferredToAnatomyPhysiology2QuestionCount?: number;
    questionAssociationCount?: number;
    citationReviewRequiredCount: number;
  };
  provenance: Record<string, unknown>;
}

export interface CurriculumTopicV2 {
  schemaVersion: "2.0.0";
  id: string;
  slug: string;
  title: string;
  subject: { id: string; slug: string; title: string };
  unit: { id: string; slug: string; title: string; order: number };
  order: number;
  status: string;
  sections: {
    overview: string;
    whyItMatters: string;
    learningObjectives: string;
    keyTerms: string;
    collegeNotes: string;
    howItWorks: string;
    comparisons: string;
    highYield: string;
    commonConfusions: string;
    memoryAids: string;
    eli10: string;
    quickReview: string;
    workedExamples?: string;
    references: CurriculumReferenceV2[];
  };
  availability?: CurriculumTopicAvailabilityV2;
  aliases: Array<Record<string, unknown>>;
  authority: Record<string, unknown>;
  provenance: Record<string, unknown>;
  sourceSnapshotMarkdown: string;
}

export interface CurriculumQuestionV2 {
  id: string;
  sourceCollection: string;
  sourceTopicId: string;
  mappedCanonicalTopicIds: string[];
  mappingScope: "exact" | "broad-source-topic" | "subject-wide-overlay" | "deferred-to-other-subject";
  stem: string;
  options: Array<{ id: string; text: string; sourceId?: string }>;
  correctAnswer: string;
  rationales: { whyCorrect: string; eli10: string; distractorAnalysis?: string };
  difficulty: "foundational" | "intermediate" | "advanced" | "unknown";
  tags: string[];
  references: CurriculumReferenceV2[];
  computation?: Record<string, unknown> | null;
  citationReviewRequired: boolean;
  provenance: Record<string, unknown>;
  sourceSnapshotMarkdown: string;
}

export interface CurriculumQuestionBankV2 {
  schemaVersion: "2.0.0";
  subjectSlug: string;
  questions: CurriculumQuestionV2[];
  subjectWideQuestions?: CurriculumQuestionV2[];
  deferred: CurriculumQuestionV2[];
}

export interface CurriculumTopicAvailabilityV2 {
  collegeNotes: boolean;
  eli10: boolean;
  highYield: boolean;
  quickReview: boolean;
  workedExamples?: boolean;
  references: boolean;
  exactQuestions: number;
}

export interface CurriculumCatalogV2 {
  schemaVersion: "2.0.0";
  generatedOn: string;
  registryId: string;
  registryVersion: string;
  totals: {
    subjects: number;
    units: number;
    topics: number;
    teachingTopics: number;
    eli10Topics: number;
    referencedTopics: number;
    uniqueQuestionsAcrossCatalog: number;
    questionPlacements: number;
  };
  subjects: Array<CurriculumSubjectV2["subject"] & { legacySlugs?: string[]; statistics: CurriculumSubjectV2["statistics"]; href: string }>;
}

export interface CurriculumSearchEntryV2 {
  id: string;
  subjectSlug: string;
  subjectTitle: string;
  unitSlug: string;
  unitTitle: string;
  topicSlug: string;
  topicTitle: string;
  aliases: string[];
  availability: CurriculumTopicAvailabilityV2;
  href: string;
}
