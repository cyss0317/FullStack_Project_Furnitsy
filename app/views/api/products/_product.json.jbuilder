json.extract! product, :id, :name, :description, :category, :color, :price, :measurement
json.photoUrls product.images.map { |image| url_for(image)}