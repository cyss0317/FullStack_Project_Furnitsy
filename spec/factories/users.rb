# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { 'abcdefg123' }
    first_name { Faker::Name.first_name }
  end

  trait(:with_cart) do
    after(:create) do |user|
      
    end
  end
end
