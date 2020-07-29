Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :courses, only: %i[index show]
      resources :users, only: %i[show update]
    end
  end

  root to: 'home#index'

  # catch all HTML route requests, send to frontend
  get '*path', to: 'home#index', constraints: ->(req) { req.format == :html || req.format == '*/*' }
end
