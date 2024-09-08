import React, { useContext } from "react";
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

function LandingPage() {
  const { user } = useContext(AppContext);
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
          </>
        )}

        {/* Contact */}
        <Contact />
      </div>
    </div>
  );
}

export default LandingPage;
