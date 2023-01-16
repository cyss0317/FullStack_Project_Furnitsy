import { Cart, CartItem } from "../components/carts/types";
import { Product } from "../components/products/types";
import { Review } from "../components/reviews/types";
import { User } from "../components/types";

export interface StoreState {
  entities?: EntityState;
  errors?: Errors;
  session?: Session;
  ui?: UI;
}

export type ReviewError = Array<string>;
export type SessionError = Array<string>;

export interface Errors {
  review: ReviewError;
  session: SessionError;
}

export type SessionId = number;

export interface Session {
  id: SessionId;
}

export type ModalAction = "Added" | "Login" | "Sign Up" | "" | null;

export interface UI {
  modal: ModalAction;
}
export interface EntityState {
  cart: Cart;
  cartItems: { [key: number]: CartItem };
  products: { [key: number]: Product };
  reviews: { [key: number]: Review };
  users: { [key: number]: User };
}
