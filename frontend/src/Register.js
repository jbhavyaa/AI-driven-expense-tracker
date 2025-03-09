import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

<<<<<<< HEAD
  const handleRegister = async () => {
    setError(null); // Reset error state

    if (!fullName || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: fullName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Registration failed.");
      }

      // Store JWT token (if backend provides it)
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      alert("Registration Successful!");
      setFullName("");
      setEmail("");
      setPassword("");

      navigate("/dashboard"); // Redirect after successful registration
    } catch (err) {
      setError(err.message);
=======
  const handleRegister = () => {
    if (fullName && email && password) {
      // Reset fields and directly navigate to the dashboard
      setFullName("");
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } else {
      // You can optionally handle missing fields without using pop-up alerts
      console.error("Please fill all fields.");
>>>>>>> ca814689f3b7f41f20b24657b7c4f5ff9277ac8a
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      {error && <p className="error-message">{error}</p>} {/* Display error messages */}

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
<<<<<<< HEAD

=======
>>>>>>> ca814689f3b7f41f20b24657b7c4f5ff9277ac8a
      <p className="link" onClick={() => navigate("/")}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default Register;