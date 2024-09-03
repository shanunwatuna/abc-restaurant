import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OnlineOrder from "./pages/OnlineOrder";
import AdminMenu from "./pages/AdminMenu";
import AdminReport from "./pages/AdminReport";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/onlineorder" element={<OnlineOrder />} />
          <Route path="/adminmenu" element={<AdminMenu />} />
          <Route path="/adminreport" element={<AdminReport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
