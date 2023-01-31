# frozen_string_literal: true

# rubocop:disable Metrics/AbcSize
module Api
  class CartItemsController < ApplicationController
    before_action :require_login, only: [:destroy]

    def create
      @cart_item = current_user.cart.cart_items.find_by(product_id: cart_item_params[:product_id])
      if @cart_item
        @cart_item.update!(quantity: @cart_item.quantity + cart_item_params[:quantity].to_i)
        render :show
        return
      end

      @cart_item = CartItem.new(cart_item_params)
      @cart_item.cart_id = current_user.cart.id
      if @cart_item.save
        render :show
      else
        flash[:errors] = ['You need to login first']
      end
    end

    def index
      @cart_items = if !current_user
                      {}
                    else
                      CartItem.all.select { |cart_item| cart_item.cart_id == current_user.cart.id }
                    end

      if @cart_items
        # @cart_items
        render :index
      elsif !current_user
        redirect_to api_session_url
      end
    end

    def update
      @cart_item = CartItem.find_by(id: params[:id])
      if @cart_item&.update(cart_item_params)
        render :show
      else
        render json: @cart_item.errors.full_messages, status: 400
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
end
# rubocop:enable Metrics/AbcSize
