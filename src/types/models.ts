export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  status: string;
}

export interface Transaction {
  id: string;
  category: string;
  amount: number;
  status: string;
}

export interface Recipe {
  id: string;
  title: string;
  time: string;
  servings: number;
  rating: number;
  image?: string;
  category?: string;
  description?: string;
}