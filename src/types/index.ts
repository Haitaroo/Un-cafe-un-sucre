export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'hot' | 'cold' | 'specialty';
  customizations?: string[];
}

export interface Order {
  id: string;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'ready' | 'completed';
  totalPrice: number;
  createdAt: Date;
}

export interface OrderItem {
  coffeeId: string;
  quantity: number;
  customizations: string[];
}

export interface Review {
  id: string;
  userId: string;
  coffeeId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  orders: string[];
}