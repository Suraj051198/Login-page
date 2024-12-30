import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook

const Home = () => {
  const navigate = useNavigate();  // Correctly call useNavigate as a function

  const logout = () => {
    localStorage.removeItem("user");  // Clear the user data from localStorage
    navigate("/");  // Navigate to the home page (login page)
  };

  return (
    <div>
      <Navbar />
      <div className='home'>
        <h2>Welcome Home Page!</h2>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
