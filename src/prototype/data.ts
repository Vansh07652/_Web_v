/**
 * MedAtlas prototype — local mock data.
 *
 * Everything in this module is demo-only educational placeholder content for a
 * front-end visual prototype. It is not connected to the production content
 * pipeline, is never clinical guidance, and is loaded from no external source.
 */

export interface DemoCourse {
  id: string;
  title: string;
  lessonsDone: number;
  lessonsTotal: number;
}

export interface DemoPlanItem {
  id: string;
  label: string;
  done: boolean;
}

export interface DemoRecommendation {
  id: string;
  kind: "practice" | "review" | "flashcards";
  title: string;
  detail: string;
}

export interface DemoMetric {
  id: string;
  value: string;
  label: string;
  icon: "cards" | "accuracy" | "streak" | "countdown";
}

export const demoCourses = {
  student: { name: "Jordan Lee", initials: "JL" },
  greeting: "Good morning, Jordan",
  subtitle: "Continue building your study momentum.",
  courses: [
    { id: "anatomy-physiology", title: "Anatomy & Physiology", lessonsDone: 27, lessonsTotal: 40 },
    { id: "general-biology", title: "General Biology", lessonsDone: 18, lessonsTotal: 36 },
    { id: "organic-chemistry", title: "Organic Chemistry", lessonsDone: 9, lessonsTotal: 32 },
    { id: "foundations-of-nursing", title: "Foundations of Nursing", lessonsDone: 12, lessonsTotal: 24 },
  ] as readonly DemoCourse[],
  quickTools: [
    { id: "saved", label: "Saved items", icon: "bookmark" },
    { id: "timer", label: "Study timer", icon: "timer" },
    { id: "notes", label: "Notes", icon: "notes" },
  ],
  continueStudying: {
    badge: "Anatomy & Physiology",
    title: "The Cardiac Cycle",
    text: "Understand systole, diastole, heart sounds, and blood flow.",
    position: "Lesson 4 of 12",
    progress: 68,
  },
  metrics: [
    { id: "due", value: "24", label: "Flashcards due", icon: "cards" },
    { id: "avg", value: "82%", label: "Quiz average", icon: "accuracy" },
    { id: "streak", value: "7 days", label: "Study streak", icon: "streak" },
    { id: "mcat", value: "42 days", label: "Until MCAT", icon: "countdown" },
  ] as readonly DemoMetric[],
  studyPlan: [
    { id: "plan-flashcards", label: "Review 24 flashcards", done: true },
    { id: "plan-questions", label: "Complete 10 cardiovascular questions", done: false },
    { id: "plan-lesson", label: "Finish “The Cardiac Cycle”", done: false },
    { id: "plan-traps", label: "Review 3 saved exam traps", done: false },
  ] as readonly DemoPlanItem[],
  recommendations: [
    {
      id: "rec-weak",
      kind: "practice",
      title: "Practice weak topic: Blood flow through the heart",
      detail: "10 targeted questions · ~12 min",
    },
    {
      id: "rec-missed",
      kind: "review",
      title: "Review missed questions",
      detail: "6 questions from this week",
    },
    {
      id: "rec-cards",
      kind: "flashcards",
      title: "Start a 15-minute flashcard session",
      detail: "Cardiovascular Foundations deck",
    },
  ] as readonly DemoRecommendation[],
} as const;

/* ------------------------------------------------------------------------- */

export interface DemoOutlineLesson {
  id: string;
  title: string;
  state: "done" | "active" | "todo";
}

export interface DemoOutlineUnit {
  id: string;
  title: string;
  lessons: readonly DemoOutlineLesson[];
}

export interface DemoLessonSectionParagraph {
  id: string;
  text: string;
}

