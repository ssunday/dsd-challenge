class CreateResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :responses do |t|
      t.references :course, :user
      t.integer :status, default: 0
      t.datetime :completed_at
      t.timestamps
    end
  end
end
