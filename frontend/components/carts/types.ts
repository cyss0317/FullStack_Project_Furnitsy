import { Product } from "../products/types";
import { CreatedAt } from "../types";

export type UserId = string;

export interface Cart extends CreatedAt {
  id: number;
  user_id: UserId;
}

export type CartItemId = number;
export type CartId = number;

export interface CartItem extends CreatedAt {
  cart_id: number;
  id: number;
  quantity: number;
  product?: Product;
  cart?: Cart;
}
