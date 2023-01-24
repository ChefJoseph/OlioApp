import React from 'react'
import { useNavigate } from 'react-router-dom';

function AdminNavBar() {
    const navigate = useNavigate();

    return (
        <div >
            <ul >
                <button type="button" onClick={() => navigate('/admin')} >Show All Products</button>
                <button type="button" onClick={() => navigate('/addFish')} >Add Product</button>
            </ul>
        </div>
    )
}

export default AdminNavBar