class CreatePuzzles < ActiveRecord::Migration[7.0]
  def change
    create_table :puzzles do |t|
      t.integer :user_id
      t.string :solution
      t.integer :difficulty

      t.timestamps
    end
  end
end
