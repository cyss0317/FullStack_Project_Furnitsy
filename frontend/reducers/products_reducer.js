import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, RECEIVE_SEARCHED_PRODUCTS } from "../actions/product_actions";

const ProductsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      const nextState = Object.assign({}, oldState);
      return action.products;
    case RECEIVE_PRODUCT:
      return Object.assign({}, oldState, {
        [action.product.id]: action.product,
      });
    case RECEIVE_SEARCHED_PRODUCTS:
      return action.products;
    default:
      return oldState;
  }
};

export default ProductsReducer;
