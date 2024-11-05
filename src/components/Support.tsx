import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

export function Support() {
  const [message, setMessage] = useState('');

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Barista Chat</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="h-64 overflow-y-auto mb-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-amber-100 dark:bg-amber-900 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-900 dark:text-white">Hello! How can I help you today?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
          />
          <button className="bg-amber-600 text-white p-2 rounded-lg hover:bg-amber-700">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}