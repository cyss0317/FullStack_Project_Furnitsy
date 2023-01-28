# frozen_string_literal: true

json.extract! @cart, :id, :user_id
# json.user @cart.user
# json.cart_items @cart.cart_items
json.products @cart.products
