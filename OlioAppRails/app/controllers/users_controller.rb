class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: current_user, serializer: PurchaseHistorySerializer, include: ["purchases", "purchases.purchased_items", "purchases.purchased_items.product"]
  end

  # POST /users
  def create
    user= User.create!(user_params)

    session[:user_id]= user.id
    render json: user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   @user = User.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :account_type, :user, :shipping_address, :billing_address, :purchased_items, :payment_method, :purchase)
    end
end
