# frozen_string_literal: true

class AddHightlightColumnToProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :highlights, :string
  end
end
