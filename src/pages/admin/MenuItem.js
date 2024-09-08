import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function MenuItem() {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [photoPath, setPhotoPath] = useState("");
  const [itemCategory, setItemCategory] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const response = await axios.get(`/menus/${id}`);
        setItemName(response.data.item_name);
        setItemPrice(response.data.price);
        setPhotoPath(response.data.photo_url);
        setItemCategory(response.data.category);
      } catch (error) {
        console.error("No menu items", error.response?.data || error.message);
      }
    };

    getMenuItems();
  }, [id]);

  const handleMenuAdd = async (e) => {
    e.preventDefault();
    const newItem = {
      name: itemName,
      price: itemPrice,
      photo_url: photoPath,
      category: itemCategory,
    };
    try {
      const response = await axios.post("/menus", newItem);
      alert(response.data.message);
      navigate("/admin");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const handleMenuUpdate = async (e) => {
    e.preventDefault();
    const updatedItem = {
      item_name: itemName,
      price: itemPrice,
      photo_url: photoPath,
      category: itemCategory,
    };
    try {
      const response = await axios.put(`/menus?id=${id}`, updatedItem);
      alert(response.data);
      navigate("/admin");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="menu-item vh-100 d-flex justify-content-center align-items-center">
      <form
        onSubmit={!id ? handleMenuAdd : handleMenuUpdate}
        className="border-0 rounded-3 bg-dark bg-opacity-75 py-5 w-50 d-flex flex-column align-items-center text-white"
      >
        <div className="mb-4">
          <h1 className="text-white">Menu Items</h1>
        </div>
        <div className="mb-3 w-50">
          <label
            className="form-label w-100 text-start ps-2"
            htmlFor="itemName"
          >
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            placeholder="Enter item name"
            autoComplete="off"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="mb-3 w-50">
          <label
            className="form-label w-100 text-start ps-2"
            htmlFor="itemPrice"
          >
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="itemPrice"
            placeholder="850"
            autoComplete="off"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <div className="mb-3 w-50">
          <label
            className="form-label w-100 text-start ps-2"
            htmlFor="photoPath"
          >
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="photoPath"
            placeholder="assets/photo.jpg"
            autoComplete="off"
            value={photoPath}
            onChange={(e) => setPhotoPath(e.target.value)}
          />
        </div>
        <div className="mb-3 w-50">
          <label
            htmlFor="itemCategory"
            className="form-label w-100 text-start ps-2"
          >
            Item Category
          </label>
          <select
            className="form-select"
            id="itemCateogry"
            aria-label="Register Type"
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Main Course">Main Course</option>
            <option value="Appertize">Appertize</option>
            <option value="Beverages">Beverages</option>
          </select>
        </div>
        {!id ? (
          <button type="submit" className="btn btn-primary w-50 mt-3">
            Add
          </button>
        ) : (
          <button type="submit" className="btn btn-primary w-50 mt-3">
            Update
          </button>
        )}
      </form>
    </div>
  );
}

export default MenuItem;
