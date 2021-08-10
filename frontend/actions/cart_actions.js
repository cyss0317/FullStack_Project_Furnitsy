import * as CartItemsAPIUtil from "../util/cart_items_api_util"

export const CREATECARTITEM = "CREATECARTITEM";
export const RECEIVECARTITEMS = "RECEIVECARTITEMS";
export const DELETECARTITEM = "DELETECARTITEM";


export const createCartItem = (userId, productId)({
    type: CREATECARTITEM,
    userId,
    productId
})
export const receiveCartItems = (userId)({
    type: RECEIVECARTITEMS,
    userId
})
export const deleteCartItem = (userId, productId)({
    type: CREATECARTITEM,
    userId,
    productId
})


export const ThunkCreateCartItem = (userId, productId) => dispatch => (
    CartItemsAPIUtil.$createCartItem(userId, productId)
        .then( res => dispatch(createCartItem(res)))
)

export const ThunkReceiveItems = userId => dispatch => (
    CartItemsAPIUtil.$receiveCartItems(userId)
        .then( res => dispatch(receiveCartItems(res)))
)