import React from "react";
import GreetingContainer from "./greeting_container";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import Footer from "./Footer";
import { Route, Switch, Link } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal";
import ProductIndexContainer from "./products/products_index_container";
import ProductShowContainer from "./products/product_show_container";
import CartShowContainer from "./carts/carts_show_container";
import CartHeaderContainer from "./carts/cart_header_container";
import ProductNavContainer from "./products/product_nav_container";
import { useEffect, useState } from "react";
import CategoryNavBar from "./products/Category_nav_bar";
import SearchBarContainer from "./search_bar/search_bar_conatiner";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const App = () => {
  //  TODO: Refactor the search feature to send the search param to the backend and filter the items
  const history = useHistory();
  const [keyword, SetKeyword] = useState(() => "");

  const SearchBar = () => (
    <form id="search-bar-form" onSubmit={hadleKeyword}>
      <input
        type="text"
        className="header-searchbar"
        placeholder="Search"
        name="s"
        onChange={(e) => SetKeyword(e.currentTarget.value)}
      />
      <button id="search-bar-submit" type="submit">
        <SearchIcon fontSize="large" color="black" />
      </button>
    </form>
  );

  function hadleKeyword(e) {
    e.preventDefault();
    history.push({ pathname: `/search/${keyword}`, state: keyword });
    document.querySelector(".header-searchbar").value = "";
  }

  return (
    <div className="main-div">
      <Modal />
      <div className="header-container">
        <header className="header">
          <div className="logo-searchbar-sign">
            <a className="header-logo" href="/">
              Furnitsy
            </a>
            <SearchBar />
            <GreetingContainer className="greeting-component" />
            <CartHeaderContainer />
          </div>

          <CategoryNavBar />
        </header>
      </div>
      <Switch>
        <Route path="/search/:keyword" component={SearchBarContainer} />
        <Route path="/products/:productId" component={ProductShowContainer} />
        <Route path="/category/:category" component={ProductNavContainer} />
        <Route path="/products" component={ProductIndexContainer} />
        <ProtectedRoute path="/cart_items" component={CartShowContainer} />
        <Route path="/" component={ProductIndexContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>
      <Footer />
    </div>
  );
};
// };

export default withRouter(App);
