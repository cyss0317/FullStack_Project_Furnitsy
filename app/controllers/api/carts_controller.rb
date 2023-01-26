# frozen_string_literal: true

module Api
  class CartsController < ApplicationController
    before_action :require_login, only: [:show]

    def create
      @cart = Cart.new(cart_params)
      if @cart.save
        render :show
      else
        render json: @cart.errors.full_messages, status: 422
      end
    end

    def show
      @cart = Cart.find_by(user_id: current_user.id)
      return unless @cart

      render :show
      # else
      #     flash[:errors] = ["You need to login first"]
    end

    private

    def cart_params
      params.require(:cart).permit(:user_id)
    end
  end
end
