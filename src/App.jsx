// // src/App.jsx
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Home from './pages/Home';
// import Requests from './pages/Requests';
// import Approvals from './pages/Approvals';
// import Settings from './pages/Settings';
// import theme from './theme';
// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <BrowserRouter>
//         <div className="app">
//           <Navbar />
//           <div className="main-content">
//             <Sidebar />
//             <div className="content">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/requests" element={<Requests />} />
//                 <Route path="/approvals" element={<Approvals />} />
//                 <Route path="/settings" element={<Settings />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;

// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { CssBaseline, ThemeProvider,Box } from '@mui/material';
// import theme from './theme';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Home from './pages/Home';
// import Requests from './pages/Requests';
// import Approvals from './pages/Approvals';
// import Settings from './pages/Settings';
// import Reports from './pages/Reports';

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <BrowserRouter>
//         <Box sx={{ display: 'flex' }}>
//           <Navbar toggleSidebar={toggleSidebar} />
//           <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
//           <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/requests" element={<Requests />} />
//               <Route path="/approvals" element={<Approvals />} />
//               <Route path="/reports" element={<Reports />} />
//               <Route path="/settings" element={<Settings />} />
//             </Routes>
//           </Box>
//         </Box>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import Home from './pages/Home';
import Requests from './pages/Requests';
import Approvals from './pages/Approvals';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user?.role === 'admin' ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <Navbar />
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/approvals" element={
                <ProtectedRoute>
                  <Approvals />
                </ProtectedRoute>
              } />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;