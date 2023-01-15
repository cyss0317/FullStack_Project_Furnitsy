import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const configureStore = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk));
//console.log
window.store = configureStore;
export default configureStore;
