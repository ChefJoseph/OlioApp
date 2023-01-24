import React from 'react'
import { useNavigate } from 'react-router-dom';
import AdminSideBar from './AdminSideBar'
import { IProduct } from '../../types/IProducts';

interface Props {
    productData:IProduct[]
    setProductData:React.Dispatch<React.SetStateAction<IProduct[]>>
    search:string
}

function ProductCard({ productData, setProductData, search }: Props) {
    const navigate = useNavigate();
    return (
        <div className="mt-10">
        <div className="flex">
            <AdminSideBar setProductData={setProductData}/>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-4/5 gap-6 mb-10 mr-10">
            Products
            </div>
        </div>
        </div>
    )
}

export default ProductCard