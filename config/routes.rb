Rails.application.routes.draw do
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
    resource :relationships, only: [:create, :destroy]
    # 単数形にするとIDが消える
    get 'followings' => 'relationships#followings', as: 'followings'
    get 'followers' => 'relationships#followers', as: 'followers'

  end
  get '/search', to: 'searches#search'
  get "search" => "searches#search"
end

# devise_for :users

#   root :to =>"homes#top"
#   get "home/about"=>"homes#about"

#   resources :books, only: [:index,:show,:edit,:create,:destroy,:update]
#   resources :users, only: [:index,:show,:edit,:update] do
#     resource :relationships, only: [:create, :destroy]
#   	get 'followings' => 'relationships#followings', as: 'followings'
#   	get 'followers' => 'relationships#followers', as: 'followers'
#   end
#   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
#   get '/search', to: 'searches#search'
# end