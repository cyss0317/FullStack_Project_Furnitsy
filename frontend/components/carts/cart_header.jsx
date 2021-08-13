import React from "react";

const CartHeader = ({numberOfProducts, currentUser, logout, openModal}) =>{
    const ifLoggedIn = () => (
        <div id="counts-main-div">
            <div id="counts-container">
                <p className="cart-header-counts">{isNaN(numberOfProducts) ? 0 : numberOfProducts}</p>
            </div>
            <a href="/#/cart_items" title="Image from freeiconspng.com">
                <img className="cart-image" src="https://www.freeiconspng.com/uploads/shopping-cart-icon-2.png" width="350" alt="Vectors Download Shopping Cart Free Icon" />
            </a>
        </div>
    )
    const ifLoggedOut = () => (
        <div id="counts-main-div">
            <div id="counts-container">
                <p className="cart-header-counts">{isNaN(numberOfProducts) ? 0 : numberOfProducts}</p>
            </div>
            <a title="Image from freeiconspng.com" onClick={() => openModal("Login")}>
                <img className="cart-image" src="https://www.freeiconspng.com/uploads/shopping-cart-icon-2.png" width="350" alt="Vectors Download Shopping Cart Free Icon" />
            </a>
        </div>
    )

    return currentUser ? ifLoggedIn() : ifLoggedOut();

}

export default CartHeader;