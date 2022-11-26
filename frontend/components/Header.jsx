import React, { useRef } from "react";
import GreetingContainer from "./greeting_container";
import CartHeaderContainer from "./carts/cart_header_container";
import CategoryNavBar from "./products/Category_nav_bar";
import { useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { useWindowDimension } from "../util/windowDimension";
const Header = () => {
  const [expand, setExpand] = React.useState(false);
  const history = useHistory();
  const keyword = useRef("");
  const { width } = useWindowDimension();
  useEffect(() => {
    console.log(width);
  }, [window.screen.innerWidth]);

  function hadleKeyword(e) {
    e.preventDefault();
    if (keyword.length) return;

    history.push({ pathname: `/search/${keyword.current}`, state: keyword });
    document.querySelector(".header-searchbar").value = "";
  }

  const MenuBar = () => {
    return (
      <div className="menu-bar-container">
        <button
          className="nav-menu"
          onClick={() => setExpand(!expand)}
        >
          <MenuIcon />
        </button>
        <div hidden={!expand}>
          <CategoryNavBar
            expand={expand}
            horizontal={false}
            right={width <= 650 && ".right-1vw"}
          />
        </div>
      </div>
    );
  };

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
        {width > 650 && <GreetingContainer className="greeting-component" />}
        {width > 650 ? <CartHeaderContainer /> : <MenuBar />}
      </div>
      {width > 650 && <CategoryNavBar horizontal={true} />}
    </header>
  );
};

export default Header;
