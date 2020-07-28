class User < ApplicationRecord
  has_many :responses
  has_many :courses, through: :responses
end
