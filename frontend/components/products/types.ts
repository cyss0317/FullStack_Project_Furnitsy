import { CartItem } from "../carts/types";

export interface CreatedAt {
  created_at?: string;
  updated_at?: string;
}

export interface

export interface Review extends CreatedAt {
  user_id: number;
  product_id: number;
  comment: Text;
  rating: number;
  helpful?: number;
  user: User;
  product: Product;
}

export interface Product {
  name: string;
  description: Text;
  category: string;
  measurement?: string;
  color: string;
  price: number;
  highlights: Text;
  photoUrls: Array<string>;
  reviews: Review;
}
