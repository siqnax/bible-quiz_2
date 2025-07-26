import React from 'react';
import { Target, Zap, Clock, Trophy, Star, TrendingUp, Award } from 'lucide-react';
import { UserProgress, Achievement } from '../types';
import { GameLogic } from '../utils/gameLogic';

interface PerformanceTrackerProps {
  progress: UserProgress;
  currentQuestion: number;
  totalQuestions: number;
  achievements: Achievement[];
}

export const PerformanceTracker: React.FC<PerformanceTrackerProps> = ({
  progress,
  currentQuestion,
  totalQuestions,
  achievements
}) => {
  const accuracy = progress.answeredQuestions.length > 0 
    ? Math.round((progress.score / progress.answeredQuestions.length) * 100)
    : 0;
  
  const avgTime = progress.answeredQuestions.length > 0
    ? Math.round((progress.timeSpent / progress.answeredQuestions.length) / 1000)
    : 0;

  const badge = GameLogic.getPerformanceBadge(accuracy);

  return (
    <div className="space-y-4">
      {/* Current Performance */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
          Live Performance
        </h3>

        {/* Progress Ring */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={251.33}
                strokeDashoffset={251.33 * (1 - (currentQuestion - 1) / totalQuestions)}
                className="transition-all duration-500"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800">{currentQuestion}</div>
                <div className="text-xs text-gray-500">of {totalQuestions}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <Target className="h-5 w-5 text-green-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-800">{accuracy}%</div>
            <div className="text-xs text-green-600">Accuracy</div>
          </div>

          <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <Trophy className="h-5 w-5 text-blue-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-blue-800">{progress.score}</div>
            <div className="text-xs text-blue-600">Score</div>
          </div>

          <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
            <Zap className="h-5 w-5 text-orange-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-orange-800">{progress.streak}</div>
            <div className="text-xs text-orange-600">Streak</div>
          </div>

          <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <Clock className="h-5 w-5 text-purple-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-purple-800">{avgTime}s</div>
            <div className="text-xs text-purple-600">Avg Time</div>
          </div>
        </div>

        {/* Performance Badge */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center">
          <div className="text-2xl mb-1">{badge.emoji}</div>
          <div className={`text-sm font-medium ${badge.color}`}>{badge.text}</div>
        </div>
      </div>

      {/* Streak Indicator */}
      {progress.streak > 0 && (
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90">Current Streak</div>
              <div className="text-2xl font-bold">{progress.streak} 🔥</div>
            </div>
            <Zap className="h-8 w-8 opacity-80" />
          </div>
          {progress.streak >= 5 && (
            <div className="mt-2 text-xs opacity-90">
              You're on fire! Keep it going! 
            </div>
          )}
        </div>
      )}

      {/* Recent Achievements */}
      {achievements.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-yellow-600" />
            Achievements
          </h3>
          
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {achievements.slice(-5).reverse().map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg"
              >
                <span className="text-xl mr-3">{achievement.icon}</span>
                <div className="flex-1">
                  <div className="font-medium text-yellow-800 text-sm">
                    {achievement.title}
                  </div>
                  <div className="text-xs text-yellow-600">
                    {achievement.description}
                  </div>
                </div>
                {achievement.unlocked && (
                  <Star className="h-4 w-4 text-yellow-500" />
                )}
              </div>
            ))}
          </div>

          {achievements.length === 0 && (
            <div className="text-center text-gray-500 py-4">
              <Award className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Complete questions to unlock achievements!</p>
            </div>
          )}
        </div>
      )}

      {/* Motivational Message */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl shadow-lg p-4">
        <div className="text-center">
          <div className="text-lg font-semibold mb-2">Keep Going! 💪</div>
          <div className="text-sm opacity-90">
            {progress.streak >= 10 
              ? "Incredible streak! You're a Bible scholar!"
              : progress.streak >= 5 
              ? "Amazing streak! You're on fire!"
              : accuracy >= 80 
              ? "Excellent accuracy! Keep it up!"
              : "Every question is a chance to learn!"
            }
          </div>
        </div>
      </div>
    </div>
  );
};