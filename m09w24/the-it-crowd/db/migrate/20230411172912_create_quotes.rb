class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.string :email
      t.string :quote

      t.references :character, index: true, foreign_key: true

      t.timestamps
    end
  end
end
