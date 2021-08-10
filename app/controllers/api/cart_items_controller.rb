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
        @cart_items = CartItem.all
        render :index
    end

    def destroy
        @cart_item = Cart.find_by(cart_id: current_user.id)
    end

    private
    def cart_item_params
        params.require(:cartItem).permits(:cart_id, :product_id)
    end

end
