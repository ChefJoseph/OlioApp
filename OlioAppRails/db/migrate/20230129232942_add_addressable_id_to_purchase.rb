class AddAddressableIdToPurchase < ActiveRecord::Migration[7.0]
  def change
    add_column :purchases, :addressable_id, :integer
    add_column :purchases, :addressable_type, :string
  end
end
