import { connect } from "react-redux";
import CartShow from "./cart_show";
import {
  ThunkDeleteCartItem,
  ThunkReceiveCartItems,
  ThunkUpdateCartItem,
} from "../../actions/cart_items_actions";
import { ThunkReceiveProducts } from "../../actions/product_actions";

export const mSTP = (state, ownProps) => {
  return {
    noCurrentUser: state.session.id,
    cartItems: state.entities.cartItems,
    currentUser: state.entities.users[state.session.id],
    allProducts: state.entities.products,
  };
};
// TODO: pass in cart Id
export const mDTP = (dispatch) => ({
  deleteCartItem: (cartItemId) => dispatch(ThunkDeleteCartItem(cartItemId)),
  updateCartItem: (cartItem) => dispatch(ThunkUpdateCartItem(cartItem)),
  receiveCartItems: () => dispatch(ThunkReceiveCartItems()),
  receiveAllProducts: () => dispatch(ThunkReceiveProducts()),
});

export default connect(mSTP, mDTP)(CartShow);
