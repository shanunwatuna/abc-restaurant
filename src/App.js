  import "./App.css";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import LandingPage from "./pages/LandingPage";
  import Login from "./pages/Login";
  import Register from "./pages/Register";
  import OnlineOrder from "./pages/OnlineOrder";
  import AdminMenu from "./pages/AdminMenu";
  import AdminReport from "./pages/AdminReport";
  import Payment from "./pages/Payment";
  import FeedBack from "./pages/FeedBack"
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
            <Route path="/payment" element={<Payment />} />
            <Route path="/Feedback" element={<FeedBack />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
