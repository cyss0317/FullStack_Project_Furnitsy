import * as CartItemsAPIUtil from "../../util/cart_items_api_util";
import { ProductId } from "../products/types";
import { CartItem, CartItemActionType, CartItemId } from "./types";
export const CREATE_CART_ITEM = "CREATE_CART_ITEM";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";

export const createCartItem = (cartItem: CartItem) => ({
  type: CartItemActionType.CREATE_CART_ITEM,
  cartItem,
});

export const receiveCartItems = (cartItems: Array<CartItem>) => ({
  type: CartItemActionType.RECEIVE_CART_ITEMS,
  cartItems,
});

export const deleteCartItem = (cartItemId: CartItemId) => ({
  type: CartItemActionType.DELETE_CART_ITEM,
  cartItemId,
});

export const editCartItem = (cartItem: CartItem) => ({
  type: CartItemActionType.UPDATE_CART_ITEM,
  cartItem: cartItem,
});

export const ThunkCreateCartItem = (productId: ProductId, quantity: number) => (dispatch) =>
  CartItemsAPIUtil.$createCartItem(productId, quantity).then(
    (cartItem: CartItem) => dispatch(createCartItem(cartItem))
  );

export const ThunkReceiveCartItems = () => (dispatch) =>
  CartItemsAPIUtil.$receiveCartItems().then((cartItems: Array<CartItem>) =>
    dispatch(receiveCartItems(cartItems))
  );

export const ThunkUpdateCartItem = (cartItem: CartItem) => (dispatch) =>
  CartItemsAPIUtil.$updateCartItem(cartItem).then((cartItem: CartItem) =>
    dispatch(editCartItem(cartItem))
  );

export const ThunkDeleteCartItem = (cartItemId: CartItemId) => (dispatch) =>
  CartItemsAPIUtil.$deleteCartItem(cartItemId).then(() =>
    dispatch(deleteCartItem(cartItemId))
  );
