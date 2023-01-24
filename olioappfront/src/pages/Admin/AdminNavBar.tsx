import React from 'react'
import { useNavigate } from 'react-router-dom';

function AdminNavBar() {
    const navigate = useNavigate();

    return (
        <div className="flex text-white justify-center bg-slate-900 mx-auto text-lg">
            <ul className="flex">
                <button type="button" onClick={() => navigate('/admin')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Show All Products</button>
                <button type="button" onClick={() => navigate('/addProduct')} className="py-5 px-10 font-semibold hover:text-red-400 transition duration-300">Add Product</button>
            </ul>
        </div>
    )
}

export default AdminNavBar