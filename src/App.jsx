import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/routes/AppRoutes";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Sidebar />
          <main>
            <AppRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
