import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';


function Payment() {
  const location = useLocation();
  const navigate = useNavigate();


  const { total } = location.state || { total: 0 }; // Default to 0 if no state passed

  // State to manage form inputs
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Form submit handler
  const handlePayment = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Validation: check if all fields are filled
    if(paymentMethod==="Cash"){
      alert('Payment Successful');
      navigate(-1); // Go back to the previous page

    }

    if(paymentMethod==="Card"){
      if (
        paymentMethod !== '' &&
        cardHolderName !== '' &&
        cardNumber !== '' &&
        expiryDate !== '' &&
        cvv !== ''
      ) {
        // Show success alert
        alert('Payment Successful');
        navigate(-1); // Go back to the previous page

      } else {
        // Show error alert if any field is missing
        alert('Please fill all the fields');
      }
    }

  };

  return (
    <div
    className="h-90"
    style={{
      backgroundImage: 'url(assets/background.jpg)', // Set your background image URL here
      backgroundSize: 'cover', // Make sure the background covers the whole area
      backgroundPosition: 'center', // Center the background image
      backgroundRepeat: 'no-repeat', // Prevent background from repeating
      minHeight: '100vh' // Ensure it covers the full viewport height
    }}
  >
    <div className="h-90 d-flex justify-content-center align-items-center">
      <form
        onSubmit={handlePayment}
        className="border-0 rounded-3 bg-dark bg-opacity-50 py-5 w-100 d-flex flex-column align-items-center text-white"
      >
        <div className="mb-4">
          <h1 className="text-white">Payment</h1>
        </div>

        {/* Total Amount */}
        <div className="mb-3 w-50">
          <label className="form-label w-100 text-start ps-2" htmlFor="totalamount">
            Total Amount
          </label>
          <input
            type="amount"
            className="form-control"
            id="totalAmount"
            value={total}
            disabled={true}
          />
        </div>

        {/* Payment Method */}
        <div className="mb-3 w-50">
          <label htmlFor="paymentMethod" className="form-label w-100 text-start ps-2">
            Payment Method
          </label>
          <select
            className="form-select"
            id="paymentMethod"
            aria-label="Payment method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select a payment method</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>
        </div>

        {/* Card Holder Name */}
        <div className="mb-3 w-50">
          <label className="form-label w-100 text-start ps-2" htmlFor="cardHolderName">
            Card Holder Name
          </label>
          <input
            type="text"
            className="form-control"
            id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* Card Number */}
        <div className="mb-3 w-50">
          <label className="form-label w-100 text-start ps-2" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* Expiry Date */}
        <div className="mb-3 w-50">
          <label className="form-label w-100 text-start ps-2" htmlFor="expiryDate">
            Expiry Date
          </label>
          <input
            type="month"
            className="form-control"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>

        {/* CVV */}
        <div className="mb-3 w-50">
          <label className="form-label w-100 text-start ps-2" htmlFor="cvv">
            CVV
          </label>
          <input
            type="tel"
            className="form-control"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" class="btn btn-secondary w-25">

          Pay
        </button>
      </form>
    </div>
  </div>
);
}

export default Payment;