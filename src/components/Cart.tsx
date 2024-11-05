import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { cart, removeFromCart, updateQuantity } = useStore();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.coffee.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl z-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <h2 className="text-xl font-semibold dark:text-white">Votre Panier</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <X className="w-5 h-5 dark:text-white" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
                    <ShoppingBag className="w-12 h-12 mb-2" />
                    <p>Votre panier est vide</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        key={item.coffee.id}
                        layout
                        className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <img
                          src={item.coffee.image}
                          alt={item.coffee.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium dark:text-white">{item.coffee.name}</h3>
                          {item.customizations && (
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {item.customizations.join(', ')}
                            </p>
                          )}
                          <div className="mt-2 flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item, Math.max(0, item.quantity - 1))}
                              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                            >
                              <Minus className="w-4 h-4 dark:text-white" />
                            </button>
                            <span className="w-8 text-center dark:text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item, item.quantity + 1)}
                              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                            >
                              <Plus className="w-4 h-4 dark:text-white" />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <span className="font-medium dark:text-white">
                            ${(item.coffee.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item)}
                            className="text-red-500 hover:text-red-600"
                          >
                            Retirer
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-4 border-t dark:border-gray-700">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium dark:text-white">Total</span>
                    <span className="font-medium dark:text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {
                      // Handle checkout
                    }}
                    className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Commander
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}