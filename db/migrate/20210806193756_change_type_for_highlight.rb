# frozen_string_literal: true

class ChangeTypeForHighlight < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :highlights, :text
  end
end
