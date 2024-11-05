import { create } from 'zustand';
import type { Coffee, Order, User } from '../types';

interface StoreState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  cart: Order | null;
  user: User | null;
  menu: Coffee[];
  addToCart: (coffee: Coffee, quantity: number) => void;
  removeFromCart: (coffeeId: string) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  cart: null,
  user: null,
  menu: [],
  addToCart: (coffee, quantity) => 
    set((state) => ({
      cart: {
        ...state.cart,
        items: [...(state.cart?.items || []), { coffeeId: coffee.id, quantity, customizations: [] }]
      }
    })),
  removeFromCart: (coffeeId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart?.items.filter(item => item.coffeeId !== coffeeId) || []
      }
    })),
  clearCart: () => set({ cart: null })
}));