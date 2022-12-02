import { RECEIVE_CART } from "../actions/carts_actions";

const CartReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CART:
      return action.cart;
    default:
      return oldState;
  }
};

export default CartReducer;
