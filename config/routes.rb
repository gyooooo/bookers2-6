Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'homes#top'
  devise_for :users
  resources :users
  get 'users' => 'users#index'
  
  resources :books
  post "/books" => "books#create", as: "create"
  get "home/about"=>"homes#about", as: "about"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end