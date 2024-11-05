import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Check, Coffee } from 'lucide-react';
import { useStore } from '../store';

export function OrderTracking() {
  const { cart } = useStore();

  const steps = [
    { icon: Check, label: 'Order Received', status: 'completed' },
    { icon: Coffee, label: 'Preparing', status: 'current' },
    { icon: Clock, label: 'Ready for Pickup', status: 'upcoming' },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Track Your Order</h2>
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className={`
                  rounded-full h-12 w-12 flex items-center justify-center
                  ${step.status === 'completed' ? 'bg-green-500' : 
                    step.status === 'current' ? 'bg-amber-500' : 'bg-gray-300 dark:bg-gray-700'}
                `}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{step.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}