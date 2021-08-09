# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord
    validates :user_id, uniqueness: true, presence: true

    belongs_to :user,
        class_name: :User,
        foreign_id: :user_id

end
