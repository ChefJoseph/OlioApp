class PurchasedItemSerializer < ActiveModel::Serializer
  attributes :id, :purchased_id, :product_id, :purchased_price, :quantity, :"—no-test-framework"
end
