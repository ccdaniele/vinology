class User < ApplicationRecord
    has_secure_password
    has_many :queries
    has_many :cars, through: :queries
    validates :username, uniqueness: { case_sensitive: false }
end
