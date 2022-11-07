Rails.application.routes.draw do
  post "/login", to: "users#login"
  delete "/logout", to: "users#logout"
  get "/me",  to: "users#me"
  get "/puzzlehistory", to: "puzzles#puzzlehistory"
  
  resources :users, only: [:update, :delete, :create, :show]
  resources :puzzles, only: [:index, :show, :destroy, :create]
  resources :clues, only: [:create]
  resources :attempted_puzzles, only: [:create]
end
