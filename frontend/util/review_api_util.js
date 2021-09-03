export const $receiveAllReviews = productId => (
    $.ajax({
        url: `/api/reviews/${productId}`,
        method: "GET"
    })
)

export const $createReview = review => (
    $.ajax({
        url: `/api/reviews`,
        method: "POST",
        data: {review}
    
    })
)

export const $editReview = review => (
    $.ajax({
        url: `api/revies/${review.id}`,
        method: 'PATCH'
    })
)

export const $receiveReview = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: 'GET'
    })
)