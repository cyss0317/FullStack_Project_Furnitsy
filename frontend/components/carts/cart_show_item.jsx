import React from "react";
import { Link } from "react-router-dom";

const CartShowItem = (props) => {

    const { item, totalPrice } = props;
    let tax = totalPrice * .0825;
    let subtotal = totalPrice + tax;

    return (
        <li className={`cart-show-item-container`}>
            <div className="cart-show-item-container-info">
                <Link to={`/products/${item.product.id}`} className="cart-show-image-thumnails">
                    <img className="cart-show-image-thumnail"
                        // src={item.product.photoUrls[0]}
                    />
                    {/*question! how to get rid of text decoration */}
                    {/* <a href={`/products/${product.id}`}>{product.name}</a> */}
                    {/* <p className="thumnail-p">{product.name}</p> */}
                </Link>
                <div id="cart-item-description">
                    <p>{item.product.category}</p>
                    <p>{item.product.name}</p>
                    <p>{item.product.color}</p>
                    <p>{item.product.measurement}</p>
                </div>
                <div id="cart-item-quantity">
                    <select value={item.quantity}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </div>
                <div id="cart-item-price">
                    <p>{item.product.price.toFixed(2)}</p>
                </div>
            </div>
         
        </li>
    )
}


export default CartShowItem;