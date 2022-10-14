class CluesController < ApplicationController
    def create
        clue = Clue.create!(clue_params)
    end

    private
    def clue_params
        parmas.permit(:puzzle_id, :text)
    end
end
