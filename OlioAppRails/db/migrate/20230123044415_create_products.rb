class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :region
      t.string :location
      t.string :name
      t.string :image_url
      t.text :description
      t.float :price
      t.boolean :organic
      t.boolean :flavored
      t.boolean :forcooking
      t.boolean :active

      t.timestamps
    end
  end
end
