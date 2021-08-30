# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  category    :string           not null
#  measurement :string
#  color       :string           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  highlights  :text
#
class Product < ApplicationRecord
    validates :name, :description, :category, :color, :price, presence: true
    
    has_many_attached :images

    has_many :cart_items

    has_many :reviews

end
