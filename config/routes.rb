Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
  root to: 'homes#top'
  get "home/about"=>"homes#about", as: "about"
  resources :books, only: [:new, :create, :index, :show, :destroy] do
  resource :favorites, only: [:create, :destroy]
  
  resources :book_comments, only: [:create, :destroy]
end
  resources :users, only: [:show, :edit, :update]
  
  get 'users' => 'users#index'
  
  resources :books
  post "/books" => "books#create", as: "create"
  
  resources :users do
    resources :relationships, only: [:create, :destroy]
    # member do
    get 'followings' => 'relationships#followings', as: 'followings'
    get 'followers' => 'relationships#followers', as: 'followers'
    # get :following, :followers
    # end
  end
  # resources :book_comments, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end