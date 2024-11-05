import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200',
    title: 'Grains Fraîchement Torréfiés',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200',
    title: 'L\'Excellence du Pour-Over',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=1200',
    title: 'L\'Art du Latte Parfait',
  },
];

export function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % GALLERY_IMAGES.length);
  };

  const previous = () => {
    setCurrentIndex((current) => 
      current === 0 ? GALLERY_IMAGES.length - 1 : current - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Notre Voyage dans le Café
        </h2>
        
        <div className="relative h-[600px] rounded-xl overflow-hidden">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.img
              key={currentIndex}
              src={GALLERY_IMAGES[currentIndex].url}
              alt={GALLERY_IMAGES[currentIndex].title}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <motion.div
              key={`overlay-${currentIndex}`}
              className="absolute inset-0 bg-black/40 flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="p-8 text-white w-full">
                <h3 className="text-3xl font-bold mb-4">
                  {GALLERY_IMAGES[currentIndex].title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={previous}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {GALLERY_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}