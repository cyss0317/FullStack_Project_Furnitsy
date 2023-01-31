# frozen_string_literal: true

module Api
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)
      if @user.save
        login!(@user)
        # @cart = Cart.create({user_id: @user.id})
        @cart = Cart.new(user_id: @user.id)
        @cart.save
        render 'api/users/show'

      else
        render json: @user.errors.full_messages, status: 422
        # render json: ["cart is the props"]
      end
    end

    def show
      @user = current_user
    end

    private

    def user_params
      # checks through this :user key

      params.require(:user).permit(:email, :first_name, :password)
    end
  end
end
