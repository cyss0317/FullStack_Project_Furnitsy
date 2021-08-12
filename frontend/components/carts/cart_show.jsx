import React from "react";
import CartShowItem from "./cart_show_item";
import { Link } from "react-router-dom";

class CartShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.receiveCartItems();
    }

    
    render(){
        const { cartItems, numberOfProducts, allItems, totalPrice } = this.props;

        let tax = totalPrice * .0825;
        let subtotal = totalPrice + tax;

        if (cartItems === undefined){
            return null;
        }
        
        return (
            <div className="cart-show-container">
                <div id="items-in-your-cart">
                    <h1 >{numberOfProducts} items in your cart</h1>
                    <p>Keep shopping</p>
                </div>

                <div id="cart-items-and-total">
                    <ul>
                        {
                            allItems.map((item) => (
                                <CartShowItem totalPrice={totalPrice} item={item} key={item.id}/>
                            ))
                        }
                    </ul>
                        {/* images and name category quantity price */}
                        

                    <div id="cart-show-price">
                        <div id="cart-show-price-div">
                            <div>
                                <h2>Item(s) total</h2>
                                <p>${totalPrice.toFixed(2)}</p>
                            </div>
                            <div>
                                <h2>Shop discount</h2>
                                <p>$00,00</p>
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
                        {/* total price and tax , subtotal, checkout button */}

                </div>
            </div>
        )
    }
}

export default CartShow;