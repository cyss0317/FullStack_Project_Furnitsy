import React from "react";
import GreetingContainer from "./greeting_container";
import SessionForm from "./session_form";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import { Route, Switch, Link } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal";
import ProductIndexContainer from "./products/products_index_container";
import ProductShowContainer from "./products/product_show_container";
import ProductNav from "./products/product_nav_index";
import CartShowContainer from "./carts/carts_show_container";
import CartHeaderContainer from "./carts/cart_header_container";
import ProductNavContainer from "./products/product_nav_container";

const App = () => {
    return(
   <div className="main-div">
       <Modal/>
       <div className="header-container">
            <header className="header">
                <div className="logo-searchbar-sign">
                    <a className="header-logo" href="/" >Furnitsy</a>
                    <input type="text" className="header-searchbar"/>
                    <GreetingContainer className="greeting-component"/>
                    <CartHeaderContainer />

                </div>
                
                {/* <ProductNavContainer/> */}

            </header>
       </div>
            {/* <ProductIndexContainer/> */}
        <Switch>
            <Route path="/products/:productId" component={ProductShowContainer}/>
            <Route path="/products" component={ProductIndexContainer} />
            <Route path="/cart_items" component={CartShowContainer}/>
            <Route path="/" component={ProductIndexContainer}/>
            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer}/> */}
        </Switch>
    </div>
    )   
};

export default App;