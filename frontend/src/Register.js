import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (fullName && email && password) {
      alert("Registration Successful!");
      setFullName(""); 
      setEmail(""); 
      setPassword("");
      navigate("/dashboard");  // Redirect after registration
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="input-field"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>
      
      {/* Use a button with useNavigate instead of <a> */}
      <p className="link" onClick={() => navigate("/")}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default Register;
