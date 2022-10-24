class PuzzleSerializer < ActiveModel::Serializer
  attributes :id, :solution, :difficulty, :solve_rate, :creation_time
  belongs_to :user
  has_many :clues
end
