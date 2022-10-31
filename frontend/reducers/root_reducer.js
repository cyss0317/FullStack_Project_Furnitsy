import { combineReducers } from "redux";
import ErrorsReducer from "./errors_reducer";
import EntitiesReducer from "./entities_reducer";
import SessionReducer from "./session_reducer";
import UiReducer from "./ui_reducer";
import CartItemsReducer from "./cart_items_reducer";
import CartReducer from "./cart_reducer";

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UiReducer,
});

export default RootReducer;
