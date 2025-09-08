FactoryBot.define do
  factory :cart do
    user
    user_id { user.id }
  end
end