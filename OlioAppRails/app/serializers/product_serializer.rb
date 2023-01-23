class ProductSerializer < ActiveModel::Serializer
  attributes :id, :region, :location, :name, :image_url, :description, :price, :organic, :flavored, :forcooking, :active
end
