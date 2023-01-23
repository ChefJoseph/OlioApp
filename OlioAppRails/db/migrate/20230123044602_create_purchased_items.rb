class CreatePurchasedItems < ActiveRecord::Migration[7.0]
  def change
    create_table :purchased_items do |t|
      t.integer :purchased_id
      t.integer :product_id
      t.float :purchased_price
      t.integer :quantity

      t.timestamps
    end
  end
end
