import * as cartAPIUtil from "../../util/cart_api_util";
import { Cart } from "./types";
import { User } from "."

export const RECEIVE_CART = "RECEIVE_CART";

export const receiveCart = (cart: Cart) => ({
  type: RECEIVE_CART,
  cart,
});

export const fetchCart = (userId) => (dispatch) =>
  cartAPIUtil.$receiveCart(userId).then((cart) => dispatch(receiveCart(cart)));
