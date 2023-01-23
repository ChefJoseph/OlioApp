class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :location, :tax, :shipping, :payment_method
end
