# frozen_string_literal: true

json.partial! 'api/reviews/review', review: @review
json.user @review.user
