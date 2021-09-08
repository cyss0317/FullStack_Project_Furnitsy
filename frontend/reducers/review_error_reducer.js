import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS, RECEIVE_ALL_REVIEWS, CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW } from "../actions/review_actions";

const ReviewErrorReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors
        case RECEIVE_REVIEW:
            return [];
        case RECEIVE_ALL_REVIEWS:
            return [];
        case CREATE_REVIEW:
            return [];
        case DELETE_REVIEW:
            return [];
        case EDIT_REVIEW:
            return [];

        default:
            return oldState;


    }
}


export default ReviewErrorReducer;