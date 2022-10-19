class AttemptedPuzzlesController < ApplicationController
    skip_before_action :authenticated_user, only: [:create]
    def create
        attempted_puzzle = AttemptedPuzzle.create!(user_id: current_user.id, puzzle_id: params[:puzzle_id], solved?:params[:solved?])
        render json: attempted_puzzle
    end

    private 
    
    def attempted_puzzle_params
        params.permit(:user_id, :puzzle_id, :solved?)
    end
end
