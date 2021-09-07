import React from "react";
import CartShowItem from "./cart_show_item";
import { Link, Redirect } from "react-router-dom";
import ProductIndexContainer from '../products/products_index_container'

class CartShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.receiveCartItems();
    }

    
    render(){
        const { cartItems, numberOfProducts, allItems, totalPrice, noCurrentUser, currentUser } = this.props;

        let tax = totalPrice * .0825;
        let subtotal = totalPrice + tax;

        if (cartItems === undefined){
            return null;
        }




        if (allItems.length === 0) {
            return (
                <img src="https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/Spinner-3.gif" alt="" />
            )
    
        } else if( numberOfProducts === 0) {
            return (
                <div>
                    <h1>There is nothing in your cart</h1>
                    <Link to="/">Continue shopping?</Link>
                </div>
            )
        } else if (allItems.length > 0) {
            return (
                <div>
                    {
                        // currentUser ? <p>hello</p> :

                        <div className="cart-show-container">
                            <div id="items-in-your-cart">
                                <h1 >{numberOfProducts} items in your cart</h1>
                                <p>Keep shopping</p>
                            </div>

                            <div id="cart-items-and-total">
                                <ul id="ul">
                                    {
                                        allItems.map((item) => (
                                            <CartShowItem deleteCartItem={this.props.deleteCartItem} totalPrice={totalPrice} item={item} key={item.id} />
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
                                        {/* <form >
                                            <input id="proceed-to-checkout" type="submit" value="Proceed to checkout" />
                                        </form> */}
                                    </div>
                                </div>
                                {/* total price and tax , subtotal, checkout button */}

                            </div>
                        </div>
                    }

                </div>
                
            )
        }
        // else if ( !currentUser) {
        //     return(
        //         <Redirect to="/"></Redirect> 
        //     )
        // }
    }
}

export default CartShow;