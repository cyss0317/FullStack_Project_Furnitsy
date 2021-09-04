import { connect } from "react-redux"
import ProductShow from "./product_show"
import { ThunkReceiveProduct } from "../../actions/product_actions"
import { ThunkCreateCartItem, ThunkDeleteCartItem } from "../../actions/cart_items_actions"
import { ThunkFetchReview, ThunkFetchAllReviews, ThunkDeleteReview, ThunkCreateReview, ThunkUpdateReview } from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP =( state, ownProps)=> {
    const product = state.entities.products[ownProps.match.params.productId];
    const productId = ownProps.match.params.productId;
    // const productReviews = state.entities.reviews.filter((review) => (review.productId === productId))
    // const currentUserReview = productReviews.filter((review) => review.userId === state.session.id)
    let productReviews;
    if( productReviews === undefined){
        productReviews = [];
    } else{
        productreviews = state.entities.reviews.filter((review) => (review.productId === productId))
    }
    let photoUrls ;
    if( product === undefined ){
        photoUrls = [];
    } else {
        photoUrls = product.photoUrls;
    }
    // solved!!!!!!! when to use conditioonal inside container or presentational
    return ({
        reviewErrors: state.errors.review,
        product: product,
        photoUrls: photoUrls,
        cartId: state.entities.cart.id,
        cartItems: state.entities.cartItems,
        currentUser: state.entities.users[state.session.id],
        errors: state.errors,
        productReviews: productReviews,

    })
} 

const mDTP = dispatch => ({
    fetchProduct: productId => dispatch(ThunkReceiveProduct(productId)),
    createCartItem: (productId, quantity) => dispatch(ThunkCreateCartItem(productId, quantity)),
    deleteCartItem: cartItemId => dispatch(ThunkDeleteCartItem(cartItemId)),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchReview: reviewId => ThunkFetchReview(reviewId),
    fetchAllReviews: () => ThunkFetchAllReviews(),
    deleteReview: reviewId => ThunkDeleteReview(reviewId),
    createReview: review => ThunkCreateReview(review),
    updateReview: review => ThunkUpdateReview(review),
})


export default connect(mSTP, mDTP)(ProductShow)