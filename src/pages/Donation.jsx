import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Message Component for displaying success or error
function Message({ content }) {
  return <p>{content}</p>;
}

// DonationPage Component
export default function DonationPage() {
  const initialOptions = {
    "client-id":
      "AUrGpOQaQ08HaHgi1m7hEz5bH5QRk1NWaP1Jex2V3cYz5uSs1L10MZzmOBficZqcQzcSTt9sqJQDxgbU",
    "enable-funding": "venmo",
    "disable-funding": "",
    "buyer-country": "US",
    currency: "USD",
    "data-page-type": "product-details",
    components: "buttons",
    "data-sdk-integration-source": "developer-studio",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your donation of $${formData.amount} has been received.`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 px-4">
      <div className="flex-grow bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-auto mb-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">Support FloodGuard HQ</h1>

        {/* Instructions */}
        <p className="text-center mb-6 text-sm text-gray-600">
          Your donation makes a real difference. Please fill in the details below to support our mission.
        </p>

        {/* Donation Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="youremail@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Amount Input */}
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 mb-2">Donation Amount ($)</label>
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Donate Now
            </button>
          </div>
        </form>

        {/* PayPal Script Provider and Buttons */}
        <PayPalScriptProvider options={initialOptions}>
          <div className="mt-6">
            <PayPalButtons
              style={{
                shape: "pill",
                layout: "vertical",
                color: "blue",
                label: "paypal",
              }}
              createOrder={async () => {
                try {
                  const response = await fetch("/api/orders", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      cart: [
                        {
                          id: "YOUR_PRODUCT_ID",
                          quantity: "YOUR_PRODUCT_QUANTITY",
                        },
                      ],
                    }),
                  });

                  const orderData = await response.json();

                  if (orderData.id) {
                    return orderData.id;
                  } else {
                    const errorDetail = orderData?.details?.[0];
                    const errorMessage = errorDetail
                      ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                      : JSON.stringify(orderData);

                    throw new Error(errorMessage);
                  }
                } catch (error) {
                  console.error(error);
                  setMessage(`Could not initiate PayPal Checkout...${error}`);
                }
              }}
              onApprove={async (data, actions) => {
                try {
                  const response = await fetch(`/api/orders/${data.orderID}/capture`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });

                  const orderData = await response.json();
                  const errorDetail = orderData?.details?.[0];

                  if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                    return actions.restart();
                  } else if (errorDetail) {
                    throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
                  } else {
                    const transaction = orderData.purchase_units[0].payments.captures[0];
                    setMessage(`Transaction ${transaction.status}: ${transaction.id}.`);
                    console.log("Capture result", orderData);
                  }
                } catch (error) {
                  console.error(error);
                  setMessage(`Sorry, your transaction could not be processed...${error}`);
                }
              }}
            />
          </div>
        </PayPalScriptProvider>

        {/* Success or Error Message */}
        <Message content={message} />
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-600 py-4 mt-auto">
        Your donation directly supports vital projects and families in need.
      </div>
    </div>
  );
}
