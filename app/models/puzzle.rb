class Puzzle < ApplicationRecord
    belongs_to :user
    has_many :clues, dependent: :destroy
    has_many :attempted_puzzles
    has_many :puzzle_solvers, foreign_key: :puzzle_id, class_name: "AttemptedPuzzle"
    has_many :solvers, through: :puzzle_solvers, source: :user

    def solve_rate
        "#{self.puzzle_solvers.where(solved?:true).count} / #{self.puzzle_solvers.count}"
    end

    def creation_time
        self.created_at.strftime('%a %b %d %Y')
      end

    def self.puzzle_feed(user)
        Puzzle.where.not(user_id: user.id)
    end
end
