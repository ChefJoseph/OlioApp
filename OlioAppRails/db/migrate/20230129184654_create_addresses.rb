class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :full_name
      t.string :street_address
      t.string :apt_no
      t.string :city
      t.string :state
      t.string :zip_code
      t.integer :phone_number
      t.integer :addressable_id
      t.string :addressable_type
      t.string :addressable_scope

      t.timestamps
    end

    add_index :addresses, 
      [:addressable_id, 
      :addressable_type, 
      :addressable_scope], 
      name: 'addressable_index'
  end
end
