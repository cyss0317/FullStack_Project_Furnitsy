Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  get '/search/:words', to: 'products#show_search_result'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :products, only: [:show, :index]
    resource :session, only: [:create, :destroy]
    resources :cart_items, only: [:create, :index, :destroy, :update]
    resources :carts, only: [:create, :show]
    resources :reviews, only: [:create, :destroy, :update, :show, :index]
  end

end
