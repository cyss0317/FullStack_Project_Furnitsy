import { Product } from "actions/products/types";
import { Cart } from "actions/carts/types";

export type CartItemId = number;
export interface CartItem {
  id: number;
  cart_id: CartItemId;
  product_id: number;
  quantity: number;
  product?: Product; 
  photoUrls?: Array<string>;
  cart?: Cart

}

export enum CartItemActionType {
  CREATE_CART_ITEM = "CREATE_CART_ITEM",
  RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS",
  DELETE_CART_ITEM = "DELETE_CART_ITEM",
  UPDATE_CART_ITEM = "UPDATE_CART_ITEM",
}
