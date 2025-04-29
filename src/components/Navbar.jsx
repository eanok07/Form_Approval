import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#007bff",
        color: "white",
        height: "60px",
        padding: "0 20px",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "24px" }}>Form Approval System</h1>
      <Link
        to="/"
        style={{
          position: "absolute",
          right: "90px",
          color: "white",
          textDecoration: "none",
          fontSize: "16px",
        }}
      >
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
