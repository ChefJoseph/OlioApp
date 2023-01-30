class AddShippingAddressIdToPurchase < ActiveRecord::Migration[7.0]
  def change
    add_column :purchases, :shipping_address_id, :integer
  end
end
