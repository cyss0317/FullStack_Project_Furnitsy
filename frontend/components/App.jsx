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
import { useEffect, useState } from "react";
import CategoryNavBar from "./products/Category_nav_bar";
import { ThunkReceiveProducts } from "../actions/product_actions";
import SearchBarContainer from "./search_bar/search_bar_conatiner";
import search_bar_conatiner from "./search_bar/search_bar_conatiner";
import { withRouter } from "react-router-dom";
import {useHistory} from "react-router-dom";


// import axios from "axios";

// const filterProducts = (products, query)=>{
//     if (!query){
//         return products;
//     }
//     return products.filter((product) => {
//         const productName = product.name.toLowerCase();
//         return productName.includes(query);
//     })
// }
const App = () => {
    const history= useHistory();
    const [keyword, SetKeyword] = useState(()=> '');

    function hadleKeyword(e){
        e.preventDefault();
        history.push({pathname: `/search/${keyword}`, state: keyword})
        document.querySelector(".header-searchbar").value = ""
    }
// class App extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    //  componentWillMount(){
    //     store.dispatch(ThunkReceiveProducts())

    // }

    // const { search } = window.location

    // const query = new URLSearchParams(search).get("s");
    // store.dispatch(ThunkReceiveProducts())
    // const products = store.getState()
    // const filteredProducts = filterProducts(products, query)

    // console.log(window.location)
    // console.log("axios", axios('/api/products'))
    // console.log(useState());
    // console.log("sotre",products)
    // console.log(query)
    // console.log(products)
    // console.log("filterproducts",filterProducts(products, query))
    // console.log(typeof(filteredProducts))
    // const filteredPosts = filterPosts()
// render(){
//     const { search } = window.location
//     const products = store.getState()
//     const query = new URLSearchParams(search).get("s");
//         console.log("sotre",products)
//     console.log(query)
//     console.log(products)
    // debugger
    return(
   <div className="main-div">
       <Modal/>
       <div className="header-container">
            <header className="header">
                <div className="logo-searchbar-sign">
                    <a className="header-logo" href="/" >Furnitsy</a>
                    {/* <input type="text"  className="header-searchbar"/> */}
                    {/* <div> */}
                        {/* <SearchBar query={query}/> */}
                        {/* <search_bar_conatiner query={query} /> */}
                            <form id="search-bar-form"onSubmit={hadleKeyword}>
                                {/* <label htmlFor="header-search">
                                    <span className="visually-hidden">Search products</span>
                                </label> */}
                                <input
                                    type="text"
                                    className="header-searchbar"
                                    placeholder="Search"
                                    name="s"
                                    onChange={(e) => SetKeyword(e.currentTarget.value) }
                                />
                            <button id="search-bar-submit" type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path><path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path></svg></button>
                            </form>
                        {/* <ul>
                            {
                                filteredProducts === undefined ? <p>""</p>  
                                : 
                                filteredProducts.map(product => (
                                    <li key={product.key}>{product.name}</li>
                                    ))}
                                </ul> */}

                    {/* </div> */}
                    <GreetingContainer className="greeting-component"/>
                    <CartHeaderContainer />

                </div>
                
                <CategoryNavBar/>

            </header>
       </div>
            {/* <ProductIndexContainer/> */}
        <Switch>
            <Route path="/search/:keyword" component={SearchBarContainer} />
            <Route path="/products/:productId" component={ProductShowContainer}/>
            <Route path="/category/:category" component={ProductNavContainer} />
            <Route path="/products" component={ProductIndexContainer} />
            <ProtectedRoute path="/cart_items" component={CartShowContainer}/>
            <Route path="/" component={ProductIndexContainer}/>
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
                            ignores text align prop 
                            <h2>Peace of mind</h2>
                            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                        </div>
                    </div>
                    <div>
                        {/* <div id="contact-me">
                        <h3>If you want to hire me, contact me here!</h3>
                        {/* <button onClick="document.location= 'mailto:cyss0317@gmail.com'">Contact Yun Choi</button> */}
                        <a id="linked-in" href="https://www.linkedin.com/in/yun-sung-choi-936142214/" ><img src="https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/LI-Logo.png" alt="" width="160" height="50" /></a>
                        <a id="github" href="https://github.com/cyss0317" ><img src="https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/Octocat.png" alt="" width="100" height="80" /></a>
                        <form action="mailto:cyss0317@gmail.com" method="POST" encType="text/plain">
                            <input className='submit_to_email' type="submit" value="Contact Yun Sung Choi" />
                        </form>
                    </div>
                </div>
        
        </footer>
    </div>
    )   
}
// };

export default withRouter(App);