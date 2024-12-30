import React, { useState } from 'react';
import main from "../images/pic.png";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const userDetail = { name: "", gmail: "", password: "" };
  const [data, setData] = useState(userDetail);
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.name || !data.gmail || !data.password) {
      alert("Please enter all details!");
    } else {
      const getData = JSON.parse(localStorage.getItem('user') || "[]");
      const updatedData = [...getData, data];
      localStorage.setItem("user", JSON.stringify(updatedData));
      alert("Signup Successful!");
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <div className='main-page'>
        <form onSubmit={handleSubmit}>
          <div className='heading'>
            <p>Sign Up</p>
          </div>
          <div className='account'>
            <input type="text" name='name' placeholder='Enter Your Name' onChange={handleInput} />
            <input type="email" name='gmail' placeholder='Enter Your Email ID' onChange={handleInput} />
            <input type="password" name='password' placeholder='Enter Your Password' onChange={handleInput} />
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div>
          <img src={main} alt="Signup illustration" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
