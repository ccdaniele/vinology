class Api::V1::QueriesController < ApplicationController

    def create
      query = Query.create(user_id: query_params[:user_id], name: query_params[:name])
      
      render json: query, status: :accepted
      
      
    end

    def index
      queries = Query.all
  
      render json: queries
    end


  def update
    
      query = Query.find_by(id: params[:id])
      
      query.update(name: query_params[:name])

      render json: query, status: :accepted
  end

  def destroy

    query = Query.find_by(id: params[:id])
    
    query.delete

    

  end

  private

  def query_params
    params.require(:query).permit(:user_id, :name)
  end

end

