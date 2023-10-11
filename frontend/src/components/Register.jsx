import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/login.jpg';
import logo from '../assets/crimee.jpg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirtday] = useState('')
  const [sex, setSex] = useState('')
  const [address, setAddress] = useState('')
  const [contact_no, setContact] = useState('')
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/user', {
        name: name,
        email: email,
        password: password,
        birthday,
        sex,
        address,
        contact_no
      })
      .then(result => {
        console.log(result)
        history('/')
      })
      .catch(err => console.log(err))
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.errors);
      }
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle = {
    border: '2px solid #ccc',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '800px',
    width: '100%',
    display: 'flex',
  };

  const logoStyle = {
    width: '350px',
    height: 'auto',
    marginRight: '20px',
  };

  const formStyle = {
    flex: 1,
  };

  return (
    <div className="h-screen" style={backgroundStyle}>
      <div style={containerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <form onSubmit={handleSubmit} style={formStyle}>
          <h2 className="text-black">Register</h2>
          <p className="text-red-500 mt-4">{msg}</p>
          <div className="flex flex-col py-2">
            <label className="text-black">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="border-2 rounded py-2 px-3"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-black">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border-2 rounded py-2 px-3"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-black">Birthday</label>
            <input
              value={birthday}
              onChange={(e) => setBirtday(e.target.value)}
              type="date"
              className="border-2 rounded py-2 px-3"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-black">Sex</label>
            <input
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              type="text"
              className="border-2 rounded py-2 px-3"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-black">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="border-2 rounded py-2 px-3"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-black">Contact Number</label>
            <input
              value={contact_no}
              onChange={(e) => setContact(e.target.value)}
              type="text"
              className="border-2 rounded py-2 px-3"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-black">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="border-2 rounded py-2 px-3"
            />
          </div>
          <button className="w-full my-3 py-2 bg-teal-500 text-white font-semibold rounded-lg">
            Register
          </button>
          <div className="mt-2 text-center">
            <p className="text-black">
              Already have an account?{' '}
              <span>
                {' '}
                <a className="text-blue-500 hover:text-black" href="/">
                  Login
                </a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
