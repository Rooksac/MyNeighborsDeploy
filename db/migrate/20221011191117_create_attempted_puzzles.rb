class CreateAttemptedPuzzles < ActiveRecord::Migration[7.0]
  def change
    create_table :attempted_puzzles do |t|
      t.integer :user_id
      t.integer :puzzle_id
      t.boolean :solved?

      t.timestamps
    end
  end
end
