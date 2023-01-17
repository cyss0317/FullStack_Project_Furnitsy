import React from "react";

interface CartItemNumber {
  numberOfProducts: number;
  css: string;
}

function CartItemNumber({ numberOfProducts, css }: CartItemNumber) {
  return (
    <div id="counts-container">
      <p className={`cart-header-counts ${css}`}>
        {isNaN(numberOfProducts) ? 0 : numberOfProducts}
      </p>
    </div>
  );
}

export default CartItemNumber;
