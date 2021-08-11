import  * as cartAPIUtil  from "../util/cart_api_util";
export const RECEIVE_CART = "RECEIVE_CART";


export const receiveCart = cart => ({
    typd: RECEIVE_CART,
    cart
})

export const fetchCart = userId => dispatch =>(
    cartAPIUtil.$receiveCart(userId)
        .then( cart => dispatch(receiveCart(cart)))
)