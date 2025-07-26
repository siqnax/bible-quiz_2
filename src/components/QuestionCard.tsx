import React, { useState, useEffect } from 'react';
import { Clock, Lightbulb, BookOpen, HelpCircle } from 'lucide-react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  timePerQuestion: number;
  onAnswer: (answerIndex: number, timeTaken: number) => void;
  onTimeUp: () => void;
  onHintRequest: () => void;
  hint?: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  timePerQuestion,
  onAnswer,
  onTimeUp,
  onHintRequest,
  hint
}) => {
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [startTime] = useState(Date.now());
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setTimeLeft(timePerQuestion);
    setSelectedAnswer(null);
    setShowHint(false);
  }, [question.id, timePerQuestion]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    const timeTaken = Date.now() - startTime;
    setSelectedAnswer(answerIndex);
    
    // Small delay for visual feedback before submitting
    setTimeout(() => {
      onAnswer(answerIndex, timeTaken);
    }, 300);
  };

  const handleHintRequest = () => {
    setShowHint(true);
    onHintRequest();
  };

  const getTimeColor = () => {
    if (timeLeft <= 3) return 'text-red-500';
    if (timeLeft <= 5) return 'text-orange-500';
    return 'text-green-500';
  };

  const getProgressPercentage = () => {
    return ((timePerQuestion - timeLeft) / timePerQuestion) * 100;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Progress Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-t-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-gray-700">
                Question {questionNumber} of {totalQuestions}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`flex items-center text-2xl font-bold ${getTimeColor()}`}>
                <Clock className="h-5 w-5 mr-1" />
                {timeLeft}s
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Timer Progress */}
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className={`h-1 rounded-full transition-all duration-1000 ${
                timeLeft <= 3 ? 'bg-red-500' : timeLeft <= 5 ? 'bg-orange-500' : 'bg-green-500'
              }`}
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-b-2xl shadow-2xl p-8">
          {/* Bible Reference */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center text-purple-600">
              <BookOpen className="h-5 w-5 mr-2" />
              <span className="font-medium">{question.bibleReference}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {question.topic}
              </span>
              {!showHint && (
                <button
                  onClick={handleHintRequest}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors"
                >
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Hint
                </button>
              )}
            </div>
          </div>

          {/* Question */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
            {question.question}
          </h2>

          {/* Hint Display */}
          {showHint && hint && (
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
              <div className="flex items-start">
                <Lightbulb className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 text-sm">{hint}</p>
              </div>
            </div>
          )}

          {/* Answer Options */}
          <div className="grid gap-4">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`p-6 text-left rounded-xl border-2 transition-all duration-300 transform ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50 scale-105 shadow-lg'
                      : selectedAnswer !== null
                      ? 'border-gray-200 bg-gray-50 opacity-50'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50 hover:scale-102 shadow-md hover:shadow-lg'
                  } ${selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 font-bold ${
                      isSelected 
                        ? 'border-purple-500 bg-purple-500 text-white' 
                        : 'border-gray-300 text-gray-500'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className={`text-lg ${isSelected ? 'text-purple-800 font-medium' : 'text-gray-700'}`}>
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Loading indicator when answer is selected */}
          {selectedAnswer !== null && (
            <div className="mt-6 flex justify-center">
              <div className="flex items-center text-purple-600">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"></div>
                Processing your answer...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};