class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find_by(id: params[:id])
        if @product
            render :show
        else
            render json: @product.errors.full_messages, status: 404
        end
    end

    private
    def product_params
        params.require(:product).permit(:id, :name, :color, :category, :price)
    end

end
