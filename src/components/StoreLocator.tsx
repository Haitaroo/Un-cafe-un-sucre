import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export function StoreLocator() {
  const locations = [
    {
      id: '1',
      name: 'Downtown Cafe',
      address: '123 Main St, City Center',
      phone: '(555) 123-4567',
      hours: '7AM - 8PM',
    },
    {
      id: '2',
      name: 'Westside Coffee',
      address: '456 West Ave, Westside',
      phone: '(555) 987-6543',
      hours: '6AM - 9PM',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Find Our Stores</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((location) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{location.name}</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{location.address}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                <span>{location.phone}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Clock className="h-5 w-5 mr-2" />
                <span>{location.hours}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}