class ProductsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
    render json: @product
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    render json: product, status: 201
  end

  # PATCH/PUT /products/1
  def update
    product= find_product
    product.update!(product_params)
    render json: product, status: 202
  end

  # # DELETE /products/1
  # def destroy
  #   @product.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:region, :location, :name, :image_url, :description, :price, :organic, :flavored, :forcooking, :active)
    end
end
