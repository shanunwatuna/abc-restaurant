import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OnlineOrder from "./pages/OnlineOrder";
// import AdminMenu from "./pages/AdminMenu";
// import AdminReport from "./pages/AdminReport";
import Payment from "./pages/Payment";
import FeedBack from "./pages/FeedBack";
import Admin from "./pages/admin/Admin";
import UpdateUser from "./pages/admin/UpdateUser";
import MenuItem from "./pages/admin/MenuItem";
import Staff from "./pages/staff/Staff";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/onlineorder" element={<OnlineOrder />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Feedback" element={<FeedBack />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/update-user/:id" element={<UpdateUser />} />
          <Route path="/admin/add-item" element={<MenuItem />} />
          <Route path="/admin/menu-item/:id" element={<MenuItem />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
