require 'rails_helper'

# describe 'CartItem' do
#   describe 'relationships' do
#     it { should belong_to(:cart) }
#     it { should belong_to(:product) }
#   end
# end

RSpec.describe CartItem, type: :model do
  it { should belong_to(:cart) }
  it { should belong_to(:product) }
  # it { should belong_to(:round).optional }
  # it { should belong_to(:company).optional }
  # it { should have_many(:approvals) }
end