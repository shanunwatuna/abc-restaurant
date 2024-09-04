import React from "react";

function FeedBack() {
  return (
    <div className="h-90" style={{ backgroundColor: '#212529' }}>
      <div className="h-90 d-flex justify-content-center align-items-center">
        <form className="border-0 rounded-3 bg-dark bg-opacity-25 py-5 w-50 d-flex flex-column align-items-center text-white">
          <div className="mb-4">
            <h1 className="text-white">Customer Feedback</h1>
          </div>
          <div className="mb-3 w-50">
            <label
              className="form-label w-100 text-start ps-2"
              htmlFor="customerName"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="customrName"
              placeholder="Enter your name"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 w-50">
            <label
              className="form-label w-100 text-start ps-2"
              htmlFor="customerEmail"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="customerEmail"
              placeholder="example@test.com"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 w-50">
            <label
              className="form-label w-100 text-start ps-2"
              htmlFor="customerphonenumber"
            >
              Phone Number
            </label>
            <input
              type="password"
              className="form-control"
              id="customerphonenumber"
              placeholder=""
              autoComplete="off"
            />
          </div>
          <div className="mb-3 w-50">
            <label
              htmlFor="registerType"
              className="form-label w-100 text-start ps-2"
            >
              Select Branch
            </label>
            <select
              className="form-select"
              id="registerType"
              aria-label="selectbranch"
            >
              <option value="" selected>
                Select Branch
              </option>
              <option value="Name">Colombo</option>
              <option value="Name">Kandy</option>
              <option value="Name">Jaffna</option>
              <option value="Name">Monaragala</option>
            </select>
          </div>
          <div className="mb-3 w-50">
            <label
              htmlFor="registerType"
              className="form-label w-100 text-start ps-2"
            >
              Rating As
            </label>
            <select
              className="form-select"
              id="registerType"
              aria-label="Register Type"
            >
              <option value="" selected>
                Select Rating Number
              </option>
              <option value="Number">0/5</option>
              <option value="Number">0/1</option>
              <option value="Number">0/2</option>
              <option value="Number">0/3</option>
              <option value="Number">0/4</option>
              <option value="Number">5/5</option>
            </select>
          </div>
          <div className="mb-3 w-50">
            <label
              className="form-label w-100 text-start ps-2"
              htmlFor="CustomerFeedback"
            >
              Feedback
            </label>
            <input
              type="tel"
              className="form-control"
              id="registerPhone"
              placeholder="Enter Your Feedback"
              autoComplete="off"
            />
          </div>
          <button type="submit Feedback" className="btn btn-dark w-50 mt-3">
            Submit Feedback
          </button>
          <div className="mt-3"></div>
        </form>
      </div>
    </div>
  );
}

export default FeedBack;
