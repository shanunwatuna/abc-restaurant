import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../component/Navigation";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

function Register() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userType, setUserType] = useState("");

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    const newUser = {
      name: userName,
      email: userEmail,
      password: userPassword,
      phone: userPhone,
      user_type: userType,
    };

    try {
      await axios.post("/users", newUser);
      // reset form
      setUserName("");
      setUserEmail("");
      setUserPassword("");
      setUserPhone("");
      setUserType("");
      alert("User added succefully!");
      navigate("/login");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

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
            <form
              onSubmit={handleRegisterUser}
              className="border-0 rounded-3 bg-dark bg-opacity-25 py-5 w-50 d-flex flex-column align-items-center text-white"
            >
              <div className="mb-4">
                <h1 className="text-white">Register</h1>
              </div>
              <div className="mb-3 w-50">
                <label
                  className="form-label w-100 text-start ps-2"
                  htmlFor="registerName"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="registerName"
                  placeholder="Enter your name"
                  autoComplete="off"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mb-3 w-50">
                <label
                  className="form-label w-100 text-start ps-2"
                  htmlFor="registerEmail"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="registerEmail"
                  placeholder="example@test.com"
                  autoComplete="off"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 w-50">
                <label
                  className="form-label w-100 text-start ps-2"
                  htmlFor="registerPassword"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="registerPassword"
                  placeholder="••••••••••••••"
                  autoComplete="off"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 w-50">
                <label
                  className="form-label w-100 text-start ps-2"
                  htmlFor="registerPhone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="registerPhone"
                  placeholder="Enter your phone number"
                  autoComplete="off"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                />
              </div>
              <div className="mb-3 w-50">
                <label
                  htmlFor="registerType"
                  className="form-label w-100 text-start ps-2"
                >
                  Register As
                </label>
                <select
                  className="form-select"
                  id="registerType"
                  aria-label="Register Type"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="" selected>
                    Select type
                  </option>
                  <option value="Customer">Customer Register</option>
                  <option value="Staff">Staff Register</option>
                </select>
              </div>
              <button type="submit" className="btn btn-dark w-50 mt-3">
                Submit
              </button>
              <div className="mt-3">
                Already have an account? Login <Link to="/login">here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
