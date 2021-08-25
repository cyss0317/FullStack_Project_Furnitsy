# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
Product.delete_all
User.delete_all
Cart.delete_all
CartItem.delete_all

User.create({email: "demo_user", password: "password", first_name:"DEMO_USER"})

require_relative './seeds/01_couches.rb'
require_relative './seeds/02_tables.rb'
require_relative './seeds/03_beds.rb'
require_relative './seeds/04_chairs.rb'


# category: "Couch and Sofa"
# category: "Console Table"
# category: "Outdoor Dining Sets"
# category: "Dining Table"
# category: "Coffee Table"
# category: "Kids Bunk Bed"
# category: "Accent Chairs"
# category: "Dining Chairs"
# category: "Outdoor"