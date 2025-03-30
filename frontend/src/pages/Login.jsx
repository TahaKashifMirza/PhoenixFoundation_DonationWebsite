import { useState } from 'react';
import './CSS/Login.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";

const URL = "http://localhost:5001/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        console.log("API response data:", resData);

        if (resData.token) {
          storeTokenInLS(resData.token);
          setUser({ email: "", password: "" });
          navigate("/");
        } else {
          console.error("Token is missing in the response");
        }
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <header>
          <h1 className="loginh1">WELCOME BACK!</h1>
          <h2 className="loginh2">PHOENIX FOUNDATION</h2>
          <h3 className="loginh3">Together, We Make A Difference</h3>
        </header>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" value={user.email} onChange={handleInput} required placeholder="Enter your email..." />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={user.password} onChange={handleInput} required placeholder="Enter your password..." />
          </label>
          <button type="submit"><strong>Login Now</strong></button>
        </form>
        <div className="additional-links">
          <NavLink to="/forgot-password">Forgot Password?</NavLink>
          <div className="register-link">
            Don't have an account? <NavLink to="/signup"><strong>Register Now</strong></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
