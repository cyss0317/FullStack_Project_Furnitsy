class Api::ProductsController < ApplicationController

    def show
        @product = Product.find_by(product_params)
        if @product
            render "api/products/show"
        else
            render json: @product.errors.full_messages, status: 404
        end
    end

    private
    def product_params
        params.require(:product).permit(:name, :color, :category, :price)
    end
    
end
