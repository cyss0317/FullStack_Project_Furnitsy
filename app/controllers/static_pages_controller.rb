# frozen_string_literal: true

class StaticPagesController < ApplicationController
  def root
    current_user
  end
end
