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
      formData.append('image', image);
    }
    formData.append('name', name);
    formData.append('region', region);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('organic', organic);
    formData.append('flavored', flavored);
    formData.append('forCooking', forCooking);
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