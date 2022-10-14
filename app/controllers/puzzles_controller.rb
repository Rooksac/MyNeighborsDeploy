class PuzzlesController < ApplicationController
    skip_before_action :authenticated_user, only: [:index, :show]
    before_action :find_puzzle, only: [:show, :create, :destroy]
    
    def index
        puzzles = Puzzle.all
        render json: puzzles
    end

    def show
        render json: @puzzle
    end

    def create
        puzzle = Puzzle.create(puzzle_params)
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
        parmas.permit(:user_id, :solution, :difficulty)
    end
end
