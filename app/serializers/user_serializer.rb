class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :email
  has_many :solveds
end
