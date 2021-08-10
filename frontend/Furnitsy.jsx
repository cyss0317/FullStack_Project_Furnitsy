import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import { $login, $logout } from "./util/session_api_util"
import { login, logout } from "./actions/session_actions"
import { $receiveProduct, $receiveProducts } from "./util/product_api_util";
import { ThunkReceiveProduct, ThunkReceiveProducts } from "./actions/product_actions";
import { ThunkCreateCartItem, ThunkDeleteCartItem } from "./actions/cart_actions";
import configureStore from './store/store'
;


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")

    // saves login user's session into preloadedState, that is being used to create store
    // prevents to refresh session when page is refreshed, keeps the user logged in.
    let store;
    if ( window.currentUser){
        let preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id} 
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore(); }
    //testing
    window.login = login;
    window.receiveProduct = ThunkReceiveProduct;
    window.receiveProducts = ThunkReceiveProducts;
    window.createCartItem = ThunkCreateCartItem;
    window.deleteCartItem = ThunkDeleteCartItem;
    // window.createReceiveItems = ThunkReceiveCartItems;
    window.store = store;

    window.getState = store.getState;

    ReactDOM.render( <Root store={store}/>, root );


})
