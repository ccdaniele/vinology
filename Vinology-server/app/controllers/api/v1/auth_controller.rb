class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: [:create, :new, :show]
  
    def create
      
      @user = User.find_by(username: user_login_params[:username])
     
      if @user && @user.authenticate(user_login_params[:password])
       
        token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
      else
        render json: { message: 'Invalid username or password' }, status: :unauthorized
      end
    end

    def show
      token = request.headers['Authorization'].split(' ')[1]
      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
        user_id = decoded_token[0]['user_id']
        user = User.find_by(id: user_id)
        render json: user
      rescue JWT::DecodeError
        render json:{ error: 'Invalid token' }
      end
    end
  
    private
  
    def user_login_params
      params.require(:user).permit(:username, :password)
    end
  end 

