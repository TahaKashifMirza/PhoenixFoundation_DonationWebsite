import { useState } from 'react';
import './CSS/Signup.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";

const URL = "http://localhost:5001/api/auth/register";

export const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const resData = await response.json();
        console.log("API response data:", resData);  // Debugging log

        // Ensure that token exists in the response data
        if (resData.token) {
          storeTokenInLS(resData.token);
          setUser({ username: "", email: "", password: "", phone: "" });
          navigate("/login");
        } else {
          console.error("Token is missing in the response");
        }
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <header>
          <h1 className='signuph1'>REGISTER NOW ON!</h1>
          <h2 className='signuph2'>PHOENIX FOUNDATION</h2>
          <h3 className='signuph3'>Together, We Make A Difference</h3>
        </header>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={user.username} onChange={handleInput} required placeholder='Enter your username...'/>
          </label>
          <label>
            Email:
            <input type="email" name="email" value={user.email} onChange={handleInput} required  placeholder='Enter your email...'/>
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={user.phone} onChange={handleInput} required  placeholder='Enter your phone...'/>
          </label>
          <label>
            Password:
            <input type="password" name="password" value={user.password} onChange={handleInput} required  placeholder='Enter your password...'/>
          </label>
          <button type="submit"><strong>Register Now</strong></button>
        </form>
        <div className="login-link">
          Already have an account? <NavLink to="/login"><strong>Login Now</strong></NavLink>
        </div>
      </div>
    </div>
  );
};
