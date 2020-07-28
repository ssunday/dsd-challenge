class Response < ApplicationRecord
  belongs_to :course
  belongs_to :user

  delegate :steps, to: :course
end
