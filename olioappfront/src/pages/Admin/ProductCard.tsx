import React from 'react'
import AdminSideBar from './AdminSideBar'

function ProductCard() {

  return (
    <div className="mt-10">
      <div className="flex">
        <AdminSideBar />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-4/5 gap-6 mb-10 mr-10">
          Products
        </div>
      </div>
    </div>
  )
}

export default ProductCard