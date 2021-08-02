import React from "react";
import GreetingContainer from "./greeting_container";
import SessionForm from "./session_form"
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container"
import { Route, Switch, Link } from "react-router";
import { AuthRoute } from "../util/route_util";

const App = () => {

    return(
   <div>
        <header>
            <h1>Furnitsy</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer}/>
        </Switch>
    </div>
    )   
};

export default App;