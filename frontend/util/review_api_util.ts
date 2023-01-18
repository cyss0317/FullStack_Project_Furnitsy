import { Review, ReviewId } from "../components/reviews/types";

export const $receiveAllReviews = () =>
  $.ajax({
    url: `/api/reviews`,
    method: "GET",
  });

export const $createReview = (review: Review) =>
  $.ajax({
    url: `/api/reviews`,
    method: "POST",
    data: { review },
  });

export const $deleteReview = (reviewId: ReviewId) =>
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "DELETE",
  });

export const $editReview = (review: Review) =>
  $.ajax({
    url: `api/reviews/${review.id}`,
    method: "PATCH",
    data: { review },
  });

export const $receiveReview = (reviewId: ReviewId) =>
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "GET",
  });
