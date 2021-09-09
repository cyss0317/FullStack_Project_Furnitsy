
class Api::CartItemsController < ApplicationController

    before_action :require_login, only: [:destroy]
    def create

        @cart_item = CartItem.new(cart_item_params)
        @cart_item.cart_id = current_user.cart.id
        # grab the cart id from cuyrrent user
        if @cart_item.save
            render :show
        else
           flash[:errors] = ["You need to login first"]
        end
    end

    def index
        if !current_user
            @cart_items = {}
        else    
            @cart_items = CartItem.all.select {|cart_item| cart_item.cart_id == current_user.cart.id}
        end

        if @cart_items
            @cart_items
            render :index
        elsif !current_user
            redirect_to api_session_url
        end
    end

    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.delete
            render :show
        else
            render json: @cart_item.errors.full_messages
        end
    end

    private
    def cart_item_params
        params.require(:cart_item).permit(:id, :cart_id, :product_id, :quantity)
    end

end
