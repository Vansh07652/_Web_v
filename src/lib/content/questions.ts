import questionsJson from "../../../data/questions.json";
import type { Question } from "../../types";

const questions = questionsJson as Question[];

export const loadQuestions = (): readonly Question[] => questions;
export const getQuestionsBySubject = (subjectSlug: string): Question[] =>
  questions.filter((question) => question.subject === subjectSlug);
export const getQuestionsByLesson = (subjectSlug: string, lessonSlug: string): Question[] =>
  questions.filter((question) => question.subject === subjectSlug && question.lesson === lessonSlug);
