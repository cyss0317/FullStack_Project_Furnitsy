# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  cart_id    :integer          not null
#  product_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  quantity   :integer
#
class CartItem < ApplicationRecord
    validates :cart_id,  presence: true

    belongs_to :cart,
        class_name: :Cart,
        foreign_key: :cart_id

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
    

end
