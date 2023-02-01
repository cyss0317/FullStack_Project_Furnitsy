import * as SessionApiUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
import { fetchCart } from "./carts_actions";
import { ThunkReceiveCartItems } from "./cart_items_actions";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});
export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = (user) => (dispatch) =>
  SessionApiUtil.$login(user)
    .then(
      (res) => dispatch(receiveCurrentUser(res)),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
    .then((user) => dispatch(fetchCart(user.id)))
    .then(() => dispatch(ThunkReceiveCartItems()));

export const logout = () => (dispatch) =>
  SessionApiUtil.$logout()
    .then(
      () => dispatch(logoutCurrentUser()),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
    .then(() => dispatch(ThunkReceiveCartItems()));

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.$signup(user)
    .then(
      (res) => dispatch(receiveCurrentUser(res)),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
    .then((user) => dispatch(fetchCart(user.id)));
};
