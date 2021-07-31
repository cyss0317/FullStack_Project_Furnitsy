class Api::UsersController < ApplicationController

    def create
        @user = User.new
        if @user.save!
            login!(@user)
            render :show
            # render json: :show
        else
            render json: @user.errors.full_messages, status: 422
        end
            
    end

    private
    def user_params
        this.params.require(:user).permit(:username, :password)
    end

end
