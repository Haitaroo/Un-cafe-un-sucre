import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store';

const FEATURED_PRODUCTS = [
  {
    id: 'featured-1',
    name: 'Éthiopie Yirgacheffe',
    description: 'Floral et vif avec des notes d\'agrumes distinctes',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=400',
  },
  {
    id: 'featured-2',
    name: 'Colombie Supremo',
    description: 'Corsé avec une douceur caramélisée',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
  },
  {
    id: 'featured-3',
    name: 'Sumatra Mandheling',
    description: 'Riche et complexe avec des notes terreuses',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
  },
];

export function FeaturedProducts() {
  const { addToCart } = useStore();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Collection en Vedette
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-600">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Ajouter au Panier
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}