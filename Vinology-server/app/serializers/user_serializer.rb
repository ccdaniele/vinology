class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password
  has_many :queries
  has_many :cars, through: :queries
end
