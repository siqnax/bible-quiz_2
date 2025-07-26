import { Question, UserProgress, Achievement, LeaderboardEntry } from '../types';

export class GameLogic {
  private static readonly ACHIEVEMENTS: Omit<Achievement, 'unlocked' | 'unlockedAt'>[] = [
    {
      id: 'first_correct',
      title: 'First Step',
      description: 'Answer your first question correctly',
      icon: '🌟'
    },
    {
      id: 'streak_5',
      title: 'On Fire',
      description: 'Get 5 questions right in a row',
      icon: '🔥'
    },
    {
      id: 'streak_10',
      title: 'Bible Scholar',
      description: 'Get 10 questions right in a row',
      icon: '📚'
    },
    {
      id: 'perfect_score',
      title: 'Perfect Knowledge',
      description: 'Complete a quiz with 100% accuracy',
      icon: '👑'
    },
    {
      id: 'speed_demon',
      title: 'Lightning Fast',
      description: 'Answer 10 questions in under 60 seconds',
      icon: '⚡'
    },
    {
      id: 'persistent',
      title: 'Never Give Up',
      description: 'Complete 5 quizzes in one session',
      icon: '💪'
    },
    {
      id: 'ot_expert',
      title: 'Old Testament Expert',
      description: 'Score 90%+ on an Old Testament quiz',
      icon: '📜'
    },
    {
      id: 'nt_expert',
      title: 'New Testament Expert',
      description: 'Score 90%+ on a New Testament quiz',
      icon: '✝️'
    },
    {
      id: 'century_club',
      title: 'Century Club',
      description: 'Answer 100 questions correctly',
      icon: '💯'
    },
    {
      id: 'dedication',
      title: 'Dedicated Student',
      description: 'Play for 30 minutes straight',
      icon: '⏰'
    }
  ];

  static initializeProgress(): UserProgress {
    return {
      currentQuestion: 0,
      score: 0,
      streak: 0,
      maxStreak: 0,
      timeSpent: 0,
      answeredQuestions: [],
      correctAnswers: []
    };
  }

  static updateProgress(
    progress: UserProgress,
    questionId: number,
    isCorrect: boolean,
    timeSpent: number
  ): UserProgress {
    const newProgress = { ...progress };
    
    newProgress.answeredQuestions.push(questionId);
    newProgress.timeSpent += timeSpent;
    
    if (isCorrect) {
      newProgress.score++;
      newProgress.streak++;
      newProgress.correctAnswers.push(questionId);
      newProgress.maxStreak = Math.max(newProgress.maxStreak, newProgress.streak);
    } else {
      newProgress.streak = 0;
    }
    
    return newProgress;
  }

  static checkAchievements(
    progress: UserProgress,
    currentUnlocked: Achievement[],
    quizCategory?: string,
    sessionData?: {
      quizzesCompleted: number;
      sessionStartTime: number;
      totalQuestionsInSession: number;
    }
  ): Achievement[] {
    const newAchievements: Achievement[] = [];
    const unlockedIds = new Set(currentUnlocked.map(a => a.id));

    for (const achTemplate of this.ACHIEVEMENTS) {
      if (unlockedIds.has(achTemplate.id)) continue;

      let shouldUnlock = false;

      switch (achTemplate.id) {
        case 'first_correct':
          shouldUnlock = progress.score >= 1;
          break;
        case 'streak_5':
          shouldUnlock = progress.streak >= 5;
          break;
        case 'streak_10':
          shouldUnlock = progress.streak >= 10;
          break;
        case 'perfect_score':
          shouldUnlock = progress.answeredQuestions.length >= 5 && 
                        progress.score === progress.answeredQuestions.length;
          break;
        case 'speed_demon':
          shouldUnlock = progress.answeredQuestions.length >= 10 && 
                        progress.timeSpent < 60000; // 60 seconds
          break;
        case 'persistent':
          shouldUnlock = sessionData ? sessionData.quizzesCompleted >= 5 : false;
          break;
        case 'ot_expert':
          shouldUnlock = quizCategory === 'ot' && 
                        progress.answeredQuestions.length >= 10 && 
                        (progress.score / progress.answeredQuestions.length) >= 0.9;
          break;
        case 'nt_expert':
          shouldUnlock = quizCategory === 'nt' && 
                        progress.answeredQuestions.length >= 10 && 
                        (progress.score / progress.answeredQuestions.length) >= 0.9;
          break;
        case 'century_club':
          shouldUnlock = progress.correctAnswers.length >= 100;
          break;
        case 'dedication':
          shouldUnlock = sessionData ? 
                        (Date.now() - sessionData.sessionStartTime) >= 1800000 : false; // 30 minutes
          break;
      }

      if (shouldUnlock) {
        newAchievements.push({
          ...achTemplate,
          unlocked: true,
          unlockedAt: new Date()
        });
      }
    }

    return newAchievements;
  }

