import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOrder: () => void;
}

export function Hero({ onOrder }: HeroProps) {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200"
          alt="Ambiance du café"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Découvrez Votre Tasse de Café Parfaite
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Un café préparé avec expertise, issu des meilleurs grains du monde.
              Découvrez l'art du café dans sa plus belle expression.
            </p>
            <motion.button
              onClick={onOrder}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-700 transition-colors"
            >
              Commander <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}