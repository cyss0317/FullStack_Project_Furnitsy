class Api::CartsController < ApplicationController

    before_action :require_login

    def create
        @cart = Cart.new(user_id)
        if @cart.save
            render :show
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end

    # # render the view
    # def edit
    #     render :edit
    # end
    # #interacting with model
    # def update
    #     @cart = Cart.find_by(user_id: current_user.id)
    #     if @cart
    # end


    private
    def cart_params 
        params.require(:cart).permits(:user_id)
    end

end
