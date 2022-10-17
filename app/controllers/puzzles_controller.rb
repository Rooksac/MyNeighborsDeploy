class PuzzlesController < ApplicationController
    skip_before_action :authenticated_user, only: [:index, :show]
    before_action :find_puzzle, only: [:show, :destroy]
    
    def index
        puzzles = Puzzle.all
        render json: puzzles
    end

    def show
        render json: @puzzle
    end

    def create
        puzzle = Puzzle.create!(user_id: current_user.id, difficulty: params[:difficulty], solution: params[:solution])
        for clue in params[:clues] do
            Clue.create!(text: clue, puzzle: puzzle)
        end
        render json: puzzle
    end

    def destroy
        @puzzle.destroy!
        head :no_content
    end

    private
    
    def find_puzzle
        @puzzle = Puzzle.find(params[:id])
    end

    def puzzle_params
        params.permit(:user_id, :solution, :difficulty, :clues)
    end
end
