import React, { useState, useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function Alerts() {
  const [showSubscribePrompt, setShowSubscribePrompt] = useState(false);
  const [showContactPrompt, setShowContactPrompt] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubscribeClick = () => {
    setShowSubscribePrompt(true);
    setShowContactPrompt(false);
  };

  const handleContactClick = () => {
    setShowContactPrompt(true);
    setShowSubscribePrompt(false);
  };

  const closePrompt = () => {
    setShowSubscribePrompt(false);
    setShowContactPrompt(false);
  };

  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          setNotificationStatus('You will receive notifications for flood alerts.');
          setSuccessMessage(true);
          new Notification('Subscription Successful!', {
            body: 'You are now subscribed to flood alerts.',
            icon: 'https://via.placeholder.com/128', // Replace with your app icon
          });

          // Automatically hide success message after 4 seconds
          setTimeout(() => setSuccessMessage(false), 4000);
        } else if (permission === 'denied') {
          setNotificationStatus('Notifications are blocked. You won’t receive alerts.');
        } else {
          setNotificationStatus('Notification permission was not granted.');
        }
      });
    } else {
      setNotificationStatus('Your browser does not support notifications.');
    }
  };

  return (
    <div className="py-20 bg-yellow-100 min-h-screen flex items-center justify-center">
      <div
        className="max-w-4xl bg-white shadow-lg rounded-lg p-8 md:p-12 w-full transition transform duration-500 ease-in-out hover:scale-105"
      >
        {/* Header Section */}
        <div className="flex items-center justify-start space-x-3 mb-6 border-b pb-4">
          <FaExclamationTriangle className="text-red-600 text-4xl animate-pulse" />
          <h1 className="text-3xl font-bold text-red-600">Flood Alerts</h1>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 text-lg leading-relaxed text-center md:text-left">
          Stay informed about potential flood risks in your area. Receive timely updates, early warnings,
          and safety tips to prepare in case of emergencies.
        </p>

        {/* Call-To-Action Section */}
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          {/* Subscribe Button */}
          <button
            onClick={handleSubscribeClick}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Subscribe for Alerts
          </button>

          {/* Contact Support */}
          <button
            onClick={handleContactClick}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            Contact Support
          </button>
        </div>

        {/* Additional Information Section */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2 text-yellow-700">Did You Know?</h2>
          <p className="text-sm text-gray-700 leading-snug">
            Heavy rainfall, rising river levels, and prolonged weather events are common triggers for floods.
            Always stay informed about local warnings and subscribe to real-time alerts.
          </p>
        </div>
      </div>

      {/* Subscribe Prompt */}
      {showSubscribePrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 ease-in-out">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center animate-fade-in">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Subscribe for Alerts</h2>
            <p className="text-gray-700 mb-4">
              Enter your email to receive real-time flood alerts and updates directly to your inbox.
            </p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded mb-4"
            />
            <button
              onClick={() => {
                requestNotificationPermission();
                closePrompt();
              }}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}

      {/* Contact Prompt */}
      {showContactPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 ease-in-out">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center animate-fade-in">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Contact Support</h2>
            <p className="text-gray-700 mb-4">
              Our support team is available to assist you with any flood-related inquiries. Call us or
              send us a message!
            </p>
            <button
              onClick={closePrompt}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div
          className="fixed top-4 right-4 bg-green-100 border border-green-300 p-4 rounded shadow-lg transition transform duration-500 ease-in-out animate-fade-out"
        >
          <p className="text-green-800 font-semibold">You have successfully subscribed!</p>
        </div>
      )}

      {/* Notification Status */}
      {notificationStatus && (
        <div
          className="fixed bottom-4 right-4 bg-white p-4 rounded shadow-lg border border-gray-300 transition transform duration-500 ease-in-out"
        >
          <p className="text-gray-700">{notificationStatus}</p>
        </div>
      )}
    </div>
  );
}

export default Alerts;