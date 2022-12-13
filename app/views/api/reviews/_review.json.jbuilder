json.extract! review, :id, :user_id, :product_id, :comment, :rating, :helpful, :created_at
json.user review.user
json.product review.product
