

import { connect } from "react-redux";
import CartHeader from "./cart_header";



export const mSTP = (state) => {

    const allItems = Object.values(state.entities.cartItems)
    let numberOfProducts = 0;
    allItems.forEach((item) => numberOfProducts += item.quantity)


    return ({
        numberOfProducts: numberOfProducts,
    })
}

export const mDTP = dispatch => ({
   
})

export default connect(mSTP, mDTP)(CartHeader)