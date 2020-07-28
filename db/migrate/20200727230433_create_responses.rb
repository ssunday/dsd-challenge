class CreateResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :responses do |t|
      t.references :course, :user, index: false
      t.datetime :completed_at
      t.timestamps
    end

    add_index :responses, [:course_id, :user_id, :completed_at]
  end
end
