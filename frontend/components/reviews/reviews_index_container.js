import ReviewIndex from "./reviews_index";
import {connect} from "react-redux";
import { ThunkFetchReview, ThunkFetchAllReviews, ThunkDeleteReview, ThunkCreateReview, ThunkUpdateReview } from "../../actions/review_actions";
import { ThunkReceiveProduct, ThunkReceiveProducts } from "../../actions/product_actions";

const mSTP = (state, ownProps) => ({
    reviews: state.entities.reviews,
    productId: ownProps.match.params.productId,
    product: state.entities.products[productId]
    
})

const mDTP = dispatch => ({
    fetchReview: ThunkFetchReview,
    fetchAllReviews: ThunkFetchAllReviews,
    deleteReview: ThunkDeleteReview,
    createReview: ThunkCreateReview,
    updateReview: ThunkUpdateReview,
    receiveProducts: ThunkReceiveProducts,
    receiveProduct: ThunkReceiveProduct
})

export default connect(mSTP, mDTP)(ReviewIndex)