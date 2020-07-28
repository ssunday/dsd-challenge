# frozen_string_literal: true

FactoryBot.define do
  factory :step do
    course
    content { Faker::Hipster.sentence }
  end
end
