import React, { useState, useEffect, useCallback } from 'react';
import { QuestionCard } from './QuestionCard';
import { QuizResults } from './QuizResults';
import { Leaderboard } from './Leaderboard';
import { PerformanceTracker } from './PerformanceTracker';
import { Question, QuizSettings, UserProgress, Achievement, AIFeedback, LeaderboardEntry, GamePhase } from '../types';
import { GameLogic } from '../utils/gameLogic';
import { aiSystem } from '../utils/aiSystem';
import { getRandomQuestions } from '../data/questions';

interface QuizGameProps {
  settings: QuizSettings;
  onBackToSetup: () => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({ settings, onBackToSetup }) => {
  const [gamePhase, setGamePhase] = useState<GamePhase>('playing');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState<UserProgress>(GameLogic.initializeProgress());
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);
  const [aiFeedback, setAiFeedback] = useState<AIFeedback | null>(null);
  const [userEntry, setUserEntry] = useState<LeaderboardEntry | null>(null);
  const [hints, setHints] = useState<{ [questionId: number]: string }>({});
  const [hintRequests, setHintRequests] = useState<{ [questionId: number]: number }>({});
  const [sessionData, setSessionData] = useState({
    quizzesCompleted: 1,
    sessionStartTime: Date.now(),
    totalQuestionsInSession: 0
  });

  // Initialize quiz
  useEffect(() => {
    const quizQuestions = getRandomQuestions(settings.numberOfQuestions, {
      category: settings.category === 'all' ? undefined : settings.category,
      difficulty: settings.difficulty === 'mixed' ? undefined : settings.difficulty,
      topic: settings.specificTopic
    });
    
    setQuestions(GameLogic.shuffleArray(quizQuestions));
    setGamePhase('playing');
  }, [settings]);

  const handleAnswer = useCallback((answerIndex: number, timeTaken: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    // Update progress
    const newProgress = GameLogic.updateProgress(
      progress,
      currentQuestion.id,
      isCorrect,
      timeTaken
    );
    setProgress(newProgress);

    // Check for new achievements
    const newAchs = GameLogic.checkAchievements(
      newProgress,
      achievements,
      settings.category,
      sessionData
    );
    
    if (newAchs.length > 0) {
      setAchievements(prev => [...prev, ...newAchs]);
      setNewAchievements(newAchs);
    }

    // Move to next question or finish quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz(newProgress, newAchs);
    }
  }, [currentQuestionIndex, questions, progress, achievements, settings.category, sessionData]);

  const handleTimeUp = useCallback(() => {
    handleAnswer(-1, settings.timePerQuestion * 1000); // -1 indicates no answer selected
  }, [handleAnswer, settings.timePerQuestion]);

  const handleHintRequest = useCallback(() => {
    const currentQuestion = questions[currentQuestionIndex];
    const previousAttempts = hintRequests[currentQuestion.id] || 0;
    
    const hint = aiSystem.generateSmartHint(currentQuestion, previousAttempts);
    setHints(prev => ({ ...prev, [currentQuestion.id]: hint }));
    setHintRequests(prev => ({ ...prev, [currentQuestion.id]: previousAttempts + 1 }));
  }, [currentQuestionIndex, questions, hintRequests]);

  const finishQuiz = (finalProgress: UserProgress, finalAchievements: Achievement[]) => {
    // Generate AI feedback
    const userAnswers = finalProgress.answeredQuestions.map(qId => ({
      questionId: qId,
      correct: finalProgress.correctAnswers.includes(qId)
    }));

    const feedback = aiSystem.generateFeedback(finalProgress, questions, userAnswers);
    setAiFeedback(feedback);
    setGamePhase('results');
  };

  const handleNameSubmit = (name: string) => {
    const entry = GameLogic.generateLeaderboardEntry(name, progress);
    setUserEntry(entry);
  };

  const handlePlayAgain = () => {
    // Reset game state but keep the same settings
    setCurrentQuestionIndex(0);
    setProgress(GameLogic.initializeProgress());
    setNewAchievements([]);
    setAiFeedback(null);
    setHints({});
    setHintRequests({});
    
    // Generate new questions
    const quizQuestions = getRandomQuestions(settings.numberOfQuestions, {
      category: settings.category === 'all' ? undefined : settings.category,
      difficulty: settings.difficulty === 'mixed' ? undefined : settings.difficulty,
      topic: settings.specificTopic
    });
    
    setQuestions(GameLogic.shuffleArray(quizQuestions));
    setGamePhase('playing');
    
    // Update session data
    setSessionData(prev => ({
      ...prev,
      quizzesCompleted: prev.quizzesCompleted + 1,
      totalQuestionsInSession: prev.totalQuestionsInSession + settings.numberOfQuestions
    }));
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading questions...</div>
      </div>
    );
  }

  if (gamePhase === 'results' && aiFeedback) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="grid lg:grid-cols-3 gap-6 p-6">
          <div className="lg:col-span-2">
            <QuizResults
              progress={progress}
              questions={questions}
              aiFeedback={aiFeedback}
              achievements={newAchievements}
              onPlayAgain={handlePlayAgain}
              onNewQuiz={onBackToSetup}
              userName={userEntry?.name}
              onNameSubmit={handleNameSubmit}
            />
          </div>
          <div className="lg:col-span-1">
            <Leaderboard userEntry={userEntry || undefined} />
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid lg:grid-cols-4 gap-6 p-6">
        {/* Performance Tracker Sidebar */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <PerformanceTracker
            progress={progress}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            achievements={achievements}
          />
        </div>

        {/* Main Question Area */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            timePerQuestion={settings.timePerQuestion}
            onAnswer={handleAnswer}
            onTimeUp={handleTimeUp}
            onHintRequest={handleHintRequest}
            hint={hints[currentQuestion.id]}
          />
        </div>
      </div>
    </div>
  );
};