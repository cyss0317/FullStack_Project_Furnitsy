import React from "react";
import CartShowItem from "./cart_show_item";
import { Link } from "react-router-dom";
import { CartItem } from "./types";
import { Product } from "../products/types";
import { User } from "../types";

interface CartShowProps {
  cartItems: { [key: number]: CartItem };
  // noCurrentUser: state.session.id;
  currentUser: User;
  allProducts: { [key: number]: Product };
  deleteCartItem: any;
  updateCartItem: any;
  receiveCartItems: any;
  receiveAllProducts: any;
}

class CartShow extends React.Component<CartShowProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveCartItems();
    this.props.receiveAllProducts();
  }
  render() {
    const { cartItems, updateCartItem, allProducts, deleteCartItem } =
      this.props;
    let allItems =
      Object.values(cartItems).length !== 0 ? Object.values(cartItems) : [];
    let numberOfProducts = 0;
    allItems.forEach((cartItem) => (numberOfProducts += cartItem.quantity));
    let totalPrice = 0;
    allItems.forEach(
      (cartItem) => (totalPrice += cartItem.product.price * cartItem.quantity)
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
