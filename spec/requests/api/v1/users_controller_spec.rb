# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :request do
  describe 'GET #show' do
    let!(:user) { create(:user) }
    let(:path) { api_v1_user_path(user.id) }

    it 'returns 200' do
      get(path)
      expect(response.status).to eq(200)
    end

    it 'returns users JSON' do
      get(path)

      expect(json).to eq(user.as_json(only: [:id, :first_name, :last_name]))
    end
  end
end
