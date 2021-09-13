import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS, CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW } from "../actions/review_actions";


const ReviewReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch (action.type){
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, { [action.review.id]: action.review })
        case RECEIVE_ALL_REVIEWS:
            let reviews = Object.values(action.reviews)
            let newState = {}
            reviews.forEach((review) => {
                newState[review.id] = review
            })
            return newState
        case CREATE_REVIEW:
            return Object.assign({}, oldState, {[action.review.id]: action.review})
        case DELETE_REVIEW:
            delete nextState[action.reviewId]
            return nextState
        case EDIT_REVIEW:
            nextState[action.review.id] = action.review
            return nextState
        default:
            return oldState;
    }
}

export default ReviewReducer;