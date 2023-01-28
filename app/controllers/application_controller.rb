# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_login
  before_action :underscore_params!

  private

  # CRLLL
  def current_user
    return nil unless session[:session_token]

    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_login
    redirect_to root_url unless logged_in?
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def underscore_params!
    underscore_hash = lambda do |hash|
      hash.transform_keys!(&:underscore)
      hash.each do |_key, value|
        case value
        when ActionController::Parameters
          underscore_hash.call(value)
        when Array
          value.each do |item|
            next unless item.is_a?(ActionController::Parameters)

            underscore_hash.call(item)
          end
        end
      end
    end
    underscore_hash.call(params)
  end
end
