class Course < ApplicationRecord
  has_many :steps, dependent: :destroy

  enum status: {
    draft: 0,
    published: 1,
    archived: 2
  }
end
