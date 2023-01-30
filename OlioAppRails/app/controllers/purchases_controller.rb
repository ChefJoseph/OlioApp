class PurchasesController < ApplicationController
    def create
        purchase= Purchase.create!(purchase_params)
        purchased_items = params[:purchased_items]
        # purchased_items.each do |item| 
        #     PurchasedItem.create!(purchased_id: purchase.id, product_id: item[:id], purchased_price: item[:price], quantity: item[:quantity])
        # end
        render json: current_user, status: 201
    end

    private 

    def purchase_params
        params.require(:purchase).permit(:user_id, :tax, :shipping, :shipping_address, :billing_address, :purchased_items, :addressable)
        # params.permit(:user_id, :location, :tax, :shipping, :payment_method)

        
    end
end
