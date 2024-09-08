import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

function MenuPage() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenuItems();
  }, []);

  // fetch menu items from db
  const getMenuItems = async () => {
    try {
      const response = await axios.get("/menus");
      return setMenu(response.data);
    } catch (error) {
      console.error("No menu items", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <div id="menu" className="bg-dark pt-5 pb-4">
        <div className="mb-3">
          <h1 className="text-white">Menu</h1>
        </div>
        <div className="text-white d-flex">
          <div className="w-50">
            <div className="mb-2 fs-5 fs-semibold">Main Course</div>
            <div className="ms-5">
              <table className="table table-dark table-striped w-100 main-course ">
                <tbody>
                  {menu.map((item, index) => {
                    if (item.category === "Main Course") {
                      return (
                        <tr key={index}>
                          <td>{item.item_name}</td>
                          <td>Rs.{item.price}/-</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-50">
            <img
              src="assets/Menu1.jpg"
              alt="menu 1"
              className="object-fit-cover w-75"
            />
          </div>
        </div>

        <div className=" d-flex mt-4 bg-white py-3">
          <div className="w-50">
            <img
              src="assets/frenchfrice.jpg"
              alt="menu 1"
              className="object-fit-cover w-50"
            />
          </div>
          <div className="w-50">
            <div className="mb-2 fs-5 fs-semibold">Appertize</div>
            <div className="me-5">
              <table className="table table-striped w-100 main-course ">
                <tbody>
                  {menu.map((item, index) => {
                    if (item.category === "Appertize") {
                      return (
                        <tr key={index}>
                          <td>{item.item_name}</td>
                          <td>Rs.{item.price}/-</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-white d-flex pt-4">
          <div className="w-50">
            <div className="mb-2 fs-5 fs-semibold">Beverages</div>
            <div className="ms-5">
              <table className="table table-dark table-striped w-100 main-course ">
                <tbody>
                  {menu.map((item, index) => {
                    if (item.category === "Beverages") {
                      return (
                        <tr key={index}>
                          <td>{item.item_name}</td>
                          <td>Rs.{item.price}/-</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-50">
            <img
              src="assets/Milo.jpg"
              alt="menu 1"
              className="object-fit-cover w-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
