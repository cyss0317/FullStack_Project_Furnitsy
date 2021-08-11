import { connect } from "react-redux"
import ProductShow from "./product_show"
import { ThunkReceiveProduct } from "../../actions/product_actions"
import { ThunkCreateCartItem, ThunkDeleteCartItem } from "../../actions/cart_items_actions"

const mSTP =( state, ownProps)=> {
    const product = state.entities.products[ownProps.match.params.productId];

    let photoUrls ;
    if( product === undefined ){
        photoUrls = [];
    } else {
        photoUrls = product.photoUrls;
    }
    // question!!!!!!! when to use conditioonal inside container or presentational
    return ({
        product: product,
        photoUrls: photoUrls,
        cartId: state.cart.id,
        cartItems: state.cartItems
    })
} 

const mDTP = dispatch => ({
    fetchProduct: productId => dispatch(ThunkReceiveProduct(productId)),
    createCartItem: cartItemId => dispatch(ThunkCreateCartItem(cartItemId)),
    deleteCartItem: cartItemId => dispatch(ThunkDeleteCartItem(cartItemId))
})


export default connect(mSTP, mDTP)(ProductShow)