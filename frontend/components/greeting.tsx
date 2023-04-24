import React from "react";
import CartHeaderContainer from "./carts/cart_header_container";
import { User } from "./types";

interface GreetingProps {
  currentUser: User;
  logout: () => void;
  openModal: (action: string) => void;
  horizontal: boolean;
}
const Greeting = ({
  currentUser,
  logout,
  openModal,
  horizontal,
}: GreetingProps) => {
  const ifLoggedIn = () => (
    <div
      className={`flex flex-row gap-05 justify-space-between align-items-center ${
        horizontal === false && "menu-bar-logout-container flex-col"
      }`}
    >
      <p className="welcome-message">Welcome, {currentUser.first_name}</p>
      {horizontal === false && <CartHeaderContainer />}
      <button className="log-button" onClick={logout}>
        Logout
      </button>
    </div>
  );

  const ifLoggedOut = () => (
    <button className="log-button" onClick={() => openModal("Login")}>
      Login
    </button>
  );

  return currentUser ? ifLoggedIn() : ifLoggedOut();
};

export default Greeting;
