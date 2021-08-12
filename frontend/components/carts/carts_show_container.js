import {connect} from "react-redux";
import CartShow from "./cart_show";
import { ThunkDeleteCartItem, ThunkReceiveCartItems } from "../../actions/cart_items_actions";


export const mSTP = (state) => {

    const allItems = Object.values(state.entities.cartItems)
    let numberOfProducts = 0;
    allItems.forEach((item) => numberOfProducts += item.quantity )

    let allProductsNameArray =[];
    allItems.forEach((item)=> {
        if (!allProductsNameArray.includes(item.product.name)){
            item.product.name
        }}
    )

    let totalPrice = 0;
    allItems.forEach((item) => totalPrice += item.product.price)
    // combine same items into one div
    
    return({
        allItems: allItems,
        cartItems: state.entities.cartItems,
        numberOfProducts: numberOfProducts,
        totalPrice: totalPrice

    })
}

export const mDTP = dispatch => ({  
    deleteCartItem: cartItemId => dispatch(ThunkDeleteCartItem(cartItemId)),
    receiveCartItems: () => dispatch(ThunkReceiveCartItems())
})

export default connect(mSTP, mDTP)(CartShow)