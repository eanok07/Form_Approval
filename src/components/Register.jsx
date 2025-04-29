import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpVerification from "./OtpVerification";
import Sidebar from "./Sidebar"; // Include Sidebar

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    navigate("/login");
  };

  // Styles
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Fullscreen height
    width: "100vw", // Fullscreen width
    backgroundColor: "#1e1e1e",
    padding: "20px",
  };

  const formStyle = {
    backgroundColor: "#f5f5f5",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <>
      <Sidebar />
      <div style={pageStyle}>
        <div style={formStyle}>
        <h2 style={{ color: 'black' }}>Register</h2>

          <form onSubmit={handleSubmit}>
            <input
              style={inputStyle}
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              style={inputStyle}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              style={inputStyle}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <select
              style={inputStyle}
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
              <option value="super_admin">Super Admin</option>
            </select>
            <button style={buttonStyle} type="submit">Register</button>
          </form>
          <p style={{ marginTop: "15px",color: "black" }}>
            Already have an account?{" "}
            <a href="/" style={{ color: "#3498db", textDecoration: "none" }}>
              Login
            </a>
          </p>
          <div style={{ marginTop: "20px" }}>
            <OtpVerification />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
