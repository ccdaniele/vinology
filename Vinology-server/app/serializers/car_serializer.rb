class CarSerializer < ActiveModel::Serializer
  attributes :id, :query_id,:vin_number, :model, :make, :year, :highway_mileage, :transmission, :city_mileage, :trim_level, :anti_brake_system, :drive_type, :engine, :standard_seating, :TitleIssuingAuthorityName,
   :VehicleOdometerReadingMeasure, :historyInformationlength, :brandsRecordCount, :adjustedCleanRetail, :adjustedAverageTrade, :averageMileage, :maxMileageAdj
  belongs_to :query
end
