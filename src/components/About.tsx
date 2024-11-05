import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, Users, Clock } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Coffee,
      title: 'Qualité Premium',
      description: 'Nous sélectionnons uniquement les meilleurs grains de café du monde entier.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Plus de 10 ans d\'expertise dans l\'art du café.'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Une communauté passionnée de plus de 10,000 amateurs de café.'
    },
    {
      icon: Clock,
      title: 'Tradition',
      description: 'Des méthodes traditionnelles combinées aux technologies modernes.'
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200"
          alt="Notre café"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white text-center"
          >
            Notre Histoire
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Passion pour le Café
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Depuis notre création en 2010, Café Moderne s'est engagé à offrir une expérience café exceptionnelle. Notre passion pour le café nous pousse à rechercher constamment l'excellence, de la sélection des grains à la préparation de chaque tasse.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Nous travaillons directement avec des producteurs de café du monde entier, garantissant non seulement la meilleure qualité possible, mais aussi des pratiques commerciales éthiques et durables.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800"
              alt="Nos grains de café"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <feature.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}