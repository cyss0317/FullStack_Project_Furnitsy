import { connect } from "react-redux";
import CartShow from "./cart_show";
import {
  ThunkDeleteCartItem,
  ThunkReceiveCartItems,
  ThunkUpdateCartItem,
} from "../../actions/cart_items_actions";
import { ThunkReceiveProducts } from "../../actions/product_actions";

export const mSTP = (state) => {
  // const allItems = state.entities.cartItems === undefined ? {} : Object.values(state.entities.cartItems)

  // const allItems = state.entities.cartItems.length !== 0 ? Object.values(state.entities.cartItems) : {}

  // let numberOfProducts = 0;
  // allItems.forEach((item) => numberOfProducts += item.quantity )

  // const products = Object.values(state.entities.products)

  // let allProductsNameArray =[];
  // allItems.forEach((item)=> {
  //     if (!allProductsNameArray.includes(item.product.name)){
  //         item.product.name
  //     }}
  // )

  // let totalPrice = 0;
  // allItems.forEach((item) => totalPrice += item.product.price)

  return {
    // allItems: allItems,
    items: state.entities.cartItems,
    noCurrentUser: state.session.id,
    cartItems: state.entities.cartItems,
    // numberOfProducts: numberOfProducts,
    // totalPrice: totalPrice,
    currentUser: state.entities.users[state.session.id],
    allProducts: state.entities.products,
    // cart: state.entities.cart
  };
};

export const mDTP = (dispatch) => ({
  deleteCartItem: (cartItemId) => dispatch(ThunkDeleteCartItem(cartItemId)),
  updateCartItem: (cartItem) => dispatch(ThunkUpdateCartItem(cartItem)),
  receiveCartItems: () => dispatch(ThunkReceiveCartItems()),
  receiveAllProducts: () => dispatch(ThunkReceiveProducts()),
});

export default connect(mSTP, mDTP)(CartShow);
