class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorized

    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :validation_error_response


     #asks the question is user logged in
     def logged_in_user
      headers = request.headers['Authorization']
      if(headers)
          token = headers.split(' ')[1]
          cur_id = JWT.decode(token, secret_key, true, algorithm: 'HS256')
          @current_user = User.find_by(id: cur_id[0]["user_id"])
          @current_user
      end 
  end 

   #throws error if not logged in
   def authorized 
    puts "checking... #{logged_in_user}"
    # !! converts a value to boolean
    render json: { message: 'Please log in' }, status: :unauthorized unless !!logged_in_user
end 

    def secret_key
      Rails.application.credentials.secret_key
    end

  private
 

  def not_found_response(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
  end

  def validation_error_response(exception)
    render json: {error: exception.record.errors.full_messages}, status: :unprocessable_entity
  end
end
