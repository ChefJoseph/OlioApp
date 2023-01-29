import React from 'react'
import { useNavigate } from 'react-router-dom';

function AdminNavBar() {
    const navigate = useNavigate();

    return (
        <div id="adminavbar" className="flex text-white bg-gray-800 w-full text-lg">
            <ul className="w-full flex flex-wrap justify-between">
                <div className="">
                    <button onClick={() => navigate('/home')} className="flex items-center py-4 px-10">
                        <span className="flex items-center tracking-wide no-underline hover:no-underline font-medium text-white text-4xl hover:text-yellow-300 transition duration-300">o l i o</span>
                    </button>
                </div>
                <div className="flex lg:flex-row ">
                    <button type="button" onClick={() => navigate('/home')} className="py-5 px-5 font-semibold hover:text-yellow-300 transition duration-300">Client Home</button>
                    <button type="button" onClick={() => navigate('/admin')} className="py-5 px-5 font-semibold hover:text-yellow-300 transition duration-300">Admin Home</button>
                    <button type="button" onClick={() => navigate('/addProduct')} className="py-5 px-5 font-semibold hover:text-yellow-300 transition duration-300">Add Product +</button>
                </div>
            </ul>
        </div>
    )
}

export default AdminNavBar