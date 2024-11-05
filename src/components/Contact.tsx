import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
              >
                Envoyer <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Notre Adresse
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                2505 Rue Saint-Hubert<br />
                Jonquière, QC G7X 7W2
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Horaires d'Ouverture
                </h3>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Lundi - Vendredi: 7h - 20h</li>
                <li>Samedi: 8h - 21h</li>
                <li>Dimanche: 9h - 18h</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Téléphone
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                +1 (581) 668-3125
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                oli.f.barbin@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}