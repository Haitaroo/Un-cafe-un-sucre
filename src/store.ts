import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Coffee, Store } from './types';

export const useStore = create<Store>()(
  persist(
    (set) => ({
      theme: 'light',
      cart: [],
      
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      })),
      
      addToCart: (coffee: Coffee, customizations?: string[]) => {
        set((state) => {
          const existingItem = state.cart.find(
            (item) => 
              item.coffee.id === coffee.id && 
              JSON.stringify(item.customizations) === JSON.stringify(customizations)
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item === existingItem
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            cart: [...state.cart, { coffee, quantity: 1, customizations }],
          };
        });
      },

      removeFromCart: (item: CartItem) => {
        set((state) => ({
          cart: state.cart.filter((i) => i !== item),
        }));
      },

      updateQuantity: (item: CartItem, quantity: number) => {
        set((state) => ({
          cart: quantity === 0
            ? state.cart.filter((i) => i !== item)
            : state.cart.map((i) => (i === item ? { ...i, quantity } : i)),
        }));
      },

      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: 'cafe-storage',
      partialize: (state) => ({ cart: state.cart, theme: state.theme }),
    }
  )
);