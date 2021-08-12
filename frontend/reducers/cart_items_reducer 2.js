import { CREATE_CART_ITEM, DELETE_CART_ITEM, RECEIVE_CART_ITEMS} from "../actions/cart_items_actions";

const CartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case CREATE_CART_ITEM:
            return Object.assign({}, oldState, { [action.cartItem.id]: action.cartItem })
        case RECEIVE_CART_ITEMS:
            // return Object.assign({}, oldState, {action.cartItems})
            return action.cartItems 
        case DELETE_CART_ITEM:
            // return Object.assign({}, oldState)
            delete nextState[action.cartItemId]
            return nextState
        default:
            return oldState;
    }
}
// question
    // how to add cart without action.type
            // should i create a controller#show to pull 
            // ajax request and create action to create
            // reducer. 

export default CartItemsReducer;