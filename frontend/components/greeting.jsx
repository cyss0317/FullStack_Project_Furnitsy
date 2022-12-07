import React from "react";
import CartHeaderContainer from "./carts/cart_header_container";

const Greeting = ({ currentUser, logout, openModal, horizontal }) => {
  const ifLoggedIn = () => (
    <div
      className={`flex gap-05 ${
        horizontal === false && "menu-bar-logout-container flex-col"
      }`}
    >
      <div className="flex flex-row gap-1 justify-space-between">
        <p className="welcome-message">Welcome, {currentUser.first_name}</p>
        {horizontal === false && <CartHeaderContainer />}
      </div>
      <button className="log-button" onClick={logout}>
        Logout
      </button>
    </div>
  );

  const ifLoggedOut = () => (
    <div className="signup-login">
      <button className="log-button" onClick={() => openModal("Login")}>
        Login
      </button>
    </div>
  );

  return currentUser ? ifLoggedIn() : ifLoggedOut();
};

export default Greeting;
