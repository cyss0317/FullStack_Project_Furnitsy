import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import { $login, $logout } from "./util/session_api_util"
import { login, logout } from "./actions/session_actions"
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
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
        store = configureStore();
    }
    window.login = login;

    window.getState = store.getState;

    ReactDOM.render( <Root store={store}/>, root );


})
