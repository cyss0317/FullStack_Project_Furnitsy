json.extract! cart_item, :id, :cart_id, :quantity
json.cart cart_item.cart
json.product do
  json.partial! "api/products/product", product: cart_item.product
end
