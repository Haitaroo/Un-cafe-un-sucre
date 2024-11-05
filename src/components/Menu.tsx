import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Coffee } from '../types';
import { useStore } from '../store';

const MENU_ITEMS: Coffee[] = [
  {
    id: '1',
    name: 'Expresso Signature',
    description: 'Expresso riche et corsé avec une crème parfaite',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400',
    category: 'chaud',
    customizations: ['Shot Supplémentaire', 'Type de Lait', 'Sirop']
  },
  {
    id: '2',
    name: 'Macchiato Glacé au Caramel',
    description: 'Expresso onctueux avec vanille et caramel, servi sur glace',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
    category: 'froid',
    customizations: ['Shot Supplémentaire', 'Type de Lait', 'Sirop', 'Crème Fouettée']
  },
  {
    id: '3',
    name: 'Latte au Thé Vert Matcha',
    description: 'Thé vert matcha premium avec lait mousseux',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400',
    category: 'spécialité',
    customizations: ['Type de Lait', 'Niveau de Sucre']
  }
];

interface MenuProps {
  onClose: () => void;
}

export function Menu({ onClose }: MenuProps) {
  const { addToCart } = useStore();
  const [selectedCategory, setSelectedCategory] = React.useState<'all' | Coffee['category']>('all');

  const filteredItems = selectedCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 overflow-y-auto"
    >
      <div className="min-h-screen px-4 text-center">
        <div className="inline-block w-full max-w-4xl my-8 text-left align-middle">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Notre Menu</h2>
              
              <div className="flex gap-2 mb-6">
                {['all', 'chaud', 'froid', 'spécialité'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category as any)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                      ${selectedCategory === category
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                  >
                    {category === 'all' ? 'Tout' : category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((coffee) => (
                  <motion.div
                    key={coffee.id}
                    layout
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                  >
                    <div className="flex gap-4">
                      <img
                        src={coffee.image}
                        alt={coffee.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">{coffee.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{coffee.description}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-medium text-amber-600">${coffee.price}</span>
                          <button
                            onClick={() => addToCart(coffee)}
                            className="px-3 py-1 bg-amber-600 text-white text-sm rounded-lg hover:bg-amber-700"
                          >
                            Ajouter
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}