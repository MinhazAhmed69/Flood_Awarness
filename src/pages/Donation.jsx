import React from 'react';

function DonationPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      {/* Intro animation with Tailwind's arbitrary keyframe */}
      <div
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8 animate-[fadeIn_1s_ease-in]"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Support Our Cause</h1>
        
        <p className="text-sm md:text-base text-gray-600 text-center mb-6 leading-relaxed">
          Your generous donation can help communities prepare for the unexpected. Every contribution makes a difference.
        </p>

        {/* Form Section */}
        <div className="space-y-4">
          <label htmlFor="donation" className="block text-sm font-medium text-gray-700 mb-1">Donation Amount</label>
          <input
            id="donation"
            type="number"
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />

          <button
            className="w-full bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition duration-200 ease-in-out"
          >
            Donate Now
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-600">Thank you for making a difference.</p>
      </div>
    </div>
  );
}

export default DonationPage;