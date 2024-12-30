import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle validation errors

  const navigate = useNavigate();  // Correctly call useNavigate as a function

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "gmail") setGmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear any previous errors
    setError("");

    if (!gmail || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const userData = JSON.parse(localStorage.getItem("user")) || [];
    const matchedUser = userData.find(
      (user) => user.gmail === gmail && user.password === password
    );

    if (matchedUser) {
      alert("Login successful!");
      navigate("/home"); // Use navigate correctly to redirect
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="heading">
            <p>Log In</p>
          </div>
          <div className="account">
            <input
              type="text"
              name="gmail"
              placeholder="Enter Your Email ID"
              value={gmail}
              onChange={handleInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={handleInput}
            />
            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>} {/* Display error */}
            <p>
              Don't have an account? <a href="/">Sign Up</a>
            </p>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
