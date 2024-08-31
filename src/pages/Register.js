import React from "react";
import { Link } from 'react-router-dom';
import Navigation from "../component/Navigation";

function Register() {
  return (
    <div className="vh-100 bg-register">
      <div className="vh-100 bg-dark bg-opacity-50">
        {/* Navigation */}
        <div>
          <Navigation />
        </div>

        {/* Register */}
        <div className="h-90">
          <div className="h-90 d-flex justify-content-center align-items-center">
            <form className="border-0 rounded-3 bg-dark bg-opacity-25 py-5 w-50 d-flex flex-column align-items-center text-white">
              <div className="mb-4">
                <h1 className="text-white">Register</h1>
              </div>
              <div className="mb-3 w-50">
                <label className="form-label w-100 text-start ps-2" htmlFor="registerName">
                  Name
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="registerName" 
                  placeholder="Enter your name"
                  autoComplete="off" 
                />
              </div>
              <div className="mb-3 w-50">
                <label className="form-label w-100 text-start ps-2" htmlFor="registerEmail">
                  Email
                </label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="registerEmail" 
                  placeholder="example@test.com"
                  autoComplete="off" 
                />
              </div>
              <div className="mb-3 w-50">
                <label className="form-label w-100 text-start ps-2" htmlFor="registerPassword">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="registerPassword"
                  placeholder="••••••••••••••"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3 w-50">
                <label className="form-label w-100 text-start ps-2" htmlFor="registerPhone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="registerPhone"
                  placeholder="Enter your phone number"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3 w-50">
                <label htmlFor="registerType" className="form-label w-100 text-start ps-2">
                  Register As
                </label>
                <select className="form-select" id="registerType" aria-label="Register Type">
                  <option value="" selected>Select type</option>
                  <option value="Customer">Customer Register</option>
                  <option value="Staff">Staff Register</option>
                </select>
              </div>
              <button type="submit" className="btn btn-dark w-50 mt-3">
                Submit
              </button>
              <div className="mt-3">
                Already have an account? Login <Link to="Login.js">here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
