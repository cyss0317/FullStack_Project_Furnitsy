class RemoveIndexandAdd < ActiveRecord::Migration[5.2]
  def change
    remove_index :carts, :user_id
    remove_index :cart_items, :cart_id

    add_index :cart_items, :cart_id
    add_index :carts, :user_id
  end
end
