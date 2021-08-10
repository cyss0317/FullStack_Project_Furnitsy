import * as CartItemsAPIUtil from "../util/cart_items_api_util"

export const CREATECARTITEM = "CREATECARTITEM";
export const RECEIVECARTITEMS = "RECEIVECARTITEMS";
export const DELETECARTITEM = "DELETECARTITEM";


export const createCartItem = (cartItem) => ({
    type: CREATECARTITEM,
    cartItem
})
export const receiveCartItems = (cartItems) =>  ({
    type: RECEIVECARTITEMS,
    cartItems

})
export const deleteCartItem = (cartItemId) => ({
    type: DELETE_CART_ITEM

})


export const ThunkCreateCartItem = (cartItem) => dispatch => (
    CartItemsAPIUtil.$createCartItem(cartItem)
        .then( cartItem => dispatch(createCartItem(cartItem)))
)

// export const ThunkReceiveCartItems = () => dispatch => (
//     CartItemsAPIUtil.$receiveCartItems()
//         .then( cartItems => dispatch(receiveCartItems(cartItems)))
// )

export const ThunkDeleteCartItem = (cartItemId) => dispatch => (
    CartItemsAPIUtil.$deleteCartItem(cartItemId)
        .then( () => dispatch(deleteCartItem(cartItemId)))
)