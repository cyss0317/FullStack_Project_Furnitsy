import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer";
import {StoreState} from "./types"
import thunk from "redux-thunk";

const configureStore = (preloadedState:StoreState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk));
//console.log
// @ts-ignore
window.store = configureStore;
export default configureStore;
