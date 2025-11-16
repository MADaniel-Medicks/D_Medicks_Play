
export type View = 'timeline' | 'figures' | 'vocabulary' | 'quiz' | 'ask';

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
}

export interface HistoricalFigure {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface VocabularyTerm {
  term: string;
  definition: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
