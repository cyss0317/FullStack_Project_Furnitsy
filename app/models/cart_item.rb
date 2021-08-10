# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  cart_id    :integer          not null
#  product_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    validates :cart_id, uniqueness: true, presence: true

    belongs_to :cart,
        class_name: :Cart,
        foreign_id: :cart_id

    belongs_to :product,
        foreign_id: :product_id,
        class_name: :Product


end
