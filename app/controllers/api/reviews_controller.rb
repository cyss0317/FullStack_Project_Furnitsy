class Api::ReviewsController < ApplicationController
    before_action :require_login

    def show
        @review = Review.find_by()
    end

    def create
        @review =  Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def delete

    end

    def update

    end

    private
    def review_params
        params.require(:review).permit(:user_id, :product_id, :comment, :rating, :helpful)
    end

end
