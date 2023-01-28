# frozen_string_literal: true

class RenameColumnCartItems < ActiveRecord::Migration[5.2]
  def change
    rename_column :cart_items, :quality, :quantity
  end
end
