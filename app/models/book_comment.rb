class BookComment < ApplicationRecord
  belongs_to :user
  belongs_to :book
  
  validates :comment, length: { minimum: 2, maximum: 20 }, uniqueness: true
end
