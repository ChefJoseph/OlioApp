class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :location, :tax, :shipping, :payment_method, :created_at

  has_many :purchased_items
end
