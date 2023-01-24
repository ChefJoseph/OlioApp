import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar'
import ProductCard from './ProductCard'
import Footer from '../../CommonComponents/Footer'

function Admin() {
    const [search, setSearch] = useState<string>('');

  return (
    <div>
        <AdminNavBar/>
        <h1>Search Products</h1>
            <div>
                <label htmlFor="searchBar">
                    <input
                        className=""
                        style={{ width: '600px' }}
                        type="text"
                        name="searchbar"
                        placeholder="Search by Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
            </div>
        <ProductCard/>
        <Footer/>
    </div>
  )
}

export default Admin