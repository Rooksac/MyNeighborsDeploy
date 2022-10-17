class PuzzleSerializer < ActiveModel::Serializer
  attributes :id, :solution, :difficulty
  belongs_to :user
  has_many :clues
end
