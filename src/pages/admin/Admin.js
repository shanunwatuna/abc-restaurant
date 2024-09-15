import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Contact from "../Contact";
import { AppContext } from "../../context/AppContext";
import { useNavigate, Link } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5000";

function Admin() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [orders, setOrders] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getUsers();
    getReservations();
    getOrders();
    getMenus();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("/users");
    setUsers(response.data);
  };

  const getReservations = async () => {
    const response = await axios.get("/reservations");
    setReservations(response.data);
  };

  const getOrders = async () => {
    const response = await axios.get("/orders");
    setOrders(response.data);
  };

  const getMenus = async () => {
    const response = await axios.get("/menus");
    setMenus(response.data);
  };

  const handleLogout = () => {
    setUser("");
    navigate("/");
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await axios.delete(`/users?id=${id}`);
      alert(response.data);
      getUsers();
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const handleDeleteMenuItem = async (id) => {
    try {
      const response = await axios.delete(`/menus?id=${id}`);
      alert(response.data);
      getMenus();
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const deleteReservation = async (id) =>{
    try {
      const response = await axios.delete(`/reservations?id=${id}`);
      alert(response.data);
      getReservations();
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }

  const deleteOrders =  async (id) =>{
    try {
      const response = await axios.delete(`/orders?id=${id}`);
      alert(response.data);
      getOrders();
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }

  return (
    <div>
      <div id="admin-header">
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

      <div id="user-management">
        <div className="user-mng pb-4 pt-3 bg-dark bg-opacity-10">
          <h1>Users</h1>
          <div className="user-mng-table h-100">
            <table className="w-75 mt-2 mx-auto table table-dark table-striped">
              <thead>
                <tr className="rounded-top">
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Type</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.user_name}</td>
                    <td>{user.email}</td>
                    <td>{user.user_type}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link to={`update-user/${user.id}`}>
                        <button className="me-2 w-20 btn btn-success">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="w-20 btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="services-mng w-100 d-flex">
        <div
          id="reservation-management"
          className="w-50 py-4 bg-dark bg-opacity-75 text-light"
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
                        <button className="btn btn-danger" onClick={()=>{
                          deleteReservation(reservation.id)
                        }}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="order-management" className="w-50">
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
                        <button className="btn btn-danger" onClick={()=>{
                          deleteOrders(order.id);
                        }}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div id="menu-management">
        <div className="py-4">
          <h1 className="mb-3">Menus</h1>
          <div className="h-100">
            <table className="w-75 mt-2 mx-auto table table-dark table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item Name</th>
                  <th>Unit Price</th>
                  <th>Category</th>
                  <th>Photo</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {menus.map((menu, index) => (
                  <tr key={index}>
                    <td>{menu.id}</td>
                    <td>{menu.item_name}</td>
                    <td>Rs. {menu.price}</td>
                    <td>{menu.category}</td>
                    <td className="d-flex justify-content-center align-items-bottom">
                      <div style={{ maxWidth: "100px" }}>
                        <img
                          src={menu.photo_url}
                          alt="item-photo"
                          className="w-100"
                          style={{ objectFit: "cover", height: "80px" }}
                        />
                      </div>
                    </td>
                    <td>
                      <Link to={`/admin/menu-item/${menu.id}`}>
                        <button className="me-2 w-20 btn btn-success">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteMenuItem(menu.id)}
                        className="w-20 btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <div className="w-75 mx-auto">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Admin;
