class Api::V1::BaseController < ApplicationController

  respond_to :json

  rescue_from ActiveRecord::RecordNotFound do |exception|
    render json: { errors: [exception.message] }, status: :not_found
  end
end
