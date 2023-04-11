# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating the characters"

25.times do
  Character.create(
    actor: Faker::TvShows::TheITCrowd.actor,
    name: Faker::TvShows::TheITCrowd.character
  )
end

puts "retrieving the characters"

characters = Character.all

puts "creating the quotes"

100.times do
  Quote.create(
    email: Faker::TvShows::TheITCrowd.email,
    quote: Faker::TvShows::TheITCrowd.quote,
    character: characters.sample
  )
end

puts "all done!"
