class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      signIn(@user)
      render :show
    else
      render json: ["Invalid username/password combo"], status: 401
    end

  end


  def destroy
    @user = current_user

    if @user
      signOut
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
