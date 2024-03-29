# frozen_string_literal: true

module Api
  class SessionsController < ApplicationController
    before_action :require_login, only: [:destroy]

    def create
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

      if @user
        login!(@user)
        render 'api/users/show'
      else
        render json: ['Invalid email or password'], status: 401
      end
    end

    def destroy
      @user = current_user
      return unless @user

      logout!
      render json: ['Successfully logged out']
    end
  end
end
