/**
 * Type definitions for JSLearn — JavaScript learning platform data.
 */

export interface CodeExample {
  title: string;
  titleKa?: string;
  code: string;
  output?: string;
}

export interface Chapter {
  id: number;
  title: string;
  titleKa: string;
  titleRu?: string;
  titleHy?: string;
  titleAz?: string;
  description: string;
  descriptionKa: string;
  descriptionRu?: string;
  descriptionHy?: string;
  descriptionAz?: string;
  icon: string;
  keyTopics: string[];
  keyTopicsKa: string[];
  keyTopicsRu?: string[];
  keyTopicsHy?: string[];
  keyTopicsAz?: string[];
  summary: string;
  summaryKa?: string;
  summaryRu?: string;
  summaryHy?: string;
  summaryAz?: string;
  keyPoints: string[];
  keyPointsKa?: string[];
  keyPointsRu?: string[];
  keyPointsHy?: string[];
  keyPointsAz?: string[];
  funFact: string;
  funFactKa?: string;
  funFactRu?: string;
  funFactHy?: string;
  funFactAz?: string;
  realWorld: string;
  realWorldKa?: string;
  realWorldRu?: string;
  realWorldHy?: string;
  realWorldAz?: string;
  keyFigures?: string[];
  keyFiguresKa?: string[];
  keyFiguresRu?: string[];
  keyFiguresHy?: string[];
  keyFiguresAz?: string[];
  codeExamples?: CodeExample[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionKa?: string;
  questionRu?: string;
  questionHy?: string;
  options: string[];
  optionsKa?: string[];
  optionsRu?: string[];
  optionsHy?: string[];
  correctIndex: number;
  explanation: string;
  explanationKa?: string;
  explanationRu?: string;
  explanationHy?: string;
}

export interface Quiz {
  id: string;
  chapterId: number;
  title: string;
  titleKa?: string;
  titleRu?: string;
  titleHy?: string;
  questions: QuizQuestion[];
}

export interface KeyFigure {
  name: string;
  nameKa: string;
  nameRu?: string;
  nameHy?: string;
  nameAz?: string;
  years: string;
  photo: string;
  nationality: string;
  nationalityKa?: string;
  nationalityRu?: string;
  nationalityHy?: string;
  nationalityAz?: string;

  contribution: string;
  contributionKa?: string;
  contributionRu?: string;
  contributionHy?: string;
  details: string;
  detailsKa?: string;
  detailsRu?: string;
  detailsHy?: string;
  field: string;
  fieldKa?: string;
  fieldRu?: string;
  fieldHy?: string;
  fieldAz?: string;
  contributionAz?: string;
  detailsAz?: string;
}

export interface Fact {
  id: number;
  text: string;
  textKa: string;
  textRu?: string;
  textHy?: string;
  textAz?: string;
  source: string;
  category: string;
  icon: string;
  term?: string;
  title?: string;
}

export interface Story {
  id: number;
  title: string;
  titleKa: string;
  titleRu?: string;
  titleHy?: string;
  titleAz?: string;
  chapterId: number;
  content: string;
  contentKa: string;
  contentRu?: string;
  contentHy?: string;
  contentAz?: string;
  moral: string;
  moralKa: string;
  moralRu?: string;
  moralHy?: string;
  moralAz?: string;
  icon: string;
  term?: string;
}


export interface MemoryCard {
  id: number;
  term: string;
  termKa?: string;
  termRu?: string;
  termHy?: string;
  termAz?: string;
  definition: string;
  definitionKa?: string;
  definitionRu?: string;
  definitionHy?: string;
  definitionAz?: string;
  category: string;
}


