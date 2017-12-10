Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create,:destroy]
    resources :users, only: [:create]
    resources :searches, only: [:index]
    resources :roles, only: [:index, :create, :update]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
