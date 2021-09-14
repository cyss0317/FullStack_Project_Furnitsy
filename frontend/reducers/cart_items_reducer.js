import { CREATE_CART_ITEM, DELETE_CART_ITEM, RECEIVE_CART_ITEMS, UPDATE_CART_ITEM} from "../actions/cart_items_actions";
import { OPEN_MODAL } from "../actions/modal_actions";

const CartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    // debugger
    switch (action.type) {
        case CREATE_CART_ITEM:
            return Object.assign({}, oldState, { [action.cartItem.id]: action.cartItem })
        case RECEIVE_CART_ITEMS:
            return action.cartItems 
        case DELETE_CART_ITEM:
            delete nextState[action.cartItemId]
            return nextState
        case UPDATE_CART_ITEM:
            // console.log(cartItem)
            nextState[action.cartItem.id] = action.cartItem
            return nextState
        default:
            return oldState;
    }
}

export default CartItemsReducer;