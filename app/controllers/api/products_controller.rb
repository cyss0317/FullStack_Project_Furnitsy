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

    def show_search_result
        @res = []
        byebug
        params[:words].each do |word|
            result.concat(Product.find_by_sql["SELECT * FROM products WHERE name LIKE ? "])
        end
        render :show_search_result
    end

    def filtered
        # @products = Product.where()
        @products = Product.all
    end
    private
    def product_params
        params.require(:product).permit(:id, :name, :color, :category, :price, images: [])
    end

end
