class User < ApplicationRecord
    has_many :purchases
    has_many :reviews
    has_many :products, through: :reviews
    has_secure_password
    validates :first_name, :last_name, :email, :password, :password_confirmation, :account_type, presence: true
    validates :email, uniqueness: true
    validates :email, email: true
    validates :password, length: { in: 6..20 }

    has_one :shipping_address, 
        -> { where(addressable_scope: :shipping_address) }, 
        as: :addressable, 
        class_name: 'Address', 
        dependent: :destroy 
    accepts_nested_attributes_for :shipping_address, allow_destroy: true

    has_one :billing_address, 
        -> { where(addressable_scope: :billing_address) }, 
        as: :addressable, 
        class_name: 'Address', 
        dependent: :destroy 
    accepts_nested_attributes_for :billing_address, allow_destroy: true 
end
