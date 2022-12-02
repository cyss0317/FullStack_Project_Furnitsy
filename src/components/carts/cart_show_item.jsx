import React from "react";
import { Link } from "react-router-dom";

class CartShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.state = {
      id: this.props.item.id,
      cart_id: this.props.item.cart_id,
      product_id: this.props.item.product_id,
      quantity: this.props.item.quantity,
      screenWidth: window.innerWidth,
    };

    this.updateCartItem = this.updateCartItem.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    let updateButton = document.getElementById("update-cartItem");
    this.setState({ quantity: parseInt(e.currentTarget.value) });
    updateButton.style.display = "block";
  }

  updateCartItem(e) {
    e.preventDefault;
    this.props.updateCartItem(this.state);
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.deleteCartItem(this.props.item.id);
  }

  render() {
    const { item, totalPrice, allProducts, updateCartItem } = this.props;
    let tax = totalPrice * 0.0825;
    let subtotal = totalPrice + tax;
    allProducts.length === 0 ? null : allProducts[item.id];
    return (
      <li className={`cart-show-item-container`}>
        <div className="cart-show-item-container-info">
          <div id="hello">
            <Link
              to={`/products/${item.product.id}`}
              className="cart-show-image-thumnails"
            >
              <img
                className="cart-show-image-thumnail"
                src={item.photoUrls[0]}
              />
            </Link>
          </div>
          <div id="cart-item-title">
            <Link
              to={`/products/${item.product.id}`}
              id="cart-item-description"
            >
              <p>{item.product.category}</p>
              <p>
                {item.product.name.split(" ").length > 4
                  ? item.product.name
                      .split(" ")
                      .map((word, idx) => {
                        if (this.state.screenWidth <= 400) {
                          if (idx < 3) {
                            return word;
                          }
                          if (idx === 3) {
                            return "...";
                          }
                        } else {
                          return word;
                        }
                      })
                      .join(" ")
                  : item.product.name}
              </p>
              <p>Color: {item.product.color}</p>
            </Link>
          </div>
          <div id="cart-item-quantity">
            <p>Quantities</p>
            <br />
            <button id="update-cartItem" onClick={this.updateCartItem}>
              Update Quantity
            </button>
            <form onSubmit={this.deleteHandler} id="quantity-update-form">
              <input
                className="update-quantity-input"
                type="number"
                value={this.state.quantity}
                onChange={this.onChangeHandler}
              />
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
