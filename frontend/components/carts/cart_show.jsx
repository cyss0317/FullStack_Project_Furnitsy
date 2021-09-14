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
        this.props.receiveAllProducts();
    }

    
    render(){
        // const { cartItems, numberOfProducts, allItems, updateCartItem, totalPrice, noCurrentUser, currentUser, allProducts, receiveAllProducts, deleteCartItem, receiveCartItems } = this.props;
        const { cartItems, items, updateCartItem, noCurrentUser, currentUser, allProducts, receiveAllProducts, deleteCartItem, receiveCartItems } = this.props;
        // debugger
        let allItems = Object.values(items).length !== 0 ? Object.values(items) : []
        
        
        let numberOfProducts = 0;
        allItems.forEach((item) => numberOfProducts += item.quantity)
        
        // const products = Object.values(state.entities.products)
        
        let allProductsNameArray = [];
        allItems.forEach((item) => {
            if (!allProductsNameArray.includes(item.product.name)) {
                item.product.name
            }
        }
        )
        
        let totalPrice = 0;
        allItems.forEach((item) => totalPrice += (item.product.price * item.quantity))
        if (cartItems === undefined){
            return null;
        }

        let tax = totalPrice * .0825;
        let subtotal = totalPrice + tax;




        if (numberOfProducts === 0) {
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
                        <div className="cart-show-container">
                            <div id="items-in-your-cart">
                                <h1 >{numberOfProducts} items in your cart</h1>
                                <p>Keep shopping</p>
                            </div>

                            <div id="cart-items-and-total">
                                <ul id="ul">
                                    {
                                        allItems.map((item) => (
                                            <CartShowItem deleteCartItem={deleteCartItem} receiveAllProducts={receiveAllProducts} 
                                            receiveCartItems={receiveCartItems} updateCartItem={updateCartItem}
                                            allProducts={allProducts} totalPrice={totalPrice} item={item} key={item.id} />
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
                                    </div>
                                </div>


                            </div>
                        </div>
                    }

                </div>
                
            )
        }

    }
}

export default CartShow;