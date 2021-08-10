class Api::CartItemsController < ApplicationController

    before_action :require_login
    def create

    end

    def index

    end

    def destroy
    end

    private
    def cart_item_params
        params.require(:cartItem).permits(:cart_id, :product_id)
    end

end
