import { SessionActionType } from "./types";
import { User } from "../types/index";
import * as SessionApiUtil from "../../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
import { fetchCart } from "actions/carts/carts_actions";
import { ThunkReceiveCartItems } from "actions/cart_items/cart_items_actions";

export const receiveCurrentUser = (currentUser: User) => ({
  type: SessionActionType.RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: SessionActionType.LOGOUT_CURRENT_USER,
});
export const receiveErrors = (errors) => ({
  type: SessionActionType.RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = (user: User) => (dispatch) =>
  SessionApiUtil.$login(user)
    .then(
      (res: User) => dispatch(receiveCurrentUser(res)),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
    .then((user) => dispatch(fetchCart(user.id)))
    .then((user) => dispatch(ThunkReceiveCartItems()));

export const logout = () => (dispatch) =>
  SessionApiUtil.$logout()
    .then(
      () => dispatch(logoutCurrentUser()),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
    .then(() => dispatch(ThunkReceiveCartItems()));

export const signup = (user: User) => (dispatch) => {
  return SessionApiUtil.$signup(user)
    .then(
      (res: User) => dispatch(receiveCurrentUser(res)),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
    .then((user) => dispatch(fetchCart(user.id)));
};
