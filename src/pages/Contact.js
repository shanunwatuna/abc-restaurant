import React from "react";
import Navigation from "../component/Navigation";

function Contact() {
  return (
    <div id="contact" className="bg-dark text-white py-5">
      <div className="pb-3 text-start ps-5">
        <h1>Contact</h1>
      </div>
      <div className="d-flex">
        <div className="w-50 text-start ps-5">
          <div className="mb-1">ABC Restaurant</div>
          <div className="mb-1">No. 10, Flower Road, Colombo</div>
          <div className="mb-1">Tel: 0112-236-569</div>
          <div className="mb-1">Email: abcrestaurant@abc.lk</div>
        </div>
        <div className="w-50 d-flex justify-content-center align-items-end">
          <div>&copy; All Right Reserved 2024 ABC Restaurant</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
