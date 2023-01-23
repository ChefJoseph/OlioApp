Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/show'
  get 'sessions/destroy'
  resources :users, only:[:create, :show]
  resources :reviews, only:[:create, :show]
  resources :purchases, only:[:create]
  resources :purchased_items
  resources :products, except: [:destroy, :show]

  #To log in
  post "/login", to: "sessions#create" 
  #To stay logged in
  get '/me', to: 'sessions#show'
  #To Logout
  delete '/logout', to: 'sessions#destroy'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
