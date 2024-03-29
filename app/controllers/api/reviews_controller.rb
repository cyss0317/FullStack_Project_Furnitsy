# frozen_string_literal: true

module Api
  class ReviewsController < ApplicationController
    before_action :require_login, only: %i[create destroy update]

    def show
      @review = Review.find_by(user_id: current_user.id)
      render :show
    end

    def create
      @review = Review.new(review_params)
      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: 422
      end
    end

    def index
      # if current_user
      #     @reviews = Review.all.select{|review| review.user_id == current_user.id}
      # else

      @reviews = Review.all
      # end

      # @reviews = Review.all
      render :index
    end

    def destroy
      @review = Review.find_by(user_id: current_user.id)
      if @review
        # Review.delete(@review)
        @review.destroy

      else
        render json: @review.errors.full_messages, status: 404
      end
    end

    def update
      # @review = Review.find_by(user_id: current_user.id)
      @review = Review.find_by(id: params[:id])
      if @review&.update(review_params)
        render :show
      else
        render json: @review.errors.full_messages, status: 400
      end
    end

    private

    def review_params
      params.require(:review).permit(:id, :user_id, :product_id, :comment, :rating, :helpful)
    end
  end
end
