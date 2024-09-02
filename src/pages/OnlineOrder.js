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

  const [selectedOrderIndex, setSelectedOrderIndex] = useState(0);
  const [lastOrderTotal, setLastOrderTotal] = useState(0);

  const selectedOrder = orders[selectedOrderIndex];

  useEffect(() => {
    if (selectedOrder) {
      setLastOrderTotal(selectedOrder.price * selectedOrder.quantity);
    }
  }, [selectedOrder]);

  const handleQuantityChange = (amount) => {
    setOrders(orders.map((order, index) => {
      if (index === selectedOrderIndex) {
        const updatedQuantity = Math.max(1, order.quantity + amount);
        return { ...order, quantity: updatedQuantity };
      }
      return order;
    }));
  };

  const handleNextItem = () => {
    setSelectedOrderIndex((selectedOrderIndex + 1) % orders.length);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-black text-white">
      <h1 className="text-3xl font-bold">Online Order</h1>

      {/* Display the selected order */}
      <div className="relative bg-gray-800 bg-opacity-80 rounded-lg shadow-md p-4 flex items-center border-2 border-yellow-500">
        <img src={selectedOrder.photo} alt={selectedOrder.name} className="w-20 h-20 object-cover mb-4 rounded-lg mr-4" />
        <div className="flex-grow">
          <h2 className="text-lg font-bold">{selectedOrder.name}</h2>
          <p className="text-lg">Rs.{selectedOrder.price}</p>
          <p className="text-lg">Quantity: {selectedOrder.quantity}</p>
        </div>
      </div>

      {/* Quantity controls and total amount display */}
      <div className="mt-8">
        <div className="flex items-center">
          <button
            className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="mx-4 text-lg font-bold">
            {selectedOrder.quantity}
          </span>
          <button
            className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <p className="text-lg font-bold mt-4">Total for Selected Item: Rs.{lastOrderTotal.toFixed(2)}</p>
      </div>

      {/* Next Item Button */}
      <div className="mt-8">
        <button
          className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg"
          onClick={handleNextItem}
        >
          Next Item
        </button>
      </div>
    </div>
  );
}

export default OnlineOrder;
