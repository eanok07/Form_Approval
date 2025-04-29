import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: isOpen ? 0 : "-250px", // Slide in/out
    width: "250px", // Fixed width
    height: "100vh", // Full height
    backgroundColor: "#2c3e50",
    color: "white",
    display: "flex",
    flexDirection: "column", // Stack items vertically
    zIndex: 1000,
    padding: "20px",
    boxShadow: "2px 0 8px rgba(0,0,0,0.3)",
    transition: "left 0.3s ease", // Smooth slide animation
  };

  const toggleButtonStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "20px",
    zIndex: 1100,
    cursor: "pointer",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 999,
    display: isOpen ? "block" : "none",
  };

  return (
    <>
      {/* Toggle Button */}
      <button style={toggleButtonStyle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "❌" : "☰"}
      </button>

      {/* Overlay */}
      {isOpen && <div style={overlayStyle} onClick={() => setIsOpen(false)}></div>}

      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "30px" }}>
          <li style={{ marginBottom: "15px" }}>
            <Link to="/super-admin" style={{ color: "#fff", textDecoration: "none" }}>Dashboard</Link>
          </li>
          <li style={{ marginBottom: "15px" }}>
            <Link to="/admin" style={{ color: "#fff", textDecoration: "none" }}>Admin Panel</Link>
          </li>
          <li style={{ marginBottom: "15px" }}>
            <Link to="/staff" style={{ color: "#fff", textDecoration: "none" }}>Staff Section</Link>
          </li>
          <li style={{ marginBottom: "15px" }}>
            <Link to="/student" style={{ color: "#fff", textDecoration: "none" }}>Student Panel</Link>
          </li>
          <li>
            <Link to="/approval" style={{ color: "#fff", textDecoration: "none" }}>Approval</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
