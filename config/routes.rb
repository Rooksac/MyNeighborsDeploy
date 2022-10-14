Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me",  to: "users#show"
  
  resources :users, only: [:update, :delete, :create, :show]
  resources :puzzles, only: [:index, :show, :destroy, :create]
  resources :clues, only: [:create]
  resources :attempted_puzzles, only: [:create]
end
