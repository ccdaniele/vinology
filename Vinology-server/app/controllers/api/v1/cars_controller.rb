class Api::V1::CarsController < ApplicationController
    def create
        
        car = Car.create(
            query_id: car_params[:query_id], 
            vin_number: car_params[:vin_number], 
            year: car_params[:year], 
            city_mileage: car_params[:city_mileage],
            model: car_params[:model], 
            make: car_params[:make], 
            highway_mileage: car_params[:highway_mileage],
            transmission: car_params[:transmission], 
            city_mileage: car_params[:city_mileage], 
            trim_level: car_params[:trim_level], 
            anti_brake_system: car_params[:anti_brake_system],
            drive_type: car_params[:drive_type], 
            engine: car_params[:engine], 
            standard_seating: car_params[:standard_seating], TitleIssuingAuthorityName: car_params[:TitleIssuingAuthorityName], 
            VehicleOdometerReadingMeasure: car_params[:VehicleOdometerReadingMeasure], historyInformationlength: car_params[:historyInformationlength],
            brandsRecordCount: car_params[:brandsRecordCount], adjustedCleanRetail: car_params[:adjustedCleanRetail], 
            adjustedAverageTrade: car_params[:adjustedAverageTrade], averageMileage: car_params[:averageMileage],
            averageMileage: car_params[:maxMileageAdj]
    
        )
            
        render json: car, status: :accepted
        
      end

      def index
        cars = Car.all
    
        render json: cars
      end

      def show
       
          car = Car.find_by(id: params[:id])
          render json: car
      end

      def destroy
        
        car = Car.find_by(id: params[:id])
       
        car.destroy
      end

      
    
      private
    
    def car_params
      params.require(:car).permit(:id, :query_id,:vin_number, :model, :make, :year, :highway_mileage, :transmission, :city_mileage, :trim_level, 
        :anti_brake_system, :drive_type, :engine, :standard_seating)
    end


end
