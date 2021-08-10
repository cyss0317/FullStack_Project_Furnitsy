class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            @cart = Cart.create(user_id: @user.id)
            render "api/users/show"

        else
            render json: @user.errors.full_messages, status: 422
            # render json: ["cart is the props"]
        end
            
    end

    private
    def user_params
        params.require(:user).permit(:email, :first_name, :password)
    end

end
