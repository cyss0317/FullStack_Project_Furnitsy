# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { 'abcdefg123' }
    first_name { Faker::Name.first_name }
  end
end
