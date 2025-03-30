import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Import your CSS file for styling


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
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br></br>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br></br>
        <button type="submit" >Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <button className="register-btn" onClick={() => navigate("/register")}>
          Register
        </button>
        </p>
        

    </div>
  );
};

export default Login;
