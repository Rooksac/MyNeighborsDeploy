class User < ApplicationRecord
    has_many :recieved_follows, foreign_key: :followed_id, class_name: "Follow"
    has_many :followers, through: :recieved_follows, source: :follower
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
    has_many :followings, through: :given_follows, source: :followed
    has_many :puzzles_solved, foreign_key: :user_id, class_name: "AttemptedPuzzle"
    has_many :solved, through: :puzzles_solved, source: :puzzle
end
