import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "superadmin@example.com") navigate("/super-admin");
    else if (email === "admin@example.com") navigate("/admin");
    else if (email === "staff@example.com") navigate("/staff");
    else navigate("/student");
  };

  return (
    <div style={styles.page}>
      <div style={styles.loginContainer}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <br />
          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>
        <p style={styles.registerText}>
          Don't have an account?{" "}
          <button
            style={styles.registerButton}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Fullscreen height
    width: "100vw", // Fullscreen width
    background: "#f0f2f5",
  },
  loginContainer: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  registerText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
  registerButton: {
    background: "none",
    border: "none",
    color: "#4CAF50",
    fontSize: "14px",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;
