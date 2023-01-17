import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../products/types";
import { Cart, CartItem } from "./types";

interface Item {
  cart: Cart;
  product: Product;
  quantity: number;
}
interface CartShowItemProps {
  item: Item;
  allProducts: any;
  totalPrice: number;
  deleteCartItem: (id: number) => any;
  updateCartItem: (cartItem: CartItem) => any;
}
interface CartShowItemState {
  id: number;
  cart_id: number;
  product_id: string;
  quantity: number;
}
class CartShowItem extends React.Component<
  CartShowItemProps,
  CartShowItemState
> {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.state = {
      id: this.props.item.cart.id,
      cart_id: this.props.item.cart.id,
      product_id: this.props.item.product.id,
      quantity: this.props.item.quantity,
    };

    this.updateCartItem = this.updateCartItem.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    let updateButton = document.getElementById("update-cartItem");
    this.setState({ quantity: parseInt(e.currentTarget.value) });
    if (updateButton) updateButton.style.display = "block";
  }

  updateCartItem(e) {
    e.preventDefault;
    this.props.updateCartItem(this.state);
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.deleteCartItem(this.props.item.cart.id);
  }

  render() {
    const { item, totalPrice, allProducts, updateCartItem } = this.props;
    let tax = totalPrice * 0.0825;
    let subtotal = totalPrice + tax;
    allProducts.length === 0 ? null : allProducts[item.product.id];
    console.log("cartshowItem", this.props);
    return (
      <li className={`cart-show-item-container`}>
        <div className="cart-show-item-container-info">
          <div id="hello">
            <Link
              to={`/products/${item.product.id}`}
              className="cart-show-image-thumnails"
            >
              <img
                alt={`${item.product.name}-image`}
                className="cart-show-image-thumnail"
                src={item.product.photoUrls[0]}
              />
            </Link>
            <Link
              to={`/products/${item.product.id}`}
              id="cart-item-description"
            >
              <p>{item.product.category}</p>
              <p>{item.product.name}</p>
              <p>{item.product.color}</p>
            </Link>
          </div>
          <div id="cart-item-quantity">
            <p>Quantities</p>
            <br />
            <form
              className="flex flex-col gap-05 justify-center align-center"
              onSubmit={this.updateCartItem}
            >
              <button
                id="update-cartItem"
                type="submit"
                onClick={this.updateCartItem}
              >
                Update Quantity
              </button>
              <input
                aria-label="quantity to update"
                className="update-quantity-input"
                type="number"
                value={this.state.quantity}
                onChange={this.onChangeHandler}
              />
            </form>
            <form onSubmit={this.deleteHandler} id="quantity-update-form">
              <input className="remove-button" type="submit" value="Remove" />
            </form>
          </div>
          <div id="cart-item-price">
            <p>${item.product.price.toFixed(2)}</p>
            <h1>Over 20 people have this in their cart</h1>
            <h2>Sale: 0% off</h2>
          </div>
        </div>
      </li>
    );
  }
}

export default CartShowItem;
