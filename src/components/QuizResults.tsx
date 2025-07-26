import React, { useState } from 'react';
import { Trophy, Target, Zap, Clock, Star, BookOpen, TrendingUp, Award, RotateCcw, Home } from 'lucide-react';
import { UserProgress, Question, AIFeedback, Achievement } from '../types';
import { GameLogic } from '../utils/gameLogic';

interface QuizResultsProps {
  progress: UserProgress;
  questions: Question[];
  aiFeedback: AIFeedback;
  achievements: Achievement[];
  onPlayAgain: () => void;
  onNewQuiz: () => void;
  userName?: string;
  onNameSubmit: (name: string) => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  progress,
  questions,
  aiFeedback,
  achievements,
  onPlayAgain,
  onNewQuiz,
  userName,
  onNameSubmit
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [name, setName] = useState('');
  const [showNameForm, setShowNameForm] = useState(!userName);

  const { percentage, grade, message } = GameLogic.calculateScore(progress);
  const badge = GameLogic.getPerformanceBadge(percentage);
  const formattedTime = GameLogic.formatTime(progress.timeSpent);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
      setShowNameForm(false);
    }
  };

  const getAnsweredQuestions = () => {
    return progress.answeredQuestions.map(qId => {
      const question = questions.find(q => q.id === qId);
      const isCorrect = progress.correctAnswers.includes(qId);
      return { question, isCorrect };
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Results Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-6">
          {/* Header with Performance Badge */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white text-center">
            <div className="text-6xl mb-4">{badge.emoji}</div>
            <h1 className="text-4xl font-bold mb-2">Quiz Complete!</h1>
            <p className="text-xl opacity-90">{message}</p>
          </div>

          {/* Score Summary */}
          <div className="p-8">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <Trophy className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-800">{grade}</div>
                <div className="text-sm text-purple-600">Grade</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-800">{percentage}%</div>
                <div className="text-sm text-blue-600">Accuracy</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-800">{progress.maxStreak}</div>
                <div className="text-sm text-green-600">Best Streak</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-orange-800">{formattedTime}</div>
                <div className="text-sm text-orange-600">Time Taken</div>
              </div>
            </div>

            {/* Detailed Stats */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Performance Details
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-800">{progress.score}</div>
                  <div className="text-sm text-gray-600">Correct Answers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">{progress.answeredQuestions.length}</div>
                  <div className="text-sm text-gray-600">Total Questions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">
                    {Math.round((progress.timeSpent / progress.answeredQuestions.length) / 1000)}s
                  </div>
                  <div className="text-sm text-gray-600">Avg. per Question</div>
                </div>
              </div>
            </div>

            {/* AI Feedback */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                AI-Powered Feedback
              </h3>
              <p className="text-indigo-700 mb-4">{aiFeedback.message}</p>
              
              {aiFeedback.strengths.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-green-800 mb-2">Your Strengths:</h4>
                  <div className="flex flex-wrap gap-2">
                    {aiFeedback.strengths.map((strength, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {aiFeedback.weakAreas.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-orange-800 mb-2">Areas for Growth:</h4>
                  <div className="flex flex-wrap gap-2">
                    {aiFeedback.weakAreas.map((area, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {aiFeedback.studyRecommendations.length > 0 && (
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Study Recommendations:</h4>
                  <ul className="space-y-1">
                    {aiFeedback.studyRecommendations.slice(0, 3).map((rec, index) => (
                      <li key={index} className="text-blue-700 text-sm flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* New Achievements */}
            {achievements.length > 0 && (
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  New Achievements Unlocked!
                </h3>
                <div className="grid gap-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="text-2xl mr-3">{achievement.icon}</span>
                      <div>
                        <div className="font-medium text-gray-800">{achievement.title}</div>
                        <div className="text-sm text-gray-600">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Question Review Toggle */}
            <div className="mb-6">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium text-gray-700 transition-colors flex items-center justify-center"
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                {showDetails ? 'Hide' : 'Show'} Question Review
              </button>
            </div>

            {/* Question Review */}
            {showDetails && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Question Review</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {getAnsweredQuestions().map(({ question, isCorrect }, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${
                      isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">
                          Question {index + 1}
                        </span>
                        <span className={`text-sm font-medium ${
                          isCorrect ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                      </div>
                      <p className="text-gray-800 font-medium mb-2">{question?.question}</p>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Correct Answer:</span> {question?.options[question.correctAnswer]}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Reference:</span> {question?.bibleReference}
                      </div>
                      {!isCorrect && question?.explanation && (
                        <div className="text-sm text-gray-700 mt-2 p-2 bg-white rounded">
                          <span className="font-medium">Explanation:</span> {question.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Name Entry Form */}
            {showNameForm && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Save Your Score (Optional)</h3>
                <p className="text-blue-700 mb-4">Enter your name to be included in the leaderboard and hourly draw!</p>
                <form onSubmit={handleNameSubmit} className="flex gap-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your first and last name"
                    className="flex-1 p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Save
                  </button>
                </form>
                <button
                  onClick={() => setShowNameForm(false)}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  Skip for now
                </button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={onPlayAgain}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Play Again
              </button>
              <button
                onClick={onNewQuiz}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 px-6 rounded-xl border border-gray-300 transition-all duration-300 flex items-center justify-center"
              >
                <Home className="h-5 w-5 mr-2" />
                New Quiz Setup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};