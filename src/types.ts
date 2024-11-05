export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  coffee: Coffee;
  quantity: number;
  customizations?: string[];
}

export interface Store {
  theme: 'light' | 'dark';
  cart: CartItem[];
  toggleTheme: () => void;
  addToCart: (coffee: Coffee, customizations?: string[]) => void;
  removeFromCart: (item: CartItem) => void;
  updateQuantity: (item: CartItem, quantity: number) => void;
  clearCart: () => void;
}