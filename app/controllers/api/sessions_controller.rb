class Api::SessionsController < ApplicationController
    require
    def create
        @user = User.find_by_credential(params[:user][:username], params[:user][:password])

        if @user
            login!(@user)
            render "api/users"
        else
            render json: ["Invalid username or password"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render  "api/users"
        else
            render json: ["Successfully logged out"]
        end

    end
end
