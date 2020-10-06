class CreatePuzzles < ActiveRecord::Migration[6.0]
  def change
    create_table :puzzles do |t|
      t.references :user,               null: false, foreign_key: true
      t.string :number,                 null: false

      t.timestamps
    end
  end
end
