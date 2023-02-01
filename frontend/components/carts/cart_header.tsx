import React from "react";
import { Link } from "react-router-dom";
import { User } from "../types";
import { CartItem } from "./types";

interface CartHeaderProps {
  currentUser: User;
  items: { [key: number]: CartItem };
  openModal: (action: string) => void;
}

const CartHeader = ({ items, currentUser, openModal }: CartHeaderProps) => {
  const allItems = Object.values(items);
  let numberOfProducts = 0;
  allItems.forEach((item) => (numberOfProducts += item.quantity));

  const ifLoggedIn = () => (
    <div id="counts-main-div">
      <div id="counts-container">
        <p className="cart-header-counts">
          {isNaN(numberOfProducts) ? 0 : numberOfProducts}
        </p>
      </div>
      <Link to="/cart_items" title="Image from freeiconspng.com">
        <img
          className="cart-image"
          src="https://www.freeiconspng.com/uploads/shopping-cart-icon-2.png"
          width="350"
          alt="Vectors Download Shopping Cart Free Icon"
        />
      </Link>
    </div>
  );
  const ifLoggedOut = () => (
    <div id="counts-main-div">
      <div id="counts-container">
        <p className="cart-header-counts">
          {!currentUser ? 0 : numberOfProducts}
        </p>
      </div>
      <a title="Image from freeiconspng.com" onClick={() => openModal("Login")}>
        <img
          className="cart-image"
          src="https://www.freeiconspng.com/uploads/shopping-cart-icon-2.png"
          width="350"
          alt="Vectors Download Shopping Cart Free Icon"
        />
      </a>
    </div>
  );

  return currentUser ? ifLoggedIn() : ifLoggedOut();
};

export default CartHeader;
