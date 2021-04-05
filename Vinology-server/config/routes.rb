Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, :cars, :queries
      get '/queries', to: 'queries#index'
      get '/cars', to: 'cars#index'
      get '/cars', to: 'cars#show'
      get '/users', to: 'users#index'
      post '/queries', to: 'queries#create'
      post '/cars', to: 'cars#create'
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      get '/current_user', to: 'auth#show'
      patch '/queries', to: 'queries#update'

      
    end
  end
end
