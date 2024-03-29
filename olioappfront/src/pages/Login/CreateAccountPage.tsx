import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';

function CreateAccountPage() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [firstName, setFirstName] = useState <string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [userType, setUserType] = useState<string>('user');
  const [errorMessages, setErrorMessages] = useState<[] | ''>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createItems = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: confirmPassword,
      account_type: userType,
    };
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },
      body: JSON.stringify(createItems),
    })
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              console.log(data)
              setErrorMessages('');
              setUser(data);
              if (data.account_type === 'admin') {
                navigate('/admin');
              } else if (data.account_type === 'user') {
                navigate('/home');
              }
            });
        } else {
          res.json()
            .then(({ errors }) => {
              setErrorMessages(errors);
              setPassword('');
              setConfirmPassword('');
            });
        }
      });
  };

  return (
    <div className="mb-12">
  
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-2xl my-10">Create a new account</h1>
        <p className="text-center text-red-500 text-lg ">
          {errorMessages ? errorMessages.map((error) => (
            <span key={error}>
              {error}
              ,
              {' '}
            </span>
          )) : null}
        </p>
        <div className="grid grid-cols-1 w-2/5 pt-0 shadow-lg rounded-lg px-6 py-5 ">
          <form onSubmit={handleSubmit}>
            <p className="text-lg font-semibold mb-2 text-left">First Name</p>
            <label htmlFor="firstName">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName || ''}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Last Name</p>
            <label htmlFor="lastName">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName || ''}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Email</p>
            <label htmlFor="email">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="text"
                name="email"
                placeholder="Email"
                value={email || ''}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Password</p>
            <label htmlFor="password">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="password"
                name="password"
                placeholder="Password"
                value={password || ''}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <p className="text-lg font-semibold mb-2 mt-3 text-left">Confirm Password</p>
            <label htmlFor="confirmPassword">
              <input
                className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword || ''}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
{/* Select role hidden */}
            <div className="hidden">
            <p className="text-lg font-semibold mb-2 mt-3 text-left">User Type</p>
              <select
                className="w-full text-xl py-2 px-3 border cursor-default"
                value={userType || ''}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="user">User</option>
                {/* <option value="admin">Admin</option> */}
              </select>
            </div>
            <button
              className="bg-gray-800 text-white mt-10 py-3 px-6 rounded-md hover:bg-gray-500 w-full text-xl"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <button
            className="mt-5  hover:text-slate-600"
            type="button"
            onClick={() => navigate('/login')}
          >
            Back to Login
            {' '}

          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default CreateAccountPage;
