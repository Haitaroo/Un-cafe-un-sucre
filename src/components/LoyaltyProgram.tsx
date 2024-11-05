import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Coffee, Award } from 'lucide-react';
import { useStore } from '../store';

export function LoyaltyProgram() {
  const { user } = useStore();
  const points = user?.points || 0;

  const rewards = [
    { points: 50, icon: Coffee, reward: 'Free Coffee' },
    { points: 100, icon: Gift, reward: 'Birthday Special' },
    { points: 200, icon: Award, reward: 'VIP Status' },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Loyalty Rewards</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <p className="text-lg font-medium text-gray-900 dark:text-white">Your Points</p>
          <p className="text-3xl font-bold text-amber-600">{points}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.reward}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <reward.icon className="mx-auto h-8 w-8 text-amber-600 mb-2" />
              <h3 className="font-medium text-gray-900 dark:text-white">{reward.reward}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{reward.points} points</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}