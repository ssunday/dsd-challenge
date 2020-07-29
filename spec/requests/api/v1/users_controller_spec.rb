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

    it 'returns users JSON with email if user' do
      get(path, params: { is_user: true })

      expect(json).to eq(user.as_json(only: %i[id first_name last_name email]))
    end

    it 'returns users JSON without email if not user' do
      get(path, params: { is_user: false })

      expect(json).to eq(user.as_json(only: %i[id first_name last_name]))
    end
  end

  describe 'PUT #update' do
    let!(:user) { create(:user) }
    let(:path) { api_v1_user_path(user.id) }

    it 'returns 204' do
      put(path, params: { user: { first_name: 'Foo' } })

      expect(response.status).to eq(204)
    end

    it 'updates user' do
      put(path, params: { user: { first_name: 'Foo' } })
      expect(user.reload.first_name).to eq('Foo')
    end
  end
end
