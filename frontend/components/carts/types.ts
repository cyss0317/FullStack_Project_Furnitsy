export type UserId = string;

export interface Cart {
  id: number;
  user_id: UserId;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  cart_id: number;
  product_id: number;
  id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
}

