json.extract! cart_item, :id, :cart_id, :product_id, :quantity
json.cart cart_item.cart
json.product cart_item.product
