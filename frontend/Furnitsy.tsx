import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root.jsx";
import { fetchCart } from "actions/carts/carts_actions";
import { ThunkReceiveCartItems } from "./actions/cart_items/cart_items_actions";

import configureStore from "./store/store";

interface User {
  id?: number;
}
declare global {
  interface Window {
    currentUser: User | any;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // saves login user's session into preloadedState, that is being used to create store
  // prevents to refresh session when page is refreshed, keeps the user logged in.
  let store;
  if (window.currentUser) {
    let preloadedState = {
      entities: {
        users: { [window.currentUser.id as number]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    fetchCart(window.currentUser.id)(store.dispatch);
    ThunkReceiveCartItems()(store.dispatch);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);
});
