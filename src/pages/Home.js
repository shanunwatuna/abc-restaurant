import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="vh-100">
      <div id="content" className="h-100 w-100 m-0 row">
      <div id="content" className="col-6 text-white">
        <div className="h-75 d-flex flex-column justify-content-center text-start ps-5">
          <div className="fs-1 fw-bold">Enjoy Our Delicious Food</div>
          <div className="text-start fs-4 mt-3">
            Delightful attractive or pleasing in an endering way, often with
            unique decor or ambiance.
          </div>
        </div>
        <div className="d-flex justify-content-center ps-5">
          <div className="pe-3 w-50">
            <Link to="/login">
              <button className="w-100 p-2 rounded fw-semibold btn btn-light">
                Login
              </button>
            </Link>
          </div>
          <div className="w-50">
            <Link to="/signup">
              <button className="w-100 p-2 rounded fw-semibold btn btn-outline-secondary">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        id="content"
        className="col-6 d-flex justify-content-center align-items-center"
      >
        <img src="assets/food-plate.png" alt="food plate" className="w-75" />
      </div>
    </div>
    </div>
  );
}

export default Home;
