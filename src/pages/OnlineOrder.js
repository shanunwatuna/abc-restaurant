import React, { useState, useEffect } from "react";

function OnlineOrder() {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Chees Burger', price: 850, photo: 'assets/CheesBurger.jpg', quantity: 1 },
    { id: 2, name: 'Chees Sandwich', price: 450, photo: 'assets/CheesSandwich.jpg', quantity: 1 },
    { id: 3, name: 'Chicken Burger', price: 750, photo: 'assets/ChickenBurgerjpg.jpg', quantity: 1 },
    { id: 4, name: 'Spicy Chicken', price: 600, photo: 'assets/SpicyChicken.jpg', quantity: 1 },
    { id: 5, name: 'Pizza', price: 1100, photo: 'assets/Pizza.jpg', quantity: 1 },
    { id: 6, name: 'Hot Dog', price: 750, photo: 'assets/Hotdog.jpg', quantity: 1 },
    { id: 7, name: 'Fruit Salad', price: 450, photo: 'assets/FruiteSalad.jpg', quantity: 1 },
    { id: 8, name: 'French Fries', price: 1100, photo: 'assets/French.jpg', quantity: 1 },
    { id: 9, name: 'Sandwich', price: 350, photo: 'assets/Sandwich.jpg', quantity: 1 },
    { id: 10, name: 'Nuggets', price: 500, photo: 'assets/Nuggets.jpg', quantity: 1 },
    { id: 11, name: 'Cocktail', price: 790, photo: 'assets/Cocktail.jpg', quantity: 1 },
    { id: 12, name: 'Spring Roll', price: 1200, photo: 'assets/SpringRoll.jpg', quantity: 1 },
    { id: 13, name: 'Milk Shake', price: 700, photo: 'assets/MilkShak1pg.jpg', quantity: 1 },
    { id: 14, name: 'Ice Tea', price: 450, photo: 'assets/IceTea.jpg', quantity: 1 },
    { id: 15, name: 'Orange Juice', price: 550, photo: 'assets/OrangeJuice.jpeg', quantity: 1 },
    { id: 16, name: 'Lemmon Juice', price: 400, photo: 'assets/LemmonJuice.jpg', quantity: 1 },
    { id: 17, name: 'Coffee', price: 300, photo: 'assets/Coffee.jpg', quantity: 1 },
    { id: 18, name: 'Ice Milo', price: 750, photo: 'assets/IceMilo1.jpeg', quantity: 1 },
  ]);

  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [lastSelectedOrderTotal, setLastSelectedOrderTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    if (selectedOrderId !== null) {
      const selectedOrder = orders.find(order => order.id === selectedOrderId);
      if (selectedOrder) {
        setLastSelectedOrderTotal(selectedOrder.price * selectedOrder.quantity);
      }
    }
  }, [orders, selectedOrderId]);

  const handleSelectOrder = (id) => {
    setSelectedOrderId(id);
  };

  const handleQuantityChange = (amount) => {
    if (selectedOrderId !== null) {
      setOrders(orders.map(order => {
        if (order.id === selectedOrderId) {
          const updatedQuantity = Math.max(1, order.quantity + amount);
          return { ...order, quantity: updatedQuantity };
        }
        return order;
      }));
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = orders.slice(startIndex, endIndex);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-black text-white">
      <h1 className="text-3xl font-bold">Online Order</h1>
      <div className="mt-8 space-y-4">
        {paginatedOrders.map((order) => (
          <div
            key={order.id}
            className={`relative bg-gray-800 bg-opacity-80 rounded-lg shadow-md p-4 flex items-center`}
          >
            <img src={order.photo} alt={order.name} className="w-20 h-20 object-cover mb-4 rounded-lg mr-4" />
            <div className="flex-grow">
              <h2 className="text-lg font-bold">{order.name}</h2>
              <p className="text-lg">Rs.{order.price}</p>
              <p className="text-lg">Quantity: {order.quantity}</p>
            </div>
            <button
              className={`ml-4 py-2 px-4 rounded-lg ${
                selectedOrderId === order.id
                  ? "bg-yellow-500 hover:bg-yellow-400"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => handleSelectOrder(order.id)}
            >
              {selectedOrderId === order.id ? "Selected" : "Select"}
            </button>
          </div>
        ))}
      </div>

      {/* Quantity controls and total amount display */}
      {selectedOrderId !== null && (
        <div className="mt-8">
          <div className="flex items-center">
            <button
              className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="mx-4 text-lg font-bold">
              {orders.find(order => order.id === selectedOrderId)?.quantity}
            </span>
            <button
              className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <p className="text-lg font-bold mt-4">Total: Rs.{lastSelectedOrderTotal.toFixed(2)}</p>
        </div>
      )}

      {/* Pagination controls */}
      <div className="flex justify-between mt-8">
        <button
          className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(orders.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OnlineOrder;
