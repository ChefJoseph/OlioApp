class Purchase < ApplicationRecord
    belongs_to :user
    has_many :purchased_items
    validates :tax, :shipping, presence: true
    # validates :location, :tax, :shipping, :payment_method, presence: true

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
