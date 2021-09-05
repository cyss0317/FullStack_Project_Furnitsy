json.extract! product, :id, :name, :description, :category, :color, :price, :measurement, :highlights, :created_at
json.photoUrls product.images.map { |image| url_for(image)}
json.reviews product.reviews
