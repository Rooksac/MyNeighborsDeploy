class Api::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :login, :logout]
    before_action :find_user, only: [:update, :show, :destroy]


    def login #for /login
        #find by username from body
        @user = User.find_by(name: params[:name])
        #check if user exists and password matches password digest
        if (@user && @user.authenticate(params[:password]))
            #create token for front end
            token = JWT.encode({user_id: @user.id}, secret_key, 'HS256')
            #pass user instance and token to front end
            render json: {user: UserSerializer.new(@user), token: token}
            
        end 
    end

    def logout 
        @current_user = nil
        head :no_content
    end 

    def update
        @user.update!(user_params)
        render json: @user
    end

    
    def show
        render json: @user
    end

    def destroy
        @event.destroy!
        head :no_content
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def me
        render json: {user: @current_user}, status: :ok
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:name, :password, :image, :email)
    end
end
