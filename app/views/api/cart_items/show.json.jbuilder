json.extract! @cart_item, :cart_id, :product_id
# json.extract! @cart_items, :cart_id, :product_id
json.cart @cart_item.cart
json.product @cart_item.product