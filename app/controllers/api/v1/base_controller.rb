module Api
  module V1
    class BaseController < ApplicationController
      skip_before_action :verify_authenticity_token

      respond_to :json

      rescue_from ActiveRecord::RecordNotFound do |exception|
        render json: { errors: [exception.message] }, status: :not_found
      end
    end
  end
end
