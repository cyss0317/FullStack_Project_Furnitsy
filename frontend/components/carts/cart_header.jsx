import React from "react";

const CartHeader = (props) =>{
    return(
        <div id="counts-main-div">
            <div id="counts-container">
                <p className="cart-header-counts">{isNaN(props.numberOfProducts) ? 0 : props.numberOfProducts}</p>
            </div>
            <a href="/#/cart_items" title="Image from freeiconspng.com">
                <img className="cart-image" src="https://www.freeiconspng.com/uploads/shopping-cart-icon-2.png" width="350" alt="Vectors Download Shopping Cart Free Icon" />
            </a>
        </div>
    )
}

export default CartHeader;