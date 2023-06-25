import React, { useContext, useState } from 'react'
import AuthContext from '../AuthProvider';
import {Card} from 'flowbite-react'
// import olioVerde from '../assets/olioVerde.png'
import { IProduct } from '../types/IProducts';
import { useNavigate } from 'react-router-dom';
import { IShoppingCart } from '../types/IShoppingCart';
import {IoMdAddCircle} from 'react-icons/io'


interface Props {
  productData: IProduct[];
  setProductData:React.Dispatch<React.SetStateAction<IProduct[]>>
  product: IProduct;

}

function ProductCard({product}: Props) {
	const {
		setProductItem, shoppingCart, setShoppingCart,
	} = useContext(AuthContext);
	const [addToCartNumber, setAddToCartNumber] = useState<number>(1);
	const navigate = useNavigate();

	const handleAddToCart = (selectedProduct: IProduct) => {
		setAddToCartNumber((prevNumber) => prevNumber + 1);
		const newShoppingCartItem: IShoppingCart = {
			id: selectedProduct.id,
			name: selectedProduct.name,
			price: selectedProduct.price,
			image_url: selectedProduct.image_url,
			quantity: addToCartNumber + 1,
		};
		// eslint-disable-next-line no-param-reassign
		if (shoppingCart.find((cart) => cart.id === selectedProduct.id)) {
			const updateProductQuantity = shoppingCart.map((cart) => {
				if (cart.id === selectedProduct.id && cart.quantity) {
				// eslint-disable-next-line no-param-reassign
				cart.quantity += 1;
				return cart;
				}
			return cart;
			});
			setShoppingCart(updateProductQuantity);
		} else {
			setShoppingCart([...shoppingCart, newShoppingCartItem]);
		}
		console.log(shoppingCart)
	};

	const handleCardClick = (selectedProduct: IProduct ) => {
		setProductItem(selectedProduct);
		navigate('/products');
	};

	const scrollToTop = () =>{
	window.scrollTo(0, 0)
	};

	return (
	<div className=" mx-auto hover:shadow-lg">
		<Card
		className="active:border-gray-800 active:shadow-lg transition duration-150 ease-in-out "
		onClick={()=> {scrollToTop(); handleCardClick(product)}}>
			<div className="">
				<img
				src={product.image_url}
				alt="Olive Oil"
				className="object-contain overflow-hidden "
				
				/>
			</div>
			<a href="#">
			<h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white max-h-6 overflow-hidden">

				{product.name}
			</h3>
			<h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
				{product.location}
			</h3>
			{/* <h4 className="h-20 overflow-hidden bg-gradient-to-b from-transparent to-gray-100">
				{product.description}
			</h4> */}
			</a>
			<div className=" flex items-center -mt-2">
				<svg
					className="h-3 w-3 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-3 w-3 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-3 w-3 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-3 w-3 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-3 w-3 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
					5.0
				</span>
			</div>
			<div className="flex justify-between ">
				<span className="text-lg py-2 font-bold text-gray-900 dark:text-white">
					{product.price}
				</span>
				<strong className="py-2">
					<mark className="text-red-500 font-medium bg-white ">
						{product.active === false ? 'Out of Stock' : ''}
					</mark>
				</strong>
				<div className="rounded-lg hover:bg-yellow-300 active:bg-yellow-100">
					{product.active === true ? (
					<button
					onClick= {(e)=> {e.stopPropagation(); handleAddToCart(product)}}
					className="flex relative rounded-lg h-50px w-50px px-1 py-1 text-center text-md font-medium text-white  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
					<div className="absolute mt-3 ml-2">
					<IoMdAddCircle className="bg-transparent text-2xl " fill="#000"/>
					</div>
					<svg aria-hidden="true" data-testid="shopping-bag-icon-desktop" fill="#c9cbcf" height="35" stroke="#000" viewBox="0 0 20 27" width="30" xmlns="http://www.w3.org/2000/svg" className="sitewide-0 e123k0v92 "><path d="M0 6.4v18.1S0 27 2.5 27h15s2.5 0 2.5-2.5V6.4H0z" strokeWidth="0"></path><path d="M5.5 7.1S4.8 1 10 1c5 0 4.5 6.1 4.5 6.1" fill="none" strokeMiterlimit="10" strokeWidth="2"></path></svg>
					
					</button>
					):''}
				</div>
			</div>
		</Card>
	</div>
	)
	}

export default ProductCard