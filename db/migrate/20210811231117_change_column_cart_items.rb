# frozen_string_literal: true

class ChangeColumnCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :quantity
    add_column :cart_items, :quantity, :integer
  end
end
