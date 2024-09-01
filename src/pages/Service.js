import React from "react";
import Navigation from "../component/Navigation";

function Service() {
  return (
    <div
      id="service"
      className="d-flex flex-column align-items-center py-4 bg-dark"
    >
      <div className="mb-3">
        <h1 className="text-white">Services</h1>
      </div>
      <div className="row w-100">
        <div className="col-4 py-4 d-flex justify-content-center">
          <div className="bg-white rounded-3 w-75 p-4">
            <div className="mb-4">
              <img
                src="assets/reservation.png"
                alt="table reservation"
                className="w-25"
              />
            </div>
            <div>
              <a class="nav-link" aria-current="page" href="#home">
                <div className="fs-4">Table Reservation</div>
              </a>
              <div className="fw-lighter">
                ABC Restaurant provides a convenient table reservation service
                for both intimate and large gatherings, allowing customers to
                secure their preferred table at a suitable time, ensuring a
                perfect dining experience.
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 py-4 d-flex justify-content-center">
          <div className="bg-white rounded-3 w-75 p-4">
            <div className="mb-4">
              <img
                src="assets/Menu.png"
                alt="table reservation"
                className="w-25"
              />
            </div>
            <div>
              <div className="fs-4">Menu Browser</div>
              <div className="fw-lighter">
                ABC Restaurant offers a wide range of dishes and beverages, from
                appetizers to desserts, accessible from your seat, ensuring you
                can make the perfect selection to satisfy your cravings.
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 py-4 d-flex justify-content-center">
          <div className="bg-white rounded-3 w-75 p-4">
            <div className="mb-4">
              <img
                src="assets/order-now.png"
                alt="table reservation"
                className="w-25"
              />
            </div>
            <div>
              <div className="fs-4">Online Order</div>
              <div className="fw-lighter">
                ABC Restaurant offers an online ordering service for convenient,
                personalized dining experiences, ensuring fresh, fast delivery
                of favorite dishes for both family dinners and quick meals.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row w-100">
        <div className="col-4 py-4 d-flex justify-content-center">
          <div className="bg-white rounded-3 w-75 p-4">
            <div className="mb-4">
              <img
                src="assets/branchlocator.png"
                alt="branch locator"
                className="w-25"
              />
            </div>
            <div>
              <div className="fs-4">Branch Locator</div>
              <div className="fw-lighter">
                ABC Restaurant's Branch Locator service simplifies finding
                nearby branches, providing directions, contact details, and
                operating hours,ensuring an exceptional dining experience
                regardless of location.
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 py-4 d-flex justify-content-center">
          <div className="bg-white rounded-3 w-75 p-4">
            <div className="mb-4">
              <img
                src="assets/feedback.png"
                alt="customer feedback"
                className="w-25"
              />
            </div>
            <div>
              <div className="fs-4">Customer Feedback</div>
              <div className="fw-lighter">
                ABC Restaurant values your feedback and uses it to improve its
                offerings, ensuring every visit exceeds your expectations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;
