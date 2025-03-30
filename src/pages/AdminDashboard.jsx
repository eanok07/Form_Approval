import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>
        <Link to="/Approval">Approval</Link>
      </p>
    </div>
  );
};

export default AdminDashboard;
