import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import { $login, $logout } from "./util/session_api_util"
import { login, logout } from "./actions/session_actions"
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    const store = configureStore(); 

    //testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = $login;
    window.logout = logout;

    ReactDOM.render( <Root store={store}/>, root );


})
