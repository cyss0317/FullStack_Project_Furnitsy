
class Api::CartItemsController < ApplicationController

    before_action :require_login
    def create
        

        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render :show
        else
           render json: @cart_item.errors.full_messages, status: 422
        end
    end

    # def index
    #     @cart_items = CartItem.all.select{|item| current_user.cart.id == item.cart_id }
    #     render :index
    # end

    def destroy
        @cart_item = CartItem.find_by(id: params[:cart_item.id])
        if @cart_item.delete
            render :show
        else
            render json: @cart_item.errors.full_messages
        end
    end

    private
    def cart_item_params
        params.require(:cart_item).permit(:cart_id, :product_id)
    end

end
