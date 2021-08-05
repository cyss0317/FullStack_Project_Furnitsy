import { connect } from "react-redux"
import ProductShow from "./product_show"
import { ThunkReceiveProduct } from "../../actions/product_actions"

const mSTP =( state, ownProps)=> {
    return ({
        product: state.entities.products[ownProps.match.params.productId]
    })
} 

const mDTP = dispatch => ({
    fetchProduct: productId => dispatch(ThunkReceiveProduct(productId))
})


export default connect(mSTP, mDTP)(ProductShow)