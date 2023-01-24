import React from 'react'
import AdminNavBar from './AdminNavBar'

function AddProduct() {
  return (
    <div>
        <AdminNavBar />
        <div>
            <h1>Add New Product</h1>
            {/* <p></p> */}
            <div>
                <form>
                    <p>Name</p>
                    <label>
                        <input
                        />
                    </label>
                    <p>Region</p>
                    <label>
                        <input
                        />
                    </label>
                    <p>Location</p>
                    <label>
                        <input
                        />
                    </label>
                    <p>Image</p>
                    <label>
                        <input
                        />
                    </label>
                    <p>Description</p>
                    <label>
                        <input
                        />
                    </label>
                    <p>Price</p>
                    <label>
                        <input
                        />
                    </label>
                    <p>Organic</p>
                    <label>
                        <input
                        />
                    </label>
                    <p>Flavored</p>
                    <label>
                        <input
                        />
                    </label>
                    <p>For Cooking</p>
                    <label>
                        <input
                        />
                    </label>
                    <p>Active</p>
                    <label>
                        <input
                        />
                    </label>                    
                </form>
            </div>
        </div>

    </div>
  )
}

export default AddProduct