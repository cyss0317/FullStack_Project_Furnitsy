import { connect } from "react-redux"
import ProductShow from "./product_show"
import { ThunkReceiveProduct } from "../../actions/product_actions"
import { ThunkCreateCartItem, ThunkDeleteCartItem } from "../../actions/cart_items_actions"
import { openModal } from "../../actions/modal_actions";

const mSTP =( state, ownProps)=> {
    const product = state.entities.products[ownProps.match.params.productId];

    let photoUrls ;
    if( product === undefined ){
        photoUrls = [];
    } else {
        photoUrls = product.photoUrls;
    }
    // solved!!!!!!! when to use conditioonal inside container or presentational
    return ({
        product: product,
        photoUrls: photoUrls,
        cartId: state.entities.cart.id,
        cartItems: state.entities.cartItems,
        currentUser: state.entities.users[state.session.id],
        errors: state.errors
    })
} 

const mDTP = dispatch => ({
    fetchProduct: productId => dispatch(ThunkReceiveProduct(productId)),
    createCartItem: (productId, quantity) => dispatch(ThunkCreateCartItem(productId, quantity)),
    deleteCartItem: cartItemId => dispatch(ThunkDeleteCartItem(cartItemId)),
    openModal: (modal) => dispatch(openModal(modal))
})


export default connect(mSTP, mDTP)(ProductShow)