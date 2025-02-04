export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
  createdAt: string;
}

export interface User {
  username: string;
  password: string;
  isAdmin: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}