# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show]
    resources :products, only: %i[show index]
    resource :session, only: %i[create destroy]
    resources :cart_items, only: %i[create index destroy update]
    resources :carts, only: %i[create show]
    resources :reviews, only: %i[create destroy update show index]
  end
end
