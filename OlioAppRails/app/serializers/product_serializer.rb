class ProductSerializer < ActiveModel::Serializer
  attributes :id, :region, :location, :name, :image_url, :description, :price, :organic, :flavored, :forcooking, :active

  def image_url
    if object.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.image, host: "local")
    end
end

end
