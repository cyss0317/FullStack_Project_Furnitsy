import { RECEIVE_CART } from "../actions/carts_actions";

const CartReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_CART:
            // return Object.assign({}, oldState, {[action.cart.id]: action.cart})
            return action.cart
        default:
            return oldState;
    }

}

export default CartReducer;