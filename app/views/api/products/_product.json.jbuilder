json.extract! product, :id, :name, :description, :category, :color, :price, :measurement, :highlights
json.photoUrls product.images.map { |image| url_for(image)}
