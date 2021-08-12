import {connect} from "react-redux";
import CartShow from "./cart_show";
import { ThunkDeleteCartItem, ThunkReceiveCartItems } from "../../actions/cart_items_actions";

export const mSTP = (state) => {

    const allItems = Object.values(state.entities.cartItems)
    let numberOfProducts = 0;
    allItems.forEach((item) => numberOfProducts += item.quantity )
    
    return({
        cartItems: state.entities.cartItems,
        totalProducts: state.entities.cartItems

    })
}

export const mDTP = dispatch => ({  
    deleteCartItem: cartItemId => dispatch(ThunkDeleteCartItem(cartItemId)),
    receiveCartItems: () => dispatch(ThunkReceiveCartItems())
})

export default connect(mSTP, mDTP)(CartShow)