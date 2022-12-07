import { connect } from "react-redux";
import CartShow from "./cart_show";
import { CartItem, CartItemId } from "../../actions/cart_items/types";
import {
  ThunkDeleteCartItem,
  ThunkReceiveCartItems,
  ThunkUpdateCartItem,
} from "../../actions/cart_items/cart_items_actions";
import { ThunkReceiveProducts } from "../../actions/products/product_actions";

export const mSTP = (state) => {
  return {
    items: state.entities.cartItems,
    noCurrentUser: state.session.id,
    cartItems: state.entities.cartItems,
    currentUser: state.entities.users[state.session.id],
    allProducts: state.entities.products,
  };
};

export const mDTP = (dispatch) => ({
  deleteCartItem: (cartItemId: CartItemId) => dispatch(ThunkDeleteCartItem(cartItemId)),
  updateCartItem: (cartItem: any) => dispatch(ThunkUpdateCartItem(cartItem)),
  receiveCartItems: () => dispatch(ThunkReceiveCartItems()),
  receiveAllProducts: () => dispatch(ThunkReceiveProducts()),
});

export default connect(mSTP, mDTP)(CartShow);
