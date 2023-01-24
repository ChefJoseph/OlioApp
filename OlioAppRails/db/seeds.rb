# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Now seeding Users"

user1 = User.create(first_name: "Joseph", last_name: "Hirotsu", email: "joe@gmail.com", password: "joejoe", password_confirmation: "joejoe", account_type: "user")

user2 = User.create(first_name: "Jane", last_name: "Kim", email: "jane@gmail.com", password: "joejoe", password_confirmation: "joejoe", account_type: "admin")
puts "Users seeded"

puts "Now seeding Products"
# product1 = Product.create(name: "Olio Verde", region: "Italy", location: "Sicily", price: "29.99", description: "Spicy and bright green!", image_url: "../public/olioVerde.png", organic: "false", flavored: "false", forcooking: "false" )

# product2 = Product.create(name: "Sicilia Monti Iblei DOP Primo", region: "Italy", location: "Sicily", price: "29.99", description: "Fruit and bitter notes. Intense spiciness and green tomatoes.", image_url: "public/primodop.png", organic: "false", flavored: "false", forcooking: "false" )

# product3 = Product.create(name: "Toscano Franci", region: "Italy", location: "Tuscany", price: "29.99", description: "Grassy, herbaceous and with a black pepper finish!", image_url: "../public/toscanofranci.png", organic: "false", flavored: "false", forcooking: "false" )
puts "Products seeded"
