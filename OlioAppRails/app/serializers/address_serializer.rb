class AddressSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :street_address, :apt_no, :city, :state, :zip_code, :phone_number, :addressable_id, :addressable_type, :addressable_scope
end
