import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/login.jpg';
import logo from '../assets/crimee.jpg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/users', {
        name: name,
        username: username,
        password: password,
      });
      history('/');
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
            <label className="text-black">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
