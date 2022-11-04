import * as React from 'react'
import GreetingContainer from "./greeting_container";
import CartHeaderContainer from "./carts/cart_header_container";
import CategoryNavBar from "./products/Category_nav_bar";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const [keyword, SetKeyword] = React.useState(() => "");

    function hadleKeyword(e) {
      e.preventDefault();
      history.push({ pathname: `/search/${keyword}`, state: keyword });
      document.querySelector(".header-searchbar").value = "";
    }
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo-searchbar-sign">
          <a className="header-logo" href="/">
            Furnitsy
          </a>
          <form id="search-bar-form" onSubmit={hadleKeyword}>
            <input
              type="text"
              className="header-searchbar"
              placeholder="Search"
              name="s"
              onChange={(e) => SetKeyword(e.currentTarget.value)}
            />
            <button id="search-bar-submit" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path>
                <path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path>
              </svg>
            </button>
          </form>
          <GreetingContainer className="greeting-component" />
          <CartHeaderContainer />
        </div>

        <CategoryNavBar />
      </header>
    </div>
  );
}

export default Header