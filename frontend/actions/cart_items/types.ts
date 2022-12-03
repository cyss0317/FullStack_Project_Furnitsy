export type CartItemId = number;
export interface CartItem {
  cart_id: CartItemId;
  product_id: number;
}

export enum CartItemActionType {
  CREATE_CART_ITEM = "CREATE_CART_ITEM",
  RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS",
  DELETE_CART_ITEM = "DELETE_CART_ITEM",
  UPDATE_CART_ITEM = "UPDATE_CART_ITEM",
}
