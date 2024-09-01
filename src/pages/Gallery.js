import React from "react";
import Navigation from "../component/Navigation";

function Gallery() {
  return (
    <div id="gallery" className="pt-5 pb-4">
      <div className="mb-3">
        <h1>Gallery</h1>
      </div>
      <div className="vh-100 p-3 d-flex justify-content-between">
        <div className="fs-1 h-100 d-flex align-items-center">&lt;</div>
        <div className="w-100 h-100 px-2 d-flex align-items-center justify-content-center">
          <img
            src="assets/about.jpg"
            alt="gallery 1"
            className="object-fit-cover w-100 h-100"
          />
        </div>

        <div className="fs-1 h-100 d-flex align-items-center">&gt;</div>
      </div>
    </div>
  );
}
export default Gallery;
