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
import SearchBar from "./search_bar/search_bar";
import ProductNavContainer from "./products/product_nav_container";
import ProductNavCategoryIndex from "./products/product_nav_category_index";

const App = () => {
    const { search } = window.location
    const query = new URLSearchParams(search).get("s");
    // const filterProducts = (products, query)=>{
    //     if (!query){
    //         return products;
    //     }
    //     return products.filter((product) => {
    //         const productName = product.name.toLowerCase();
    //         return productName.includes(query);
    //     })
    // }
    // const filteredPosts = filterPosts()

    return(
   <div className="main-div">
       <Modal/>
       <div className="header-container">
            <header className="header">
                <div className="logo-searchbar-sign">
                    <a className="header-logo" href="/" >Furnitsy</a>
                    {/* <input type="text" className="header-searchbar"/> */}
                    <div>
                        <SearchBar placeholder="Enter a Product"/>
                        {/* <ul>
                            {filterProducts.map(product => (
                                <li key={product.key}>{product.name}</li>
                            ))}
                        </ul> */}

                    </div>
                    <GreetingContainer className="greeting-component"/>
                    <CartHeaderContainer />

                </div>
                
                <ProductNavContainer/>

            </header>
       </div>
            {/* <ProductIndexContainer/> */}
        <Switch>
            <Route path="/products/:productId" component={ProductShowContainer}/>
            <Route path="/products" component={ProductIndexContainer} />
            <Route path="/cart_items" component={CartShowContainer}/>
            <Route path="/" component={ProductIndexContainer}/>
            <Route path="/products/:category" component={ProductNavCategoryIndex} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer}/>
        </Switch>
        <footer>


                <div className="what_is_furnitsy">
                    <div>
                        <h1>What is Furnitsy?</h1>
                    </div>
                    <div id="what_is_furnitsy_inner">
                        <div id="furnitsy_inner_div">
                            <h2>A community doing good</h2>
                            <p>Furnitsy is a furniture store, where my mother in law buys and sells Ashely furnitures. </p>
                        </div>
                        <div id="furnitsy_inner_div">
                            <h2>Sell furnitures to customers</h2>
                            <p>We sell Ashely furnitures on our website. Whatever you can find on this website, you can also find it on actual Ashley furnitures.</p>
                        </div>
                        <div id="furnitsy_inner_div">
                            {/* ignores text align prop */}
                            <h2>Peace of mind</h2>
                            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                        </div>
                    </div>
                    <div>
                        {/* <div id="contact-me">
                        <h3>If you want to hire me, contact me here!</h3>
                        {/* <button onClick="document.location= 'mailto:cyss0317@gmail.com'">Contact Yun Choi</button> */}
                        <a id="linked-in" href="https://www.linkedin.com/in/yun-sung-choi-936142214/" ><img src="https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/LI-Logo.png" alt="" width="160" height="50" /></a>
                        <a id="github" href="https://github.com/cyss0317?tab=repositories" ><img src="https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/Octocat.png" alt="" width="100" height="80" /></a>
                        <form action="mailto:cyss0317@gmail.com" method="POST" encType="text/plain">
                            <input className='submit_to_email' type="submit" value="Contact Yun Sung Choi" />
                        </form>
                    </div>
                </div>
        
        </footer>
    </div>
    )   
};

export default App;