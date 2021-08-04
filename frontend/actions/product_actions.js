import * as ProductAPIUtil from "../util/product_api_util";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";


export const receiveProduct = (productId) => ({
    type: RECEIVE_PRODUCT,
    productId
})

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})


//thunk actions

export const receiveProduct = productId => dispatch =>(
    ProductAPIUtil.$receiveProduct(productId)
        .then( res => dispatch(receiveProduct(res)) )
)

export const receiveProducts = () => dispatch => (
    ProductAPIUtil.receiveProducts()
        .then(res => dispatch(receiveProducts(res)))
)