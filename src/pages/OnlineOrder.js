import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

axios.defaults.baseURL = "http://localhost:5000";

function OnlineOrder() {
  const { user } = useContext(AppContext);

  const [menu, setMenu] = useState([]);
  const [menuCategory, setMenuCategory] = useState(0);
  const [quantities, setQuantities] = useState({});
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const menuCategories = ["Main Course", "Appertize", "Beverages"];

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

  // select menu category
  const selectMenuCategory = () => {
    setMenuCategory((prevItemNo) => (prevItemNo + 1) % menuCategories.length);
  };

  const handleQuantityChange = (itemId, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max(1, (prevQuantities[itemId] || 1) + amount), // Ensure quantity doesn't go below 1
    }));
  };

  // Add item to the order
  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(
        (orderItem) => orderItem.id === item.id,
      );
      if (existingItem) {
        return prevOrder.map((orderItem) =>
          orderItem.id === item.id
            ? {
                ...orderItem,
                quantity: orderItem.quantity + quantities[item.id],
              }
            : orderItem,
        );
      } else {
        return [...prevOrder, { ...item, quantity: quantities[item.id] || 1 }];
      }
    });
  };

  // remove items from order summary
  const removeItemFromOrder = (id) => {
    const updatedOrderItems = order.filter((item) => item.id !== id);
    setOrder(updatedOrderItems);
  };

  useEffect(() => {
    const newTotal = order.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    setTotalPrice(newTotal);
  }, [order]);

  // save new order to db
  const handleOnlineOrder = async () => {
    const itemsList = order.map((item) => ({
      menu_id: item.id,
      quantity: item.quantity,
    }));

    if (itemsList.length === 0) {
      alert("Retry, no items in the order.");
      return; // Exit the function if no items
    }

    const newOrder = {
      user_id: user,
      items: itemsList,
      total: totalPrice,
    };

    try {
      const response = await axios.post("/orders", newOrder);
      // reset form
      setOrder([]);
      alert(response.data.message);
    } catch (error) {
      console.error("Request failed: ", error.response?.data || error.message);
      alert(`Request failed: ${error.response.data.message}`);
    }
  };

  return (
    <div className="py-4 bg-dark text-white">
      <div>
        <h1>Online Order</h1>
      </div>
      <div className="row w-75 mx-auto">
        {menu.map((item, index) => {
          if (item.category === menuCategories[menuCategory]) {
            return (
              <div className="col-4 h-100" key={index}>
                <div className="m-3 bg-white text-dark rounded">
                  <div className="w-100 h-100">
                    <img
                      src={item.photo_url}
                      alt="card-image"
                      className="w-100 object-fit-cover rounded-top"
                    />
                  </div>
                  <div className="d-flex justify-content-between rounded-bottom">
                    <div className="px-3 pt-2 pb-3 d-flex flex-column justify-content-between text-start">
                      <div className="fs-5 fw-semibold">{item.item_name}</div>
                      <div className="fs-6 fw-light">Rs. {item.price}/-</div>
                    </div>
                    <div className="w-40 px-3 pt-2 pb-3">
                      <div className="mb-2 d-flex w-100 border rounded">
                        <div>
                          <button
                            type="submit"
                            className="border-0 rounded-start"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            -
                          </button>
                        </div>
                        <div>
                          <span>
                            <input
                              type="text"
                              name="qty"
                              id="quantity"
                              className="border-0 w-100 input-number"
                              placeholder="1"
                              value={quantities[item.id] || 1}
                              disabled
                            />
                          </span>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="border-0 rounded-end"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="w-100 btn btn-outline-dark"
                          onClick={() => addToOrder(item)}
                        >
                          Add to Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="w-20 my-4 mx-auto d-flex justify-content-center">
        <button
          onClick={selectMenuCategory}
          className="w-40 btn btn-outline-light"
        >
          Next Menu
        </button>
      </div>

      {/* Display added items and total price */}
      {/* Order Summary */}
      <div className="w-100 mx-auto">
        <h2 className="pt-3">Order Summary</h2>
        <div className="w-40 mx-auto mt-4 rounded">
          {order.length === 0 ? (
            <p className="pt-3 text-light border-top">No items in the order.</p>
          ) : (
            order.map((item) => (
              <div
                key={item.id}
                className="order-item d-flex justify-content-between align-items-center p-3 border-top"
              >
                <span>
                  {item.item_name} - Rs. {item.price} x {item.quantity}
                </span>
                <button
                  onClick={() => removeItemFromOrder(item.id)}
                  className="btn btn-danger btn-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
          <div className="p-3 border-top border-bottom d-flex justify-content-between">
            <span className="fw-bold">Total Price:</span>
            <span className="fw-bold">Rs. {totalPrice}</span>
          </div>
        </div>
        <div className="w-20 my-4 mx-auto d-flex justify-content-center">
          <button onClick={handleOnlineOrder} className="w-40 btn btn-light">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnlineOrder;
