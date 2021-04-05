class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.integer :query_id
      t.string :vin_number
      t.string :model
      t.string :make
      t.string :year
      t.string :trim_level
      t.string :standard_seating
      t.string :highway_mileage
      t.string :city_mileage
      t.string :tank_size
      t.string :anti_brake_system
      t.string :transmission
      t.string :drive_type
      t.string :engine
      t.string :TitleIssuingAuthorityName
      t.string :VehicleOdometerReadingMeasure
      t.string :historyInformationlength
      t.integer :brandsRecordCount
      t.string :adjustedCleanRetail
      t.string :adjustedAverageTrade
      t.string :averageMileage
      t.string :maxMileageAdj

      t.timestamps
    end
  end
end
