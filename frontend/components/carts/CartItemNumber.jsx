import React from "react";
function CartItemNumber({ numberOfProducts, css }) {
  return (
    <div id="counts-container">
      <p className={`cart-header-counts ${css}`}>
        {isNaN(numberOfProducts) ? 0 : numberOfProducts}
      </p>
    </div>
  );
}

export default CartItemNumber;
