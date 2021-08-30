# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  comment    :text             not null
#  rating     :float            not null
#  helpful    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :user_id, :product_id, :comment, :rating, presence: true
    validates :rating, minimum: 1

    belongs_to :user,
        foreign_id: :user_id,
        class_name: :User

    belongs_to :product,
        foreign_id: :product_id,
        class_name: :Product

    
end
