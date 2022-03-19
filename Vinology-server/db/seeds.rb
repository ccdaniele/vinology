# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
  
  User.create(email:'first@gmail.com', username:'first', password_digest:'1234567')
  Query.create(name:'first', user_id:'1')
  Car.create(vin_number:'868346892346928463877', query_id:'1' )