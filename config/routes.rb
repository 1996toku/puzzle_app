Rails.application.routes.draw do
  devise_for :users
  root to: "puzzle#index"
  resources :puzzle
end
