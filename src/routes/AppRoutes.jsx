import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import SuperAdminDashboard from "../pages/SuperAdminDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import StaffDashboard from "../pages/StaffDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import Register from "../components/Register";
import Approval from "../components/Approval";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/super-admin" element={<SuperAdminDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/staff" element={<StaffDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/Approval" element={<Approval/>} />
      
    </Routes>
  );
};

export default AppRoutes;
