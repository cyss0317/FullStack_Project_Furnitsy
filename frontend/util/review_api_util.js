export const $receiveAllReviews = () =>
  $.ajax({
    url: `/api/reviews`,
    method: "GET",
  });

export const $createReview = (review) =>
  $.ajax({
    url: `/api/reviews`,
    method: "POST",
    data: { review },
  });

export const $deleteReview = (reviewId) =>
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "DELETE",
  });

export const $editReview = (review) =>
  $.ajax({
    url: `api/reviews/${review.id}`,
    method: "PATCH",
    data: { review },
  });

export const $receiveReview = (reviewId) =>
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "GET",
  });
