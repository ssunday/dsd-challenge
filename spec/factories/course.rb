# frozen_string_literal: true

FactoryBot.define do
  factory :course do
    name { Faker::Food.unique.ingredient }
  end
end
