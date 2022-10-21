class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :email, :solve_rate
  has_many :puzzles
  has_many :solveds
end
