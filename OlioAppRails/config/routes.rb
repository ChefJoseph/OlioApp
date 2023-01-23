Rails.application.routes.draw do
  resources :users, only:[:create, :show]
  resources :reviews, only:[:create, :show]
  resources :purchases, only:[:create]
  resources :purchased_items
  resources :products, except: [:destroy, :show]

end
