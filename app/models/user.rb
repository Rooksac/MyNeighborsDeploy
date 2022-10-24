class User < ApplicationRecord
    has_secure_password
    has_many :recieved_follows, foreign_key: :followed_id, class_name: "Follow"
    has_many :followers, through: :recieved_follows, source: :follower
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
    has_many :followings, through: :given_follows, source: :followed
    has_many :puzzles
    has_many :puzzles_solveds, foreign_key: :user_id, class_name: "AttemptedPuzzle"
    has_many :solveds, through: :puzzles_solveds, source: :puzzle

    validates :name, presence: true, uniqueness: true, allow_nil: true
    validates :password, presence: true, allow_nil: true

    def solve_rate
        "#{self.puzzles_solveds.where(solved?:true).count} / #{self.puzzles_solveds.count}"
    end
end
