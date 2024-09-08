import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userType, setUserType] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(`/users/${id}`);
        setUserName(response.data.user_name);
        setUserEmail(response.data.email);
        setUserPhone(response.data.phone);
        setUserType(response.data.user_type);
      } catch (error) {
        console.error(error.message);
        alert(error.message);
      }
    };

    getUserData();
  }, [id]);

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = {
      user_name: userName,
      email: userEmail,
      phone: userPhone,
      user_type: userType,
    };
    try {
      const response = await axios.put(`/users?id=${id}`, updatedUser);
      alert(response.data);
      navigate("/admin");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="update-user vh-100 d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleUserUpdate}
        className="border-0 rounded-3 bg-dark bg-opacity-50 py-5 w-50 d-flex flex-column align-items-center text-white"
      >
        <div className="mb-4">
          <h1 className="text-white">Update User</h1>
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
            User Type
          </label>
          <select
            className="form-select"
            id="registerType"
            aria-label="Register Type"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select User Type</option>
            <option value="Customer">Customer</option>
            <option value="Staff">Staff</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-dark w-50 mt-3">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
