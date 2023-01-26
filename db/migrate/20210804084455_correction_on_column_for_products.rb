# frozen_string_literal: true

class CorrectionOnColumnForProducts < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :description, :text
  end
end
