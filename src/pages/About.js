import React from "react";
import Navigation from "../component/Navigation";

function About() {
  return (
    <div id="about" className="py-5 w-100">
      <div className="fs-1 fw-bold pb-3">
        <h1>About</h1>
      </div>
      <div className="d-flex w-100 justify-content-center ps-5">
        <div className="p-2 rounded text-start">
          <h2>Welcome to ABC Restaurant</h2>
          <div className="lh-lg">
            ABC Restaurant is a four-star Negombo lagoon restaurant offering
            panoramic views, refined accommodation, modern amenities, and
            delectable dining options. The hotel also serves as a dining
            destination, offering fine dining at Moyã, Catamaran Restaurant,
            Tree House, and The Pontoon. Private dining options include the Tree
            House and The Pontoon, accommodating up to 20 guests. The Grand Lawn
            or Sunset Deck offers a variety of cocktails and fine wines. ABC
            Restaurant is conveniently located just 10 minutes from Sri Lanka's
            international airport and Negombo.
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column align-items-end">
            <img src="assets/about.jpg" className="w-75" />
          </div>
          <div className="d-flex flex-column align-items-start justify-content-end">
            <img src="assets/about2.jpg" className="w-75" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
