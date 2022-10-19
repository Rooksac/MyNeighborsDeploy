class Puzzle < ApplicationRecord
    belongs_to :user
    has_many :clues
    has_many :attempted_puzzles
    has_many :puzzle_solvers, foreign_key: :puzzle_id, class_name: "AttemptedPuzzle"
    has_many :solvers, through: :puzzle_solvers, source: :user

    def solve_rate
        "#{self.puzzle_solvers.where(solved?:true).count} / #{self.puzzle_solvers.count}"
    end
end
