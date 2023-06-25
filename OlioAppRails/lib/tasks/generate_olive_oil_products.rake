require 'faker'

namespace :products do
  desc 'Generate unique olive oil products'
  task generate_olive_oil_products: :environment do
    4.times do
      Product.create(
        name: Faker::Commerce.unique.product_name,
        region: 'Italy',
        location: 'Lazio',
        price: Faker::Commerce.price(range: 20.0..50.0),
        description: Faker::Lorem.sentence,
        organic: 'false',
        flavored: 'false',
        forcooking: 'false'
      ).tap do |product|
        product.image_url.attach(io: File.open('/Users/joe/Development/code/PROJECT/OlioApp/OlioAppRails/public/Olio-1.png'), filename: 'Olio-1.png', content_type: 'image/png')
      end
    end

    4.times do
        Product.create(
          name: Faker::Commerce.unique.product_name,
          region: 'Spain',
          location: 'Ribera',
          price: Faker::Commerce.price(range: 20.0..50.0),
          description: Faker::Lorem.sentence,
          organic: 'false',
          flavored: 'false',
          forcooking: 'false'
        ).tap do |product|
          product.image_url.attach(io: File.open('/Users/joe/Development/code/PROJECT/OlioApp/OlioAppRails/public/Olio-1.png'), filename: 'Olio-1.png', content_type: 'image/png')
        end
      end

      4.times do
        Product.create(
          name: Faker::Commerce.unique.product_name,
          region: 'Greece',
          location: 'Athens',
          price: Faker::Commerce.price(range: 20.0..50.0),
          description: Faker::Lorem.sentence,
          organic: 'false',
          flavored: 'false',
          forcooking: 'false'
        ).tap do |product|
          product.image_url.attach(io: File.open('/Users/joe/Development/code/PROJECT/OlioApp/OlioAppRails/public/Olio-1.png'), filename: 'Olio-1.png', content_type: 'image/png')
        end
      end

      4.times do
        Product.create(
          name: Faker::Commerce.unique.product_name,
          region: Faker::Address.country,
          location: 'Olive Town',
          price: Faker::Commerce.price(range: 20.0..50.0),
          description: Faker::Lorem.sentence,
          organic: 'true',
          flavored: 'false',
          forcooking: 'false'
        ).tap do |product|
          product.image_url.attach(io: File.open('/Users/joe/Development/code/PROJECT/OlioApp/OlioAppRails/public/Olio-1.png'), filename: 'Olio-1.png', content_type: 'image/png')
        end
      end

      4.times do
        Product.create(
          name: Faker::Commerce.unique.product_name,
          region: Faker::Address.country,
          location: 'Olive Town',
          price: Faker::Commerce.price(range: 20.0..50.0),
          description: Faker::Lorem.sentence,
          organic: Faker::Boolean.boolean,
          flavored: 'true',
          forcooking: Faker::Boolean.boolean
        ).tap do |product|
          product.image_url.attach(io: File.open('/Users/joe/Development/code/PROJECT/OlioApp/OlioAppRails/public/Olio-1.png'), filename: 'Olio-1.png', content_type: 'image/png')
        end
      end

    puts 'Olive oils created!'
  end
end
