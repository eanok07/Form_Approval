import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Form Approval System</h1>
      <Link to="/">Logout</Link>
    </nav>
  );
};

export default Navbar;
