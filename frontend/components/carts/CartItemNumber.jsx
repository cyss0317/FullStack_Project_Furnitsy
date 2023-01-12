import React from "react";
function CartItemNumber({ numberOfProducts }) {
  return (
    <div id="counts-container">
      <p className="cart-header-counts">
        {isNaN(numberOfProducts) ? 0 : numberOfProducts}
      </p>
    </div>
  );
}

export default CartItemNumber;
