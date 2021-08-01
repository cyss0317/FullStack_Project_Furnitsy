import React from "react";
import ReactDOM from "react-dom";
import { $login, $logout } from "./util/session_api_util"
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    const store = configureStore(); 

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = $login;
    window.logout = $logout;
    ReactDOM.render( <h1>react is working</h1>, root )



})
