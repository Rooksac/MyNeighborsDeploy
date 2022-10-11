class CreateClues < ActiveRecord::Migration[7.0]
  def change
    create_table :clues do |t|
      t.integer :puzzle_id
      t.string :text

      t.timestamps
    end
  end
end
