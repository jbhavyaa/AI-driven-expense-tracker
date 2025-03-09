import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null); // Reset error state
    setShowErrorPopup(false);

    if (!email || !password) {
      setError("Please enter both email and password.");
      setShowErrorPopup(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Login failed.");
      }

      // Store JWT token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful!");
      setEmail("");
      setPassword("");
      navigate("/dashboard"); // Redirect after successful login
    } catch (err) {
      setError(err.message);
      setShowErrorPopup(true);
    }
  };

  useEffect(() => {
    if (showErrorPopup) {
      const timer = setTimeout(() => {
        setShowErrorPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showErrorPopup]);

  return (
    <div className="container">
      <h2>Login</h2>

      {showErrorPopup && error && (
        <div className="error-popup">
          {error}
        </div>
      )}

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

      <p className="link" onClick={() => navigate("/register")}>
        Don't have an account? Register
      </p>
    </div>
  );
};

export default Login;
