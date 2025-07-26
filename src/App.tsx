import React, { useState } from 'react';
import { QuizSetup } from './components/QuizSetup';
import { QuizGame } from './components/QuizGame';
import { QuizSettings, GamePhase } from './types';

function App() {
  const [gamePhase, setGamePhase] = useState<GamePhase>('setup');
  const [quizSettings, setQuizSettings] = useState<QuizSettings | null>(null);

  const handleStartQuiz = (settings: QuizSettings) => {
    setQuizSettings(settings);
    setGamePhase('playing');
  };

  const handleBackToSetup = () => {
    setGamePhase('setup');
    setQuizSettings(null);
  };

  if (gamePhase === 'setup') {
    return <QuizSetup onStartQuiz={handleStartQuiz} />;
  }

  if (gamePhase === 'playing' && quizSettings) {
    return <QuizGame settings={quizSettings} onBackToSetup={handleBackToSetup} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
}

export default App;