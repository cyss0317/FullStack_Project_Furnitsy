import { connect } from "react-redux";
import CartShow from "./cart_show";
import {
  ThunkDeleteCartItem,
  ThunkReceiveCartItems,
  ThunkUpdateCartItem,
} from "../../actions/cart_items_actions";
import { ThunkReceiveProducts } from "../../actions/product_actions";
import { State } from "../../store/types";

export const mSTP = (state) => {
  return {
    noCurrentUser: state.session.id,
    cartItems: state.entities.cartItems,
    currentUser: state.entities.users[state.session.id],
    allProducts: state.entities.products,
  };
};

export const mDTP = (dispatch) => ({
  deleteCartItem: (cartItemId) => dispatch(ThunkDeleteCartItem(cartItemId)),
  updateCartItem: (cartItem) => dispatch(ThunkUpdateCartItem(cartItem)),
  receiveCartItems: () => dispatch(ThunkReceiveCartItems()),
  receiveAllProducts: () => dispatch(ThunkReceiveProducts()),
});

export default connect(mSTP, mDTP)(CartShow);
