import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Droplet, Thermometer } from 'lucide-react';

export function CustomBlend() {
  const [blend, setBlend] = useState({
    roast: 'medium',
    intensity: 'balanced',
    origin: 'colombia',
  });

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Create Your Blend</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Roast Level
            </label>
            <select
              value={blend.roast}
              onChange={(e) => setBlend({ ...blend, roast: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
            >
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Intensity
            </label>
            <select
              value={blend.intensity}
              onChange={(e) => setBlend({ ...blend, intensity: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
            >
              <option value="mild">Mild</option>
              <option value="balanced">Balanced</option>
              <option value="bold">Bold</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Origin
            </label>
            <select
              value={blend.origin}
              onChange={(e) => setBlend({ ...blend, origin: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
            >
              <option value="colombia">Colombia</option>
              <option value="ethiopia">Ethiopia</option>
              <option value="brazil">Brazil</option>
            </select>
          </div>
        </div>
        <button className="w-full mt-8 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700">
          Create My Blend
        </button>
      </div>
    </section>
  );
}