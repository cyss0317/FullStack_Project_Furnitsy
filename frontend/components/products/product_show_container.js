import { connect } from "react-redux"
import ProductShow from "./product_show"
import { ThunkReceiveProduct } from "../../actions/product_actions"

const mSTP =( state, ownProps)=> {
    const product = state.entities.products[ownProps.match.params.productId];
    let photoUrls ;
    if( product === undefined ){
        photoUrls = [];
    } else {
        photoUrls = product.photoUrls;
    }
    return ({
        product: product,
        photoUrls: photoUrls
    })
} 

const mDTP = dispatch => ({
    fetchProduct: productId => dispatch(ThunkReceiveProduct(productId))
})


export default connect(mSTP, mDTP)(ProductShow)