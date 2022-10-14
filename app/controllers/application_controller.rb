class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticated_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :validation_error_response


  private
  def authenticated_user 
    render json: {error: "Please login"}, status: :unauthorized unless current_user
  end 


  def is_authorized?
    permitted = current_user.id == @event.host.id
      render json: {errors: "Not authorized"}, status: :forbidden unless permitted
  end 

  def current_user 
    @current_user ||= User.find_by_id(session[:user_id])
  end 

  def not_found_response(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
  end

  def validation_error_response(exception)
    render json: {error: exception.record.errors.full_messages}, status: :unprocessable_entity
  end
end
