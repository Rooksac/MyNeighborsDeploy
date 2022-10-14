class PuzzleSerializer < ActiveModel::Serializer
  attributes :id, :solution, :difficulty
  has_many :clues
end
