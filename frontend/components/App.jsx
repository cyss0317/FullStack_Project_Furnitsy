import React from "react";
import GreetingContainer from "./greeting_container";
import SessionForm from "./session_form";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import { Route, Switch, Link } from "react-router";
import { AuthRoute } from "../util/route_util";
import Modal from "./modal";
import ProductIndexContainer from "./products/products_index_container";
import ProductShowContainer from "./products/product_show_container";


const App = () => {

    return(
   <div>
       <Modal/>
       <div className="header-container">
            <header className="header">
                <a className="header-logo" href="/" >Furnitsy</a>
                <input type="text" className="header-searchbar"/>
                <GreetingContainer className="greeting-component"/>
            </header>
       </div>
            {/* <ProductIndexContainer/> */}
        <Switch>
            <Route path ="/products/:productId" component={ProductShowContainer}/>
            <Route path="/products" component={ProductIndexContainer} />
            <Route path="/"/>
            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer}/> */}
        </Switch>
    </div>
    )   
};

export default App;