export const demoLesson = {
  course: "Anatomy & Physiology",
  courseProgress: 68,
  unit: "Unit 1",
  title: "The Cardiac Cycle",
  description:
    "Learn how the heart fills and ejects blood through coordinated phases of contraction and relaxation.",
  meta: { readTime: "12 min read", level: "Beginner friendly", reviewed: "Last reviewed today" },
  tabs: ["Notes", "Key Terms", "Practice"] as readonly string[],
  objectives: [
    "Differentiate systole and diastole",
    "Identify the sequence of valve events",
    "Connect heart sounds to valve closure",
  ] as readonly string[],
  sectionsComplete: { done: 6, total: 9 },
  outline: [
    {
      id: "unit-1",
      title: "Unit 1 · Heart Foundations",
      lessons: [
        { id: "heart-anatomy", title: "Heart anatomy", state: "done" },
        { id: "blood-flow", title: "Blood flow", state: "done" },
        { id: "cardiac-cycle", title: "The cardiac cycle", state: "active" },
        { id: "heart-sounds", title: "Heart sounds", state: "todo" },
      ],
    },
    {
      id: "unit-2",
      title: "Unit 2 · Blood Vessels",
      lessons: [
        { id: "arteries-veins", title: "Arteries and veins", state: "todo" },
        { id: "capillary-exchange", title: "Capillary exchange", state: "todo" },
      ],
    },
    {
      id: "unit-3",
      title: "Unit 3 · Blood Pressure",
      lessons: [
        { id: "pressure-basics", title: "Pressure and resistance", state: "todo" },
        { id: "regulation", title: "Short-term regulation", state: "todo" },
      ],
    },
  ] as readonly DemoOutlineUnit[],
  intro: {
    heading: "What is the cardiac cycle?",
    paragraphs: [
      {
        id: "p1",
        text:
          "The cardiac cycle is one complete heartbeat: a coordinated sequence in which the heart's chambers relax to fill with blood and then contract to eject it. Each cycle lasts under a second at rest, yet every phase happens in a precise, repeatable order.",
      },
      {
        id: "p2",
        text:
          "The two headline phases are diastole, when a chamber relaxes and fills, and systole, when it contracts and ejects. Because the atria and ventricles take turns, pressure gradients — not the valves themselves — decide when blood moves forward.",
      },
      {
        id: "p3",
        text:
          "Valves simply respond to those pressures: they open when pressure behind them is greater and snap shut when flow tries to reverse. Those closures are what you hear as the heart sounds.",
      },
    ] as readonly DemoLessonSectionParagraph[],
  },
  phases: [
    { id: "filling", title: "Ventricular filling", note: "AV valves open · ventricles relax" },
    { id: "atrial-systole", title: "Atrial systole", note: "Atria top off the ventricles" },
    { id: "ventricular-systole", title: "Ventricular systole", note: "Semilunar valves open · ejection" },
    { id: "isovolumetric", title: "Isovolumetric relaxation", note: "All four valves briefly closed" },
  ] as const,
  callouts: {
    highYield:
      "S1 occurs when the atrioventricular valves close. S2 occurs when the semilunar valves close.",
    clinical:
      "Heart sounds provide clues about valve closure and can help identify abnormal cardiac findings.",
    examTrap:
      "Do not confuse ventricular systole with ventricular filling. Most ventricular filling happens during diastole.",
  },
  keyTerms: ["Systole", "Diastole", "AV valves", "Semilunar valves", "Stroke volume"] as readonly string[],
  upNext: { title: "Heart Sounds", detail: "8 min lesson" },
  previous: { title: "Blood Flow" },
} as const;

/* ------------------------------------------------------------------------- */

export interface DemoChoice {
  id: "A" | "B" | "C" | "D";
  text: string;
}

export const demoQuestion = {
  breadcrumb: ["Practice", "Anatomy & Physiology", "Cardiovascular System"] as readonly string[],
  position: "Question 3 of 10",
  progress: 30,
  topic: "Cardiac Cycle",
  stem: "Which event directly produces the first heart sound (S1)?",
  choices: [
    { id: "A", text: "Opening of the semilunar valves" },
    { id: "B", text: "Closure of the atrioventricular valves" },
    { id: "C", text: "Opening of the atrioventricular valves" },
    { id: "D", text: "Closure of the semilunar valves" },
  ] as readonly DemoChoice[],
  selected: "C" as const,
  correct: "B" as const,
  rationale:
    "S1 is produced by closure of the mitral and tricuspid valves at the beginning of ventricular systole.",
  whyOthers: [
    {
      id: "A",
      text: "The semilunar valves open silently — valve openings do not produce heart sounds.",
    },
    {
      id: "C",
      text: "AV valve opening lets the ventricles fill during diastole; like all valve openings, it is silent.",
    },
    {
      id: "D",
      text: "Closure of the semilunar valves produces the second heart sound, S2 — not S1.",
    },
  ] as readonly { id: string; text: string }[],
  keyTakeaway: "S1 = AV valve closure. S2 = semilunar valve closure.",
  session: { streak: 2, accuracy: "2 of 3 correct", weakTopic: "Heart sounds" },
} as const;

/* ------------------------------------------------------------------------- */

export interface DemoFlashcard {
  id: string;
  category: string;
  front: string;
  back: string;
}

export const demoFlashcards = {
  deck: "Cardiovascular Foundations",
  description: "Review high-yield heart anatomy and physiology.",
  startPosition: 12,
  deckSize: 40,
  studiedToday: 18,
  dueToday: 24,
  lists: [
    { id: "weak", label: "Weak cards", count: 9 },
    { id: "saved", label: "Saved cards", count: 14 },
    { id: "all", label: "All cards", count: 40 },
  ] as readonly { id: string; label: string; count: number }[],
  cards: [
    {
      id: "s1",
      category: "Physiology",
      front: "What causes the first heart sound, S1?",
      back: "Closure of the atrioventricular valves: the mitral and tricuspid valves.",
    },
    {
      id: "s2",
      category: "Physiology",
      front: "What causes the second heart sound, S2?",
      back: "Closure of the semilunar valves: the aortic and pulmonary valves.",
    },
    {
      id: "diastole",
      category: "Physiology",
      front: "During which phase does most ventricular filling occur?",
      back: "Diastole — the ventricles fill while relaxed, before atrial contraction tops them off.",
    },
    {
      id: "stroke-volume",
      category: "Physiology",
      front: "Define stroke volume.",
      back: "The volume of blood ejected by a ventricle in one contraction (end-diastolic volume minus end-systolic volume).",
    },
    {
      id: "av-valves",
      category: "Anatomy",
      front: "Name the two atrioventricular valves.",
      back: "The mitral (bicuspid) valve on the left and the tricuspid valve on the right.",
    },
    {
      id: "semilunar",
      category: "Anatomy",
      front: "Name the two semilunar valves.",
      back: "The aortic valve and the pulmonary valve.",
    },
  ] as readonly DemoFlashcard[],
} as const;
