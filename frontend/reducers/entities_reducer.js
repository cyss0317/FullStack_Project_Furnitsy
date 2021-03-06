import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ProductsReducer from "./products_reducer";
import CartItemsReducer from "./cart_items_reducer";
import CartReducer from "./cart_reducer";
import ReviewReducer from "./review_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductsReducer,
  cartItems: CartItemsReducer,
  cart: CartReducer,
  reviews: ReviewReducer,
});

export default EntitiesReducer;
