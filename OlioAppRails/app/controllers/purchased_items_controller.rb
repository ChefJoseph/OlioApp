class PurchasedItemsController < ApplicationController
  before_action :set_purchased_item, only: %i[ show update destroy ]

  # GET /purchased_items
  def index
    @purchased_items = PurchasedItem.all

    render json: @purchased_items
  end

  # GET /purchased_items/1
  def show
    render json: @purchased_item
  end

  # POST /purchased_items
  def create
    @purchased_item = PurchasedItem.new(purchased_item_params)

    if @purchased_item.save
      render json: @purchased_item, status: :created, location: @purchased_item
    else
      render json: @purchased_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /purchased_items/1
  def update
    if @purchased_item.update(purchased_item_params)
      render json: @purchased_item
    else
      render json: @purchased_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /purchased_items/1
  def destroy
    @purchased_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_purchased_item
      @purchased_item = PurchasedItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def purchased_item_params
      params.require(:purchased_item).permit(:purchased_id, :product_id, :purchased_price, :quantity, :—no-test-framework)
    end
end
