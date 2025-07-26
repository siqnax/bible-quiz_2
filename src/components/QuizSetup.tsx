import React, { useState } from 'react';
import { Play, Settings, BookOpen, Users, Crown, Shuffle } from 'lucide-react';
import { QuizSettings } from '../types';

interface QuizSetupProps {
  onStartQuiz: (settings: QuizSettings) => void;
}

export const QuizSetup: React.FC<QuizSetupProps> = ({ onStartQuiz }) => {
  const [settings, setSettings] = useState<QuizSettings>({
    numberOfQuestions: 10,
    category: 'all',
    difficulty: 'mixed',
    timePerQuestion: 10
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleStartQuiz = () => {
    onStartQuiz(settings);
  };

  const topicOptions = [
    'Creation', 'Noah', 'Abraham', 'Moses', 'David', 'Solomon', 'Jesus', 
    'Paul', 'Disciples', 'Miracles', 'Parables', 'Prophets', 'Kings'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Bible Quiz Challenge
          </h1>
          <p className="text-xl text-purple-200">
            Test your knowledge of God's Word with AI-powered feedback
          </p>
        </div>

        {/* Main Setup Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Settings className="h-6 w-6 mr-2 text-purple-600" />
            Quiz Setup
          </h2>

          <div className="space-y-6">
            {/* Number of Questions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Questions
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 20, 50].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSettings(prev => ({ ...prev, numberOfQuestions: num }))}
                    className={`p-3 rounded-lg font-medium transition-all ${
                      settings.numberOfQuestions === num
                        ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  { value: 'all', label: 'All Topics', icon: '📚' },
                  { value: 'ot', label: 'Old Testament', icon: '📜' },
                  { value: 'nt', label: 'New Testament', icon: '✝️' },
                  { value: 'figures', label: 'Bible Figures', icon: '👑' },
                  { value: 'themes', label: 'Themes', icon: '🌟' },
                  { value: 'books', label: 'Bible Books', icon: '📖' }
                ].map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSettings(prev => ({ ...prev, category: cat.value as any }))}
                    className={`p-3 rounded-lg font-medium transition-all text-left ${
                      settings.category === cat.value
                        ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg mr-2">{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { value: 'easy', label: 'Easy', icon: '🟢', description: 'Basic Bible knowledge' },
                  { value: 'medium', label: 'Medium', icon: '🟡', description: 'Moderate challenge' },
                  { value: 'hard', label: 'Hard', icon: '🔴', description: 'Expert level' },
                  { value: 'mixed', label: 'Mixed', icon: '🌈', description: 'All difficulties' }
                ].map((diff) => (
                  <button
                    key={diff.value}
                    onClick={() => setSettings(prev => ({ ...prev, difficulty: diff.value as any }))}
                    className={`p-3 rounded-lg font-medium transition-all text-center ${
                      settings.difficulty === diff.value
                        ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    title={diff.description}
                  >
                    <div className="text-lg mb-1">{diff.icon}</div>
                    <div className="text-sm">{diff.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Advanced Options Toggle */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 font-medium transition-colors flex items-center justify-center"
            >
              <Settings className="h-4 w-4 mr-2" />
              {showAdvanced ? 'Hide' : 'Show'} Advanced Options
            </button>

            {/* Advanced Options */}
            {showAdvanced && (
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                {/* Specific Topic */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Topic (Optional)
                  </label>
                  <select
                    value={settings.specificTopic || ''}
                    onChange={(e) => setSettings(prev => ({ 
                      ...prev, 
                      specificTopic: e.target.value || undefined 
                    }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Any Topic</option>
                    {topicOptions.map(topic => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>

                {/* Time per Question */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time per Question: {settings.timePerQuestion} seconds
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="5"
                    value={settings.timePerQuestion}
                    onChange={(e) => setSettings(prev => ({ 
                      ...prev, 
                      timePerQuestion: parseInt(e.target.value) 
                    }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5s</span>
                    <span>30s</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Start Quiz Button */}
          <button
            onClick={handleStartQuiz}
            className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center text-lg"
          >
            <Play className="h-6 w-6 mr-2" />
            Start Quiz Challenge
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">100+</div>
            <div className="text-sm text-gray-600">Bible Questions</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">AI</div>
            <div className="text-sm text-gray-600">Powered Feedback</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
            <Crown className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">$5</div>
            <div className="text-sm text-gray-600">Hourly Prize</div>
          </div>
        </div>
      </div>
    </div>
  );
};