# frozen_string_literal: true
require 'rails_helper'

describe Cart do
  it 'should create a cart when user gets created' do
    cart = create(:cart)
    pry

    expect(cart.user_id).eq(cart.user.id)
  end
end
