class UsersController < ApplicationController
    skip_before_action :authenticated_user, only: [:create]
    before_action :find_user, only: [:update, :show, :destroy]

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
        render json: current_user, status: :ok
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:name, :password, :image, :email)
    end
end
