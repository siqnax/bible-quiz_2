import React, { useState, useEffect } from 'react';
import { Crown, Trophy, Clock, Star, Gift, Timer } from 'lucide-react';
import { LeaderboardEntry, HourlyDraw } from '../types';

interface LeaderboardProps {
  userEntry?: LeaderboardEntry;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ userEntry }) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [hourlyDraw, setHourlyDraw] = useState<HourlyDraw>({
    nextDrawTime: new Date(Date.now() + 3600000), // 1 hour from now
    prizeAmount: 5,
    participants: []
  });
  const [timeUntilDraw, setTimeUntilDraw] = useState('');

  // Generate fake leaderboard data that updates every minute
  useEffect(() => {
    const generateFakeLeaderboard = () => {
      const names = [
        'Sarah Johnson', 'Michael Chen', 'David Rodriguez', 'Emily Davis', 'James Wilson',
        'Maria Garcia', 'Robert Thompson', 'Jennifer Martinez', 'William Anderson', 'Lisa Brown',
        'Christopher Taylor', 'Amanda White', 'Matthew Jackson', 'Jessica Lewis', 'Daniel Harris',
        'Ashley Clark', 'Andrew Robinson', 'Stephanie Walker', 'Joshua Young', 'Michelle King'
      ];

      const entries: LeaderboardEntry[] = names.slice(0, 15).map((name, index) => ({
        id: `fake-${index}`,
        name,
        score: Math.floor(Math.random() * 50) + 20, // 20-70 score range
        percentage: Math.floor(Math.random() * 40) + 60, // 60-100% range
        questionsAnswered: Math.floor(Math.random() * 30) + 10, // 10-40 questions
        streak: Math.floor(Math.random() * 15) + 1, // 1-15 streak
        timestamp: new Date(Date.now() - Math.random() * 86400000) // Random time in last 24h
      }));

      // Sort by score and percentage
      entries.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.percentage - a.percentage;
      });

      // Add user entry if provided and not already in top 10
      if (userEntry) {
        const userInTop10 = entries.slice(0, 10).some(entry => entry.name === userEntry.name);
        if (!userInTop10) {
          entries.push(userEntry);
        }
      }

      return entries;
    };

    const updateLeaderboard = () => {
      setLeaderboard(generateFakeLeaderboard());
    };

    // Initial load
    updateLeaderboard();

    // Update every minute
    const interval = setInterval(updateLeaderboard, 60000);

    return () => clearInterval(interval);
  }, [userEntry]);

  // Update countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeLeft = hourlyDraw.nextDrawTime.getTime() - now.getTime();
      
      if (timeLeft <= 0) {
        // Draw time! Select a winner and reset for next hour
        const participants = leaderboard.slice(0, 10);
        if (participants.length > 0) {
          const winner = participants[Math.floor(Math.random() * participants.length)];
          setHourlyDraw(prev => ({
            ...prev,
            currentWinner: winner,
            nextDrawTime: new Date(Date.now() + 3600000), // Next hour
            participants: []
          }));
        }
        setTimeUntilDraw('Drawing now...');
        return;
      }

      const minutes = Math.floor(timeLeft / 60000);
      const seconds = Math.floor((timeLeft % 60000) / 1000);
      setTimeUntilDraw(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [hourlyDraw.nextDrawTime, leaderboard]);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 1: return <Trophy className="h-6 w-6 text-gray-400" />;
      case 2: return <Trophy className="h-6 w-6 text-orange-600" />;
      default: return <span className="text-gray-500 font-bold">#{index + 1}</span>;
    }
  };

  const getRankBg = (index: number) => {
    switch (index) {
      case 0: return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200';
      case 1: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
      case 2: return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200';
      default: return 'bg-white border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Trophy className="h-7 w-7 mr-2 text-yellow-500" />
          Live Leaderboard
        </h2>
        <div className="text-sm text-gray-500 flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          Updates every minute
        </div>
      </div>

      {/* Hourly Draw Section */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Gift className="h-6 w-6 text-purple-600 mr-2" />
            <div>
              <div className="font-semibold text-purple-800">Hourly Draw - $5 Prize!</div>
              <div className="text-sm text-purple-600">Top 10 players automatically entered</div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-purple-700 font-bold">
              <Timer className="h-4 w-4 mr-1" />
              {timeUntilDraw}
            </div>
            <div className="text-xs text-purple-600">Until next draw</div>
          </div>
        </div>
        
        {hourlyDraw.currentWinner && (
          <div className="mt-3 p-3 bg-green-100 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <Crown className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-medium text-green-800">
                Latest Winner: {hourlyDraw.currentWinner.name} won $5! 🎉
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Leaderboard */}
      <div className="space-y-3">
        {leaderboard.slice(0, 10).map((entry, index) => (
          <div
            key={entry.id}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${getRankBg(index)} ${
              userEntry && entry.name === userEntry.name ? 'ring-2 ring-purple-500' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {getRankIcon(index)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 flex items-center">
                    {entry.name}
                    {userEntry && entry.name === userEntry.name && (
                      <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        You
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {entry.questionsAnswered} questions • {entry.streak} max streak
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-bold text-gray-800">
                  {entry.score} pts
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <Star className="h-3 w-3 mr-1 text-yellow-500" />
                  {entry.percentage}%
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Show user position if not in top 10 */}
        {userEntry && !leaderboard.slice(0, 10).some(entry => entry.name === userEntry.name) && (
          <>
            <div className="text-center py-2">
              <span className="text-gray-400">...</span>
            </div>
            <div className="p-4 rounded-xl border-2 bg-purple-50 border-purple-200 ring-2 ring-purple-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-purple-600 font-bold">#?</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 flex items-center">
                      {userEntry.name}
                      <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        You
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {userEntry.questionsAnswered} questions • {userEntry.streak} max streak
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-gray-800">
                    {userEntry.score} pts
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    {userEntry.percentage}%
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        Complete quizzes to climb the leaderboard and enter the hourly draw!
      </div>
    </div>
  );
};