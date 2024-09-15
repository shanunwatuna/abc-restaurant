import React, { useContext,useState,useEffect } from "react";
import Navigation from "../component/Navigation";
import Home from "./Home";
import MenuPage from "./MenuPage";
import About from "./About";
import Service from "./Service";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Reservation from "./Reservation";
import OnlineOrder from "./OnlineOrder";
// import AdminMenu from "./AdminMenu";
// import AdminReport from "./AdminReport";
// import Payment from "./Payment";
import FeedBack from "./FeedBack";
import { AppContext } from "../context/AppContext";
import axios from "axios";



function LandingPage() {
  const { user } = useContext(AppContext);
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedbacks when component mounts
  useEffect(() => {
    fetchFeedbacks();
  });

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('/feedback'); // Adjust endpoint if necessary
      setFeedbacks(response.data); // Set feedbacks in state

    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      alert('Failed to fetch feedbacks.');
    }
  };

  
  return (
    <div id="homepage" className="container-fluid m-0 p-0 main-container">
      <div className="bg-dark vh-100 bg-opacity-75">
        {/* Navigation */}
        <div id="navigation" className="w-100 h-10 sticky-top">
          <Navigation />
        </div>

        {user !== "" ? (
          <>
            <Reservation />
            <OnlineOrder />
            <FeedBack />
          </>
        ) : (
          <>
            <Home />
            <About />
            <Service />
            <Gallery />
            <MenuPage />
            <div className="mt-5" id="reviews">
        <h2 className="text-center">All Feedbacks</h2>
        <table className="table table-striped table-dark mt-3 w-75 mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Branch</th>
              <th>Rating</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback._id}>
                <td>{feedback.name}</td>
                <td>{feedback.branch}</td>
                <td>{feedback.rating}/5</td>
                <td>{feedback.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
          </>
        )}

        {/* Contact */}
        <Contact />
      </div>
    </div>
  );
}

export default LandingPage;
