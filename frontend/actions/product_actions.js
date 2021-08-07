import * as ProductAPIUtil from "../util/product_api_util";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";


export const receiveProduct = (product) => {

    return ({
        type: RECEIVE_PRODUCT,
        product
    })
}

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})


//thunk actions

export const ThunkReceiveProduct = productId => dispatch =>(
    ProductAPIUtil.$receiveProduct(productId)
        .then( res => dispatch(receiveProduct(res)) )
)

export const ThunkReceiveProducts = () => dispatch => (
    ProductAPIUtil.$receiveProducts()
        .then(res => dispatch(receiveProducts(res)))
)