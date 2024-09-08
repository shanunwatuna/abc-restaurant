import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

function Reservation() {
  const { user } = useContext(AppContext);

  const [branch, setBranch] = useState("");
  const [time, setTime] = useState("");
  const [pax, setPax] = useState("");
  const [phone, setPhone] = useState("");

  const handleReservation = async (e) => {
    e.preventDefault();

    const newReservation = {
      user_id: user,
      branch: branch,
      time: time,
      pax: pax,
      phone: phone,
    };

    try {
      const response = await axios.post("/reservations", newReservation);
      // reset form
      setBranch("");
      setTime("");
      setPax("");
      setPhone("");
      alert(response.data.message);
    } catch (error) {
      console.error("Request failed: ", error.response?.data || error.message);
      alert(`Request failed: ${error.response.data.message}`);
    }
  };

  return (
    <div id="reservation" className="mt-2 py-4 bg-dark bg-opacity-50 text-light">
      <div>
        <h1>Reservation</h1>
      </div>
      <div className="w-50 mx-auto">
        <form onSubmit={handleReservation} className="py-3">
          <div className="d-flex px-5">
            <div class="mb-3 w-50 me-5">
              <label for="branch" class="form-label w-100 text-start ps-2">
                Branch
              </label>
              <select
                id="branch"
                class="form-select"
                aria-label=""
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option selected>Select branch</option>
                <option value="Colombo">Colombo</option>
                <option value="Galle">Galle</option>
                <option value="Kandy">Kandy</option>
              </select>
            </div>
            <div class="mb-3 w-50">
              <label for="time" class="form-label w-100 text-start ps-2">
                Time
              </label>
              <input
                type="datetime-local"
                class="form-control"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex px-5 mt-4">
            <div class="mb-3 w-50 me-5">
              <label class="form-label w-100 text-start ps-2" for="pax">
                Pax
              </label>
              <input
                type="text"
                class="form-control"
                id="pax"
                value={pax}
                onChange={(e) => setPax(e.target.value)}
              />
            </div>
            <div class="mb-3 w-50">
              <label class="form-label w-100 text-start ps-2" for="phone">
                Phone
              </label>
              <input
                type="text"
                class="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-light w-25 mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
