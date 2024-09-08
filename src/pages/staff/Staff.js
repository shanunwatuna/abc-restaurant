import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Contact from "../Contact";

function Staff() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const [reservations, setReservations] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getReservations();
    getOrders();
    // getMenus();
  }, []);

  const handleLogout = () => {
    setUser("");
    navigate("/");
  };

  const getReservations = async () => {
    const response = await axios.get("/reservations");
    setReservations(response.data);
  };

  const getOrders = async () => {
    const response = await axios.get("/orders");
    setOrders(response.data);
  };

  return (
    <div>
      <div id="staff-header">
        <div className="px-5 py-2 d-flex justify-content-between bg-dark bg-opacity-25">
          <div>
            <img src="assets/Loogo1.png" alt="website-logo" className="w-20" />
          </div>
          <div className="d-flex align-items-center">
            <div className="me-3">{user}</div>
            <div>
              <button onClick={handleLogout} className="btn btn-outline-dark">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
          id="reservation-management"
          className="py-4 bg-dark bg-opacity-75 text-light"
        >
          <div>
            <h1 className="mb-3">Reservation</h1>
            <div className="h-100">
              <table className="w-75 mt-2 mx-auto table table-light table-striped text-dark">
                <thead>
                  <tr className="rounded-top">
                    <th>ID</th>
                    <th>User Email</th>
                    <th>Branch</th>
                    <th>Time</th>
                    <th>Pax</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation, index) => (
                    <tr key={index}>
                      <td>{reservation.id}</td>
                      <td>{reservation.user_id}</td>
                      <td>{reservation.branch}</td>
                      <td>{reservation.time}</td>
                      <td>{reservation.pax}</td>
                      <td>
                        <button className="me-2 btn btn-success">Accept</button>
                        <button className="btn btn-danger">Cancel</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="order-management">
          <div className="py-4 bg-dark text-light">
            <h1 className="mb-3">Orders</h1>
            <div className="h-100">
              <table className="w-75 mt-2 mx-auto table table-light table-striped text-dark">
                <thead>
                  <tr className="rounded-top">
                    <th>ID</th>
                    <th>User Email</th>
                    <th>Items</th>
                    <th>Total Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.id}</td>
                      <td>{order.user_id}</td>
                      <td>{order.menu_items.length}</td>
                      <td>Rs. {order.total}</td>
                      <td>
                        <button className="me-2 btn btn-success">Accept</button>
                        <button className="btn btn-danger">Cancel</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-dark border-top">
        <div className="w-75 mx-auto">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Staff;
