class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :location, :tax, :shipping, :payment_method, :created_at, :shipping_address, :billing_address

  has_many :purchased_items
  has_one :shipping_address
  has_one :billing_address
end
