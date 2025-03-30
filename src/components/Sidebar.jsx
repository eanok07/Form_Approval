import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css"; // Import CSS

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle sidebar */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar container */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/super-admin">Dashboard</Link></li>
          <li><Link to="/admin">Admin Panel</Link></li>
          <li><Link to="/staff">Staff Section</Link></li>
          <li><Link to="/student">Student Panel</Link></li>
          <li><Link to="/approval">Approval</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
