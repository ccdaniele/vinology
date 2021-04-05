class QuerySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  has_many :cars
  belongs_to :user
end
