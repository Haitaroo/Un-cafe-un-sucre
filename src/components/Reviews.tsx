import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      id: '1',
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Best coffee in town! The atmosphere is amazing.',
      date: '2024-02-28',
    },
    {
      id: '2',
      name: 'Mike Chen',
      rating: 4,
      comment: 'Great selection of specialty drinks. Highly recommend!',
      date: '2024-02-27',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Customer Reviews</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white">{review.name}</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}