  static calculateScore(progress: UserProgress): {
    percentage: number;
    grade: string;
    message: string;
  } {
    const percentage = progress.answeredQuestions.length > 0 
      ? Math.round((progress.score / progress.answeredQuestions.length) * 100)
      : 0;

    let grade: string;
    let message: string;

    if (percentage >= 95) {
      grade = 'A+';
      message = 'Outstanding! Your Bible knowledge is exceptional!';
    } else if (percentage >= 90) {
      grade = 'A';
      message = 'Excellent work! You have a strong grasp of Scripture!';
    } else if (percentage >= 85) {
      grade = 'A-';
      message = 'Great job! Your biblical understanding is impressive!';
    } else if (percentage >= 80) {
      grade = 'B+';
      message = 'Very good! Keep studying God\'s Word!';
    } else if (percentage >= 75) {
      grade = 'B';
      message = 'Good work! You\'re building solid Bible knowledge!';
    } else if (percentage >= 70) {
      grade = 'B-';
      message = 'Nice progress! Continue growing in your understanding!';
    } else if (percentage >= 65) {
      grade = 'C+';
      message = 'You\'re making progress! Keep studying!';
    } else if (percentage >= 60) {
      grade = 'C';
      message = 'You\'re learning! Consistent study will help you improve!';
    } else if (percentage >= 55) {
      grade = 'C-';
      message = 'Keep trying! Every step forward counts!';
    } else if (percentage >= 50) {
      grade = 'D';
      message = 'Don\'t give up! God\'s Word has so much to teach us!';
    } else {
      grade = 'F';
      message = 'Keep studying! Remember, every expert was once a beginner!';
    }

    return { percentage, grade, message };
  }

  static generateLeaderboardEntry(
    userName: string,
    progress: UserProgress
  ): LeaderboardEntry {
    const percentage = progress.answeredQuestions.length > 0 
      ? Math.round((progress.score / progress.answeredQuestions.length) * 100)
      : 0;

    return {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: userName,
      score: progress.score,
      percentage,
      questionsAnswered: progress.answeredQuestions.length,
      streak: progress.maxStreak,
      timestamp: new Date()
    };
  }

  static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  static formatTime(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes > 0) {
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    return `${remainingSeconds}s`;
  }

  static getPerformanceBadge(percentage: number): {
    emoji: string;
    color: string;
    text: string;
  } {
    if (percentage >= 95) return { emoji: '👑', color: 'text-yellow-500', text: 'Legendary' };
    if (percentage >= 90) return { emoji: '🏆', color: 'text-yellow-600', text: 'Expert' };
    if (percentage >= 85) return { emoji: '🥇', color: 'text-yellow-700', text: 'Excellent' };
    if (percentage >= 80) return { emoji: '🥈', color: 'text-gray-400', text: 'Very Good' };
    if (percentage >= 70) return { emoji: '🥉', color: 'text-orange-600', text: 'Good' };
    if (percentage >= 60) return { emoji: '📚', color: 'text-blue-500', text: 'Learning' };
    return { emoji: '🌱', color: 'text-green-500', text: 'Growing' };
  }
}