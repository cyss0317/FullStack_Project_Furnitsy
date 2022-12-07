json.extract! cart_item, :id, :cart_id, :product_id, :quantity
json.cart cart_item.cart
# json.partial! "api/products/product"

json.product cart_item.product
json.photoUrls cart_item.product.images.map {|image| url_for(image)}
