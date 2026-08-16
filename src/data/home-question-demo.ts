import type { CurriculumQuestionV2 } from "../types";

/**
 * A small, source-grounded sample for the homepage. Keeping it separate from
 * the full question bank avoids making a visitor download a course-sized data
 * file before they have chosen to practise.
 */
export const homeQuestionDemo = {
  stem: "A medical student is practising anatomical descriptions on a patient who is standing upright with feet on the floor, arms at the sides, palms facing forward, and head level. Which term best describes this posture?",
  options: [
    { id: "A", text: "Supine position" },
    { id: "B", text: "Prone position" },
    { id: "C", text: "Anatomical position" },
    { id: "D", text: "Fowler's position" },
  ],
  correctAnswer: "C",
  rationales: {
    whyCorrect: "The anatomical position is the universal reference point for directional terminology. Supine means lying face up, prone means lying face down, and Fowler's position describes a seated position with the back elevated.",
    eli10: "Think of a toy soldier standing at attention — that is the official stance clinicians use when they describe where something is in the body.",
  },
  references: [
    { text: "BCcampus, Anatomy and Physiology 2e. CC BY 4.0.", url: "https://opentextbc.ca/anatomyandphysiology2e/" },
    { text: "OpenStax, Anatomy and Physiology 2e.", url: "https://openstax.org/details/books/anatomy-and-physiology-2e" },
  ],
} satisfies Pick<CurriculumQuestionV2, "stem" | "options" | "correctAnswer" | "rationales" | "references">;
