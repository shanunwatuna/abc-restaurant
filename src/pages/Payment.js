import React from "react";

function Payment() {
  return (
    <div>
      <div className="h-90">
        <div className="h-90 d-flex justify-content-center align-items-center">
          <form className="border-0 rounded-3 bg-dark bg-opacity-25 py-5 w-50 d-flex flex-column align-items-center ">
            <div className="mb-4">
              <h1 className="text-Black">Payment</h1>
            </div>
            <div className="mb-3 w-50">
              <label
                className="form-label w-100 text-start ps-2"
                htmlFor="totalamount"
              >
                Total Amount
              </label>
              <input
                type="amount"
                className="form-control"
                id="Tatalamount"
                placeholder=""
                autoComplete="off"
              />
            </div>
            <div className="mb-3 w-50">
              <label
                htmlFor="registerType"
                className="form-label w-100 text-start ps-2"
              >
                Payment Method
              </label>
              <select
                className="form-select"
                id="registerType"
                aria-label="Payment method"
              >
                <option value="Name">Cash</option>
                <option value="Name">Card</option>
              </select>
            </div>
            <div className="mb-3 w-50">
              <label
                className="form-label w-100 text-start ps-2"
                htmlFor="cardgoldername"
              >
                Card Holder Name
              </label>
              <input
                type="name"
                className="form-control"
                id=""
                placeholder=""
                autoComplete="off"
              />
            </div>
            <div className="mb-3 w-50">
              <label
                className="form-label w-100 text-start ps-2"
                htmlFor="Cardnumber"
              >
                Card Number
              </label>
              <input
                type="name"
                className="form-control"
                id=""
                placeholder=""
                autoComplete="off"
              />
            </div>

            <div class="mb-3 w-50">
              <label for="time" class="form-label w-100 text-start ps-2">
                Ex Date
              </label>
              <input type="month" class="form-control" />
            </div>
            <div className="mb-3 w-50">
              <label className="form-label w-100 text-start ps-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="tel"
                className="form-control"
                id="registerPhone"
                placeholder=""
                autoComplete="off"
              />
            </div>
            <button type="submit Feedback" className="btn btn-dark w-50 mt-3">
              Pay
            </button>
            <div className="mt-3"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
