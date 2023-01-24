import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar'
import { useNavigate } from 'react-router-dom';
import Footer from '../../CommonComponents/Footer';

function AddProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [organic, setOrganic] = useState<string>('');
  const [flavored, setFlavored] = useState<string>('');
  const [forCooking, setForCooking] = useState<string>('');
  const [errorMessages, setErrorMessages] = useState<[] | ''>([]);
  const activeStatus = 'true';
  
  const handleCreateNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append('image_url', image);
    }
    formData.append('name', name);
    formData.append('region', region);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('organic', organic);
    formData.append('flavored', flavored);
    formData.append('forcooking', forCooking);
    formData.append('active', activeStatus);

    fetch('/products', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          res.json()
            .then(() => {
              setErrorMessages([]);
              navigate('/admin');
            });
        } else {
          res.json()
            .then(({ errors }) => {
              setErrorMessages(errors);
            });
        }
      });
  };

  return (
    <div>
        <AdminNavBar />
        <div>
            <h1>Add New Product</h1>
            {/* <p></p> */}
            <div>
                <form onSubmit={handleCreateNewProduct}>
                    <p>Name</p>
                    <label>
                        <input
                          className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <p>Region</p>
                        <select
                            className="w-full text-xl py-2 px-3 border cursor-default"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="Italy">Italy</option>
                            <option value="Spain">Spain</option>
                            <option value="Greece">Greece</option>
                        </select>
                    <p>Location</p>
                    <label>
                        <input
                          className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                          type="text"
                          name="location"
                          placeholder="Location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                    </label>
                    <p>Image</p>
                        <input
                          className="ml-20 mt-1"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files) {
                              setImage(e.target.files[0]);
                            }
                          }}            
                        />
                    <p>Description</p>
                    <label>
                        <textarea
                          className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                          name="description"
                          placeholder="Add Description"
                          rows={2}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <p>Price</p>
                    <label>
                        <input
                          className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                          type="number"
                          name="price"
                          placeholder="Price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    <p>Organic</p>
                        <select
                          className="w-full text-xl py-2 px-3 border cursor-default"
                          value={organic}
                          onChange={(e) => setOrganic(e.target.value)}
                        >
                          <option value=""></option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                    <p>Flavored</p>
                        <select
                          className="w-full text-xl py-2 px-3 border cursor-default"
                          value={flavored}
                          onChange={(e) => setFlavored(e.target.value)}
                        >
                          <option value=""></option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                    <p>For Cooking</p>
                        <select
                          className="w-full text-xl py-2 px-3 border cursor-default"
                          value={forCooking}
                          onChange={(e) => setForCooking(e.target.value)}
                        >
                          <option value=""></option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select> 
                    <button
                        className="bg-slate-900 text-white mt-6 py-3 px-6 rounded-md hover:bg-slate-800 w-full text-xl"
                        type="submit"
                    >
                        Add New Product
                    </button>                 
                </form>
            </div>
        </div>

    </div>
  )
}

export default AddProduct