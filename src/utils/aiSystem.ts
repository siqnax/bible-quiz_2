import { AIFeedback, UserProgress, Question } from '../types';

export class AISystem {
  private getPerformanceLevel(percentage: number): string {
    if (percentage >= 90) return 'exceptional';
    if (percentage >= 80) return 'excellent';
    if (percentage >= 70) return 'good';
    if (percentage >= 60) return 'fair';
    return 'needs_improvement';
  }

  private getEncouragementMessage(level: string, streak: number): string {
    const messages = {
      exceptional: [
        "Outstanding! Your Bible knowledge is truly impressive! 🌟",
        "Incredible work! You're demonstrating exceptional understanding! ✨",
        "Amazing! Your dedication to studying God's Word shows! 🙏"
      ],
      excellent: [
        "Excellent work! You're really mastering these Bible truths! 💪",
        "Great job! Your understanding of Scripture is growing strong! 📖",
        "Well done! Keep up this fantastic progress! 🎯"
      ],
      good: [
        "Good work! You're building a solid foundation in God's Word! 📚",
        "Nice progress! Your Bible knowledge is steadily improving! 🌱",
        "Keep it up! You're on the right track with your studies! ⭐"
      ],
      fair: [
        "You're making progress! Every step counts in your Bible journey! 🚶‍♀️",
        "Good effort! Keep studying and you'll see improvement! 📈",
        "Stay encouraged! Learning God's Word is a lifelong journey! 🛤️"
      ],
      needs_improvement: [
        "Don't give up! Every expert was once a beginner! 💪",
        "Keep studying! God's Word has so much to teach us! 🌟",
        "Stay persistent! Your understanding will grow with practice! 🌱"
      ]
    };

    const levelMessages = messages[level as keyof typeof messages];
    let baseMessage = levelMessages[Math.floor(Math.random() * levelMessages.length)];

    if (streak >= 5) {
      baseMessage += ` Your ${streak}-question streak shows great focus! 🔥`;
    }

    return baseMessage;
  }

  private identifyWeakAreas(userAnswers: { questionId: number; correct: boolean; category: string; topic: string }[]): string[] {
    const categoryStats: { [key: string]: { correct: number; total: number } } = {};
    const topicStats: { [key: string]: { correct: number; total: number } } = {};

    userAnswers.forEach(answer => {
      // Track category performance
      if (!categoryStats[answer.category]) {
        categoryStats[answer.category] = { correct: 0, total: 0 };
      }
      categoryStats[answer.category].total++;
      if (answer.correct) categoryStats[answer.category].correct++;

      // Track topic performance
      if (!topicStats[answer.topic]) {
        topicStats[answer.topic] = { correct: 0, total: 0 };
      }
      topicStats[answer.topic].total++;
      if (answer.correct) topicStats[answer.topic].correct++;
    });

    const weakAreas: string[] = [];

    // Find categories with < 60% accuracy
    Object.entries(categoryStats).forEach(([category, stats]) => {
      const accuracy = stats.correct / stats.total;
      if (accuracy < 0.6 && stats.total >= 3) {
        const categoryName = {
          'ot': 'Old Testament',
          'nt': 'New Testament',
          'figures': 'Biblical Figures',
          'themes': 'Biblical Themes',
          'books': 'Bible Books'
        }[category] || category;
        weakAreas.push(categoryName);
      }
    });

    // Find topics with < 50% accuracy
    Object.entries(topicStats).forEach(([topic, stats]) => {
      const accuracy = stats.correct / stats.total;
      if (accuracy < 0.5 && stats.total >= 2) {
        weakAreas.push(topic);
      }
    });

    return weakAreas.slice(0, 3); // Return top 3 weak areas
  }

  private identifyStrengths(userAnswers: { questionId: number; correct: boolean; category: string; topic: string }[]): string[] {
    const categoryStats: { [key: string]: { correct: number; total: number } } = {};
    const topicStats: { [key: string]: { correct: number; total: number } } = {};

    userAnswers.forEach(answer => {
      if (!categoryStats[answer.category]) {
        categoryStats[answer.category] = { correct: 0, total: 0 };
      }
      categoryStats[answer.category].total++;
      if (answer.correct) categoryStats[answer.category].correct++;

      if (!topicStats[answer.topic]) {
        topicStats[answer.topic] = { correct: 0, total: 0 };
      }
      topicStats[answer.topic].total++;
      if (answer.correct) topicStats[answer.topic].correct++;
    });

    const strengths: string[] = [];

    // Find categories with > 80% accuracy
    Object.entries(categoryStats).forEach(([category, stats]) => {
      const accuracy = stats.correct / stats.total;
      if (accuracy > 0.8 && stats.total >= 3) {
        const categoryName = {
          'ot': 'Old Testament Knowledge',
          'nt': 'New Testament Understanding',
          'figures': 'Biblical Characters',
          'themes': 'Scriptural Themes',
          'books': 'Bible Structure'
        }[category] || category;
        strengths.push(categoryName);
      }
    });

    // Find topics with > 85% accuracy
    Object.entries(topicStats).forEach(([topic, stats]) => {
      const accuracy = stats.correct / stats.total;
      if (accuracy > 0.85 && stats.total >= 2) {
        strengths.push(`${topic} Knowledge`);
      }
    });

    return strengths.slice(0, 3); // Return top 3 strengths
  }

  private generateStudyRecommendations(weakAreas: string[], strengths: string[]): string[] {
    const recommendations: string[] = [];

    const studyPlans = {
      'Old Testament': [
        'Read through Genesis focusing on God\'s covenants',
        'Study the lives of key OT figures like Abraham, Moses, and David',
        'Review the timeline of Israel\'s history'
      ],
      'New Testament': [
        'Study the Gospels to understand Jesus\' life and teachings',
        'Read through Acts to learn about the early church',
        'Explore Paul\'s letters for theological insights'
      ],
      'Biblical Figures': [
        'Study character profiles of major Bible figures',
        'Compare and contrast different biblical leaders',
        'Look at how God used ordinary people for His purposes'
      ],
      'Biblical Themes': [
        'Study themes like redemption, covenant, and kingdom',
        'Use a topical Bible study guide',
        'Look for recurring themes throughout Scripture'
      ],
      'Bible Books': [
        'Learn the structure and organization of the Bible',
        'Study the purpose and audience of each book',
        'Use a Bible overview or survey course'
      ]
    };

    weakAreas.forEach(area => {
      const areaRecommendations = studyPlans[area as keyof typeof studyPlans];
      if (areaRecommendations) {
        recommendations.push(...areaRecommendations);
      }
    });

    // Add general recommendations if no specific weak areas
    if (recommendations.length === 0) {
      recommendations.push(
        'Continue your excellent Bible study habits!',
        'Try studying books you haven\'t explored yet',
        'Consider using a study Bible with commentary'
      );
    }

    return recommendations.slice(0, 4);
  }

  generateFeedback(
    progress: UserProgress,
    questions: Question[],
    userAnswers: { questionId: number; correct: boolean }[]
  ): AIFeedback {
    const percentage = progress.answeredQuestions.length > 0 
      ? (progress.score / progress.answeredQuestions.length) * 100 
      : 0;
    
    const level = this.getPerformanceLevel(percentage);
    const encouragement = this.getEncouragementMessage(level, progress.streak);

    // Create detailed answer analysis
    const answerAnalysis = userAnswers.map(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      return {
        questionId: answer.questionId,
        correct: answer.correct,
        category: question?.category || 'unknown',
        topic: question?.topic || 'unknown'
      };
    });

    const weakAreas = this.identifyWeakAreas(answerAnalysis);
    const strengths = this.identifyStrengths(answerAnalysis);
    const studyRecommendations = this.generateStudyRecommendations(weakAreas, strengths);

    // Generate personalized message based on performance
    let message = encouragement;
    
    if (percentage >= 85) {
      message += " Your deep understanding of Scripture is evident!";
    } else if (percentage >= 70) {
      message += " You're showing solid biblical knowledge!";
    } else if (percentage >= 50) {
      message += " Keep building on this foundation!";
    } else {
      message += " Remember, learning God's Word is a journey - stay committed!";
    }

    return {
      message,
      studyRecommendations,
      encouragement,
      weakAreas,
      strengths
    };
  }

  generateSmartHint(question: Question, previousAttempts: number): string {
    const hints = [
      // First hint - topic/category hint
      `This question is about ${question.topic}. Think about what you know from ${question.bibleReference}.`,
      
      // Second hint - more specific
      `Consider the context of ${question.category === 'ot' ? 'Old Testament' : 'New Testament'} times. The answer relates to ${question.topic.toLowerCase()}.`,
      
      // Third hint - eliminate options
      `Look carefully at each option. Remember that Bible answers are often about God's character and His relationship with people.`,
      
      // Final hint - direct guidance
      `Think about the main message of ${question.bibleReference}. What would be consistent with God's nature and the biblical narrative?`
    ];

    return hints[Math.min(previousAttempts, hints.length - 1)];
  }

  generateAchievementRecommendations(progress: UserProgress): string[] {
    const recommendations = [];
    
    if (progress.streak >= 5) {
      recommendations.push("Keep your streak going! You're in a great rhythm of learning!");
    }
    
    if (progress.score / progress.answeredQuestions.length >= 0.8) {
      recommendations.push("Your accuracy is impressive! Consider trying harder difficulty levels.");
    }
    
    if (progress.answeredQuestions.length >= 20) {
      recommendations.push("You're building extensive Bible knowledge! Consider focusing on your weaker areas.");
    }

    return recommendations;
  }
}

export const aiSystem = new AISystem();