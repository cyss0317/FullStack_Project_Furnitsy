class Api::CartItemsController < ApplicationController

    before_action :require_login
    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render :index
        else
           render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def index
        @cart_items = CartItem.all.select{|item| current_user.cart.id == item.cart_id }
        render :index
    end

    def destroy
        @cart_item = CartItem.find_by(id: cart_item_id)
        if @cart_item.delete
            render :index
        else
            render json: @cart_item.errors.full_messages
        end
    end

    private
    def cart_item_params
        params.require(:cartItem).permits(:cart_id, :product_id)
    end

end
