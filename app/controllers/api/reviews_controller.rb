class Api::ReviewsController < ApplicationController
    before_action :require_login

    def show
        @review = Review.find_by(user_id: currentUser.id)
    end

    def create
        @review =  Review.new(review_params)
        if @review.save
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index 
        @reviews = Review.all.select(product_id: params[:product_id])
        if @reviews
            redner :index
        else
            render json: @reviews.errors.full_messages, status: 422
        end

    end 

    def delete
        @review = Review.find_by(user_id: current_user.id)
        if @review
            @reveiw.delete
        else
            render json: @review.errors.full_messages, status: 404
        end
    end

    def update
        # @review = Review.find_by(user_id: current_user.id)
        @review = current_user.reviews.find_by(id: params[:id])
        if @review && @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:user_id, :product_id, :comment, :rating, :helpful)
    end

end
