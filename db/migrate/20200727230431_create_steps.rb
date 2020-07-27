class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.string :name
      t.references :course
      t.integer :order
      t.text :content
      t.timestamps
    end
  end
end
