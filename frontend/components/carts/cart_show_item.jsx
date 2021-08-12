import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";


class CartShowItem extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.item;
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    deleteHandler(e){
        e.preventDefault();
        this.props.deleteCartItem(this.props.item.id);
    }

    render(){
        const { item, totalPrice } = this.props;
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
                        <p>quantities</p>
                        <br />
                        <button>{item.quantity}</button>
                        {/* <select  value={item.quantity}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select> */}
                    </div>
                    <div>
                        <div id="cart-item-price">
                            <p>${item.product.price.toFixed(2)}</p>
                            <h1 >Over 20 people have this in their cart</h1>
                            <h2>Sale: 0% off</h2>
                        </div>
                        <form onSubmit={this.deleteHandler}>
                            <input type="submit" value="Remove" />
                        </form>
                    </div>
                </div>
            
            </li>
        )
    }
}


export default CartShowItem;