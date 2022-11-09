Rails.application.routes.draw do
  namespace :api do
    post "/login", to: "users#login"
    delete "/logout", to: "users#logout"
    get "/me",  to: "users#me"
    get "/puzzlehistory", to: "puzzles#puzzlehistory"
    get "/puzzlefeed", to: "puzzles#puzzlefeed"
  
    resources :users, only: [:update, :delete, :create, :show]
    resources :puzzles, only: [:index, :show, :destroy, :create]
    resources :clues, only: [:create]
    resources :attempted_puzzles, only: [:create]
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
