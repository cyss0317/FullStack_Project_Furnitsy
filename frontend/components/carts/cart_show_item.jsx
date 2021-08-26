import React from "react";
import { Link } from "react-router-dom";


class CartShowItem extends React.Component{
    constructor(props){
        super(props)
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    deleteHandler(e){
        e.preventDefault();
        this.props.deleteCartItem(this.props.item.id);
    }
    // checkOutHandler(e){
    //     this.
    // }
    // question for checkout button

    render(){
        const { item, totalPrice, products } = this.props;
        let tax = totalPrice * .0825;
        let subtotal = totalPrice + tax;
        

        return (
            <li className={`cart-show-item-container`}>
                <div className="cart-show-item-container-info">
                    <div id="hello">
                        <Link to={`/products/${item.product.id}`} className="cart-show-image-thumnails">
                            <img className="cart-show-image-thumnail"
                                src={item.photoUrls[0]}/>
                            {/* <a href={`/products/${product.id}`}>{product.name}</a> */}
                            {/* <p className="thumnail-p">{product.name}</p> */}
                        </Link>
                        <Link to={`/products/${item.product.id}`} id="cart-item-description">
                                <p>{item.product.category}</p>
                                <p>{item.product.name}</p>
                                <p>{item.product.color}</p>
                        </Link>
                    </div>
                    <div id="cart-item-quantity">
                        <p>quantities</p>
                        <br />
                        <button>{item.quantity}</button>
                        <form  onSubmit={this.deleteHandler}>
                            <input className="remove-button" type="submit" value="Remove" />
                        </form>
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
                    <div id="cart-item-price">
                        <p>${item.product.price.toFixed(2)}</p>
                        <h1 >Over 20 people have this in their cart</h1>
                        <h2>Sale: 0% off</h2>
                    </div>

                </div>
            
            </li>
        )
    }
}


export default CartShowItem;