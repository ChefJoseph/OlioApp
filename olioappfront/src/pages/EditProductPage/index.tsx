import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import Footer from '../../CommonComponents/Footer';
import AdminNavBar from '../Admin/AdminNavBar';

function EditProductPage() {
  const navigate = useNavigate();
  const { productItem, setProductItem } = useContext(AuthContext);
  const turnNameToString = String(productItem.name);
  const [name, setName] = useState<string>(turnNameToString);
  const turnRegionToString = String(productItem.region);
  const [region, setRegion] = useState<string>(turnRegionToString)
  const turnLocationToString = String(productItem.location);
  const [location, setLocation] = useState<string>(turnLocationToString);
  const turnPriceToString = String(productItem.price);
  const [price, setPrice] = useState<string>(turnPriceToString);
  const turnDescriptionToString = String(productItem.description);
  const [description, setDescription] = useState<string>(turnDescriptionToString);
  const [image, setImage] = useState<File | null>(null);
  const turnOrganicToString = String(productItem.organic)
  const [organic, setOrganic] = useState<string>(turnOrganicToString);
  const turnFlavoredToString = String(productItem.flavored)
  const [flavored, setFlavored] = useState<string>(turnFlavoredToString);
  const turnForCooking = String(productItem.forcooking)
  const [forCooking, setForCooking] = useState<string>(turnForCooking);

  const [errorMessages, setErrorMessages] = useState<[] | ''>([]);

  useEffect(() => {
    if (productItem.name === '') {
      navigate('/admin');
    }
  }, []);

  const handleEditProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append('image_url', image);
    }
    formData.append('name', name);
    formData.append('region', region);
    formData.append('location', location);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('organic', organic);
    formData.append('flavored', flavored);
    formData.append('forcooking', forCooking);

    fetch(`/products/${productItem.id}`, {
      method: 'PATCH',
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

  const handleDelete = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
   
    fetch(`/products/${productItem.id}`, {
      method: 'DELETE',
    })
        .then(() => {
          navigate('/admin');
        });
  };

  const handleBackToAdminPage = () => {
    setProductItem({});
    navigate('/admin');
  };

  return (
    <div className="mb-6">
        <AdminNavBar/>
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-2xl mt-10">
          Edit Product -
          {' '}
          {productItem.name}
        </h1>
        <p className="text-center text-red-500 text-lg my-5">
          {errorMessages ? errorMessages.map((error) => (
            <span key={error}>
              {error}
              ,
              {' '}
            </span>
          )) : null}
        </p>
        <div className="flex flex-col w-2/5 pt-0 shadow-lg rounded-lg px-6 py-5 mb-10">
          <form onSubmit={handleEditProduct}>
            <p className="text-lg font-semibold mb-2 mt-7 text-left">Name</p>
            <label htmlFor="name">
              <input
                className="text-xl border p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
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
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Price</p>
                <label htmlFor="price">
                    <input
                        className="text-xl border p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Description</p>
                <label htmlFor="description">
                    <textarea
                        className="text-xl border p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                        name="description"
                        placeholder="Add Description"
                        rows={2}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Image</p>
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
            >
              Update
            </button>
            <button
              className="bg-red-600 text-white mt-6 py-3 px-6 rounded-md hover:bg-slate-800 w-full text-xl"
              type="submit"
              onClick={handleDelete}
            >
              Delete
            </button>
            <div className="flex justify-end mr-5">
              <button
                className="mt-4  mr-1 hover:text-slate-600"
                type="button"
                onClick={handleBackToAdminPage}
              >
                Back to Admin Page
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditProductPage;