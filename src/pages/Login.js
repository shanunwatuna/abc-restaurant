import React from "react";
import { Link } from 'react-router-dom';
import Navigation from "../component/Navigation";

function Login() {
  return (
    <div className="vh-100 bg-login">
      <div class="vh-100 bg-dark bg-opacity-50">
        {/* Navigation */}
        <div>
          <Navigation />
        </div>

        {/* Login */}
        <div className="h-90">
          <div className="h-90 d-flex justify-content-center align-items-center">
            <form className="border-0 rounded-3 bg-dark bg-opacity-25 py-5 w-50 d-flex flex-column align-items-center text-white">
                <div className="mb-4">
                    <h1 className="text-white">Login</h1>
                </div>
              <div class="mb-3 w-50">
                <label class="form-label w-100 text-start ps-2" for="loginEmail">
                  Email
                </label>
                <input type="email" class="form-control" id="loginEmail" placeholder="example@test.com"/>
              </div>
              <div class="mb-3 w-50">
                <label class="form-label w-100 text-start ps-2" for="loginPassword">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="loginPassword"
                  placeholder="••••••••••••••"
                />
              </div>
              <div class="mb-3 w-50">
                <label for="branch" class="form-label w-100 text-start ps-2">
                  User Type
                </label>
                <select class="form-select" aria-label="">
                  <option selected>Select type</option>
                  <option value="Customer">Customer</option>
                  <option value="Staff">Staff</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <button type="submit" class="btn btn-dark w-50 mt-3">
                Submit
              </button>
              <div className="mt-3">
                New user? Register <Link to="/signup">here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
