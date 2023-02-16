require 'spec_helper'

describe 'CartItem' do
  describe 'relationships' do
    it { is_expected belong_to(:cart) }
    it { is_expected belong_to(:product) }
  end
end