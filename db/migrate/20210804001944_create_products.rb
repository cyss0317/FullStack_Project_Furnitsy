# frozen_string_literal: true

class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :category, null: false
      t.string :measurement
      t.string :color, null: false
      t.float :price, null: false

      t.timestamps
    end
    add_index :products, :name
    add_index :products, :category
    add_index :products, :color
    add_index :products, :price
  end
end
