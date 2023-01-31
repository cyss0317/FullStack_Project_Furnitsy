# frozen_string_literal: true

class AddColumnForCartItems < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :quality, :integer
  end
end
