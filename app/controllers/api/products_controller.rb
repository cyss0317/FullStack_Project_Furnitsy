# frozen_string_literal: true

module Api
  class ProductsController < ApplicationController
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
      params[:words].each do |_word|
        result.concat(Product.find_by_sql['SELECT * FROM products WHERE name LIKE ? '])
      end
    end

    private

    def product_params
      params.require(:product).permit(:id, :name, :color, :category, :price, images: [])
    end
  end
end
