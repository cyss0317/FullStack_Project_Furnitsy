# frozen_string_literal: true

json.extract! user, :id, :email, :first_name
json.reviews user.reviews
