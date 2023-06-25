import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar'
import { useNavigate } from 'react-router-dom';

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
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
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

	const scrollToTop = () => {
		window.scrollTo({
		top: 0,
		behavior: "smooth",
		});
	};
  

  return (
    <div>
        <AdminNavBar />
        <div className="flex flex-col text-center justify-center items-center">
			<div className="mt-10 text-red-600">
				{errorMessages.map((error, index) => (
					<p key={index}>{error}</p>
				))}
			</div>
            <h1 className="text-2xl my-10">Add New Product</h1>
            {/* <p></p> */}
            <div className="flex flex-col w-2/5 pt-0 shadow-lg rounded-lg px-6 py-5">
                <form onSubmit={handleCreateNewProduct}>
                    <p className="text-lg font-semibold my-1 text-left">Name</p>
                    <label>
                        <input
                          className="text-lg border py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <p className="text-lg font-semibold my-1 text-left" >Region</p>
                        <select
                            className="w-full text-lg py-2 px-3 border cursor-default rounded-md"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="Italy">Italy</option>
                            <option value="Spain">Spain</option>
                            <option value="Greece">Greece</option>
                        </select>
                    <p className="text-lg font-semibold my-1 text-left">Location</p>
                    <label>
                        <input
                          className="text-lg border py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                          type="text"
                          name="location"
                          placeholder="Location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                    </label>
                    <p className="text-lg font-semibold my-1 text-left">Image</p>
                        <input
                          className=""
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files) {
                              setImage(e.target.files[0]);
                            }
                          }}            
                        />
                    <p className="text-lg font-semibold my-1 text-left">Description</p>
                    <label>
                        <textarea
                          className="text-md border py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                          name="description"
                          placeholder="Add Description"
                          rows={2}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <p className="text-lg font-semibold my-1 text-left">Price</p>
                    <label>
                        <input
                          className="text-lg border py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                          type="number"
                          name="price"
                          placeholder="Price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    <p className="text-lg font-semibold my-1 text-left">Organic</p>
                        <select
                          className="w-full text-lg py-2 px-3 border rounded-md cursor-default"
                          value={organic}
                          onChange={(e) => setOrganic(e.target.value)}
                        >
                          <option value=""></option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                    <p className="text-lg font-semibold my-1 text-left">Flavored</p>
                        <select
                          className="w-full text-lg py-2 px-3 border rounded-md cursor-default"
                          value={flavored}
                          onChange={(e) => setFlavored(e.target.value)}
                        >
                          <option value=""></option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                    <p className="text-lg font-semibold my-1 text-left">For Cooking</p>
                        <select
                          className="w-full text-lg py-2 px-3 border rounded-md cursor-default"
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
						onClick={()=>{scrollToTop}}
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