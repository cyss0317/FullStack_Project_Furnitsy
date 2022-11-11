import React, { useRef } from "react";
import GreetingContainer from "./greeting_container";
import CartHeaderContainer from "./carts/cart_header_container";
import CategoryNavBar from "./products/Category_nav_bar";
import { useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const history = useHistory();
  const keyword = useRef("");

  function hadleKeyword(e) {
    e.preventDefault();
    if ( keyword.length ) return;
    
    history.push({ pathname: `/search/${keyword.current}`, state: keyword });
    document.querySelector(".header-searchbar").value = "";
  }

  const SearchBar = () => (
    <form id="search-bar-form" onSubmit={hadleKeyword}>
      <input
        type="text"
        className="header-searchbar"
        placeholder="Search"
        name="main-search-bar"
        onChange={(e) => (keyword.current = e.currentTarget.value)}
      />
      <button id="search-bar-submit" type="submit">
        <SearchIcon fontSize="large" color="black" />
      </button>
    </form>
  );
  return (
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
  );
};

export default Header;
