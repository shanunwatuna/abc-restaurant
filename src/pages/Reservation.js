import React from "react";
import Navigation from "../component/Navigation";

function Reservation() {
  return (
    <div id="reservation" className="py-4">
      <div>
        <h1>Reservation</h1>
      </div>
      <div>
        <form className="py-3">
          <div className="d-flex px-5">
            <div class="mb-3 w-50 me-5">
              <label for="branch" class="form-label w-100 text-start ps-2">
                Branch
              </label>
              <select class="form-select" aria-label="">
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
              <input type="datetime-local" class="form-control" id="time" />
            </div>
          </div>
          <div className="d-flex px-5 mt-4">
            <div class="mb-3 w-50 me-5">
              <label class="form-label w-100 text-start ps-2" for="pax">
                Pax
              </label>
              <input type="text" class="form-control" id="pax" />
            </div>
            <div class="mb-3 w-50">
              <label class="form-label w-100 text-start ps-2" for="phone">
                Phone
              </label>
              <input type="text" class="form-control" id="phone" />
            </div>
          </div>
          <button type="submit" class="btn btn-dark w-25 mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
