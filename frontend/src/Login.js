import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      alert("Login Successful!");
      setEmail(""); 
      setPassword("");
      navigate("/dashboard");  // Redirect after login
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {/* Use a button with useNavigate instead of <a> */}
      <p className="link" onClick={() => navigate("/register")}>
        Don't have an account? Register
      </p>
    </div>
  );
};

export default Login;
