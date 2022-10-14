class AttemptedPuzzlesController < ApplicationController
    def create
        attempted_puzzle = AttemptedPuzzle.create!(attempted_puzzle_params)
    end

    private 
    
    def attempted_puzzle_params
        params.permit(:user_id, :puzzle_id, :solved?)
    end
end
