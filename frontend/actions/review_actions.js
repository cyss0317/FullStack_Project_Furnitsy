import * as reviewAPIUtil from "../util/review_api_util";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const EDIT_REVIEW = "EDIT_REVIEW";


export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

export const createReview = review => ({
    type: CREATE_REVIEW,
    review
})

export const deleteReview = reviewId => ({
    type: DELETE_REVIEW
})

export const updateReview = review => ({
    type: UPDATE_REVIEW,
    review
})



//thunk

export const ThunkFetchReview =  reviewId => dispatch => (
    reviewAPIUtil.$receiveReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
) 

export const ThunkFetchAllReviews = ()  => dispatch => (
    reviewAPIUtil.$receiveAllReviews()
        .then(reviews => dispatch(receiveAllReviews(reviews)))
) 

export const ThunkDeleteReview =  reviewId => dispatch => (
    reviewAPIUtil.$deleteReview(reviewId)
        .then(() => dispatch(deleteReview(reviewId)))
) 

export const ThunkCreateReview =  review => dispatch => (
    reviewAPIUtil.$createReview(review)
        .then(review => dispatch(createReview(review)))
) 

export const ThunkUpdateReview =  review => dispatch => (
    reviewAPIUtil.$receiveReview(review)
        .then(review => dispatch(updateReview(review)))
) 
