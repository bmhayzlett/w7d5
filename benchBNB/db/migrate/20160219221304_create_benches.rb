class CreateBenches < ActiveRecord::Migration
  def change
    create_table :benches do |t|
      t.float :lat, null: false
      t.float :lon, null: false
      t.string :description, null: false

      t.timestamps null: false
    end
  end
end
