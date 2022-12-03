import { Review, ReviewId } from "./types";
import * as reviewAPIUtil from "../../util/review_api_util";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const EDIT_REVIEW = "EDIT_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const UPDATE_REVIEW = "UPDATE_REVIEW";

export const receiveReview = (review: Review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const receiveAllReviews = (reviews: Array<Review>) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews,
});

export const createReview = (review: Review) => ({
  type: CREATE_REVIEW,
  review,
});

export const deleteReview = (reviewId: ReviewId) => ({
  type: DELETE_REVIEW,
  reviewId,
});

export const updateReview = (review: Review) => ({
  type: UPDATE_REVIEW,
  review,
});

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});


export const ThunkFetchReview = (reviewId: ReviewId) => (dispatch) =>
  reviewAPIUtil.$receiveReview(reviewId).then(
    (review: Review) => dispatch(receiveReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors))
  );

export const ThunkFetchAllReviews = () => (dispatch) =>
  reviewAPIUtil.$receiveAllReviews().then(
    (reviews: Array<Review>) => dispatch(receiveAllReviews(reviews)),
    (errors) => dispatch(receiveReviewErrors(errors))
  );

export const ThunkDeleteReview = (reviewId: ReviewId) => (dispatch) =>
  reviewAPIUtil.$deleteReview(reviewId).then(
    () => dispatch(deleteReview(reviewId)),
    (errors) => dispatch(receiveReviewErrors(errors))
  );

export const ThunkCreateReview = (review: Review) => (dispatch) =>
  reviewAPIUtil.$createReview(review).then(
    (review: Review) => dispatch(createReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors))
  );

export const ThunkUpdateReview = (review: Review) => (dispatch) =>
  reviewAPIUtil.$receiveReview(review).then(
    (review: Review) => dispatch(updateReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors))
  );
