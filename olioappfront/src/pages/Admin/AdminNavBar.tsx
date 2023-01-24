import React from 'react'
import { useNavigate } from 'react-router-dom';

function AdminNavBar() {
    const navigate = useNavigate();

    return (
        <div id="adminavbar" className="flex text-white bg-gray-800  mx-auto text-lg">
            <ul className="container flex flex-wrap justify-between">
                <div className="">
                    <button onClick={() => navigate('/home')} className="flex items-center py-4 px-10">
                        <span className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-white text-4xl hover:text-yellow-300 transition duration-300">OLIO</span>
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <button type="button" onClick={() => navigate('/home')} className="py-5 px-5 font-semibold hover:text-yellow-300 transition duration-300">Client Home</button>
                    <button type="button" onClick={() => navigate('/admin')} className="py-5 px-5 font-semibold hover:text-yellow-300 transition duration-300">Admin Home</button>
                    <button type="button" onClick={() => navigate('/addProduct')} className="py-5 px-5 font-semibold hover:text-yellow-300 transition duration-300">Add Product +</button>
                </div>
            </ul>
        </div>
    )
}

export default AdminNavBar