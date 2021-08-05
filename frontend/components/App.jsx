import React from "react";
import GreetingContainer from "./greeting_container";
import SessionForm from "./session_form"
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container"
import { Route, Switch, Link } from "react-router";
import { AuthRoute } from "../util/route_util";
import Modal from "./modal"
import ProductIndexContainer from "./products/products_index_container"

const App = () => {

    return(
   <div>
       <Modal/>
       <div className="header-container">
            <header className="header">
                <h1 className="header-logo">Furnitsy</h1>
                <input type="text" className="header-searchbar"/>
                <GreetingContainer className="greeting-component"/>
                
            </header>
       </div>
        <Switch>
            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer}/> */}
        </Switch>
    </div>
    )   
};

export default App;