export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  bibleReference: string;
  category: QuestionCategory;
  difficulty: Difficulty;
  topic: string;
}

export interface QuizSettings {
  numberOfQuestions: number;
  category: QuestionCategory;
  difficulty: Difficulty;
  specificTopic?: string;
  timePerQuestion: number;
}

export interface UserProgress {
  currentQuestion: number;
  score: number;
  streak: number;
  maxStreak: number;
  timeSpent: number;
  answeredQuestions: number[];
  correctAnswers: number[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  percentage: number;
  questionsAnswered: number;
  streak: number;
  timestamp: Date;
}

export interface HourlyDraw {
  nextDrawTime: Date;
  currentWinner?: LeaderboardEntry;
  prizeAmount: number;
  participants: LeaderboardEntry[];
}

export interface AIFeedback {
  message: string;
  studyRecommendations: string[];
  encouragement: string;
  weakAreas: string[];
  strengths: string[];
}

export type QuestionCategory = 'all' | 'ot' | 'nt' | 'figures' | 'themes' | 'books';
export type Difficulty = 'easy' | 'medium' | 'hard' | 'mixed';
export type GamePhase = 'setup' | 'playing' | 'completed' | 'results';