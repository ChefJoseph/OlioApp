import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar'
import ProductCard from './ProductCard'
import Footer from '../../CommonComponents/Footer'

function Admin() {
    const [search, setSearch] = useState<string>('');

  return (
    <div className="mb-6">
        <AdminNavBar/>
        <h1 className="text-5xl mt-5 text-center">Search Products</h1>
            <div className="flex justify-center">
                <label htmlFor="searchBar">
                    <input
                        className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md mt-4"
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