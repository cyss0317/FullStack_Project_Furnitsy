import * as CartItemsAPIUtil from "../util/cart_items_api_util"
export const CREATE_CART_ITEM = "CREATE_CART_ITEM";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";



export const createCartItem = (cartItem) => ({
    type: CREATE_CART_ITEM,
    cartItem
    // important!!!!
    // cartItem is being passed down from thunkaction in line 29
})

export const receiveCartItems = (cartItems) =>  ({
    type: RECEIVE_CART_ITEMS,
    cartItems

})

export const deleteCartItem = (cartItemId) => ({
    type: DELETE_CART_ITEM,
    cartItemId,
    // cartItems
})

export const editCartItem = (cartItem) => ({
    type: UPDATE_CART_ITEM,
    cartItem: cartItem
})


export const ThunkCreateCartItem = (productId, quantity) => dispatch => (
    CartItemsAPIUtil.$createCartItem(productId, quantity)
        .then( cartItem => dispatch(createCartItem(cartItem)),
        )
)

export const ThunkReceiveCartItems = () => dispatch => (
    CartItemsAPIUtil.$receiveCartItems()
        .then( cartItems => dispatch(receiveCartItems(cartItems)))
)


export const ThunkUpdateCartItem = (cartItem) => dispatch => (
    CartItemsAPIUtil.$updateCartItem(cartItem)
        .then(cartItem => dispatch(editCartItem(cartItem)))
)

export const ThunkDeleteCartItem = (cartItemId) => dispatch => (
    CartItemsAPIUtil.$deleteCartItem(cartItemId)
        .then( () => dispatch(deleteCartItem(cartItemId)))
    )