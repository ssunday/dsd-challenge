# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::CoursesController, type: :request do
  describe 'GET #index' do
    let!(:courses) { create_list(:course, 3, status: :published) }
    let(:path) { api_v1_courses_path }

    it 'returns 200' do
      get(path)
      expect(response.status).to eq(200)
    end

    it 'returns courses JSON' do
      get(path)
      expect(json_ids).to match_array(courses.map(&:id))
    end
  end
end
