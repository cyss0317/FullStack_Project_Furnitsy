json.extract! cart_item, :id, :cart_id, :product_id, :quantity
# json.extract! @cart_items, :cart_id, :product_id
json.cart cart_item.cart
json.product cart_item.product
# json.photoUrls product.images.map { |image| url_for(image)}
json.quantity cart_item.quantity