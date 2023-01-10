import React from "react";
import CartShowItem from "./cart_show_item";
import { Link, Redirect } from "react-router-dom";
class CartShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveCartItems();
    this.props.receiveAllProducts();
  }

  render() {
    const {
      cartItems,
      items,
      updateCartItem,
      allProducts,
      receiveAllProducts,
      deleteCartItem,
      receiveCartItems,
    } = this.props;
    let allItems =
      Object.values(items).length !== 0 ? Object.values(items) : [];
    let numberOfProducts = 0;
    allItems.forEach((item) => (numberOfProducts += item.quantity));

    let totalPrice = 0;
    allItems.forEach(
      (item) => (totalPrice += item.product.price * item.quantity)
    );
    if (cartItems === undefined) {
      return null;
    }

    let tax = totalPrice * 0.0825;
    let subtotal = totalPrice + tax;

    if (numberOfProducts === 0) {
      return (
        <div className="margin6vw">
          <h1>There is nothing in your cart</h1>
          <Link to="/">Continue shopping?</Link>
        </div>
      );
    } else if (allItems.length > 0) {
      return (
        <div>
          {
            <div className="cart-show-container">
              <div id="items-in-your-cart">
                <h1>{numberOfProducts} items in your cart</h1>
                <p>Keep shopping</p>
              </div>

              <div id="cart-items-and-total">
                <ul id="ul">
                  {allItems.map((item) => (
                    <CartShowItem
                      deleteCartItem={deleteCartItem}
                      updateCartItem={updateCartItem}
                      allProducts={allProducts}
                      totalPrice={totalPrice}
                      item={item}
                      key={item.id}
                    />
                  ))}
                </ul>

                <div id="cart-show-price">
                  <div id="cart-show-price-div">
                    <div>
                      <h2>Item(s) total</h2>
                      <p>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div>
                      <h2>Shop discount</h2>
                      <p>$00.00</p>
                    </div>
                    <div>
                      <h2>Tax</h2>
                      <p>${tax.toFixed(2)}</p>
                    </div>
                    <div>
                      <h2>Subtotal</h2>
                      <p>${subtotal.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      );
    }
  }
}

export default CartShow;
