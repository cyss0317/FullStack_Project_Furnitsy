import * as CartItemsAPIUtil from "../util/cart_items_api_util";
export const CREATE_CART_ITEM = "CREATE_CART_ITEM";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";

export const createCartItem = (cartItem) => ({
  type: CREATE_CART_ITEM,
  cartItem,
});

export const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
});

export const deleteCartItem = (cartItemId) => ({
  type: DELETE_CART_ITEM,
  cartItemId,
});

export const editCartItem = (cartItem) => ({
  type: UPDATE_CART_ITEM,
  cartItem: cartItem,
});

export const ThunkCreateCartItem = (productId, quantity, cartId) => (dispatch) =>
  CartItemsAPIUtil.$createCartItem(productId, quantity, cartId).then((cartItem) =>
    dispatch(createCartItem(cartItem))
  );

export const ThunkReceiveCartItems = (cartId) => (dispatch) =>
  CartItemsAPIUtil.$receiveCartItems(cartId).then((cartItems) =>
    dispatch(receiveCartItems(cartItems))
  );

export const ThunkUpdateCartItem = (cartItem, cartId) => (dispatch) =>
  CartItemsAPIUtil.$updateCartItem(cartItem, cartId).then((cartItem) =>
    dispatch(editCartItem(cartItem))
  );

export const ThunkDeleteCartItem = (cartItemId, cartId) => (dispatch) =>
  CartItemsAPIUtil.$deleteCartItem(cartItemId, cartId).then(() =>
    dispatch(deleteCartItem(cartItemId))
  );
