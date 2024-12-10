import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationData from '../animations/Animation - 1733855164334.json';

function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to handle submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e0f7fa', color: '#333333' }}>
      {/* Page Title Section */}
      <div
        className="text-center pt-20 pb-12"
        style={{ backgroundColor: '#b2ebf2' }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#333333' }}>
          Contact Us & Safety Information
        </h1>
      </div>

      {/* Contact Form with Animation */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-8 gap-8">
        {/* Contact Form */}
        <form
          className="flex-1 bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-center mb-4" style={{ color: '#333333' }}>
            Get in Touch
          </h2>

          {/* Name Input */}
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
          />

          {/* Email Input */}
          <label className="block text-gray-700 font-medium mt-4">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            required
          />

          {/* Message Input */}
          <label className="block text-gray-700 font-medium mt-4">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-charcoal text-white py-2 rounded hover:bg-blue-500 transition duration-200"
            style={{
              backgroundColor: '#333333',
            }}
          >
            Submit
          </button>
        </form>

        {/* Lottie Animation */}
        <div className="flex-1 flex justify-center items-center">
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ height: 400, width: 400 }}
          />
        </div>
      </div>

      {/* Confirmation Message */}
      {submitted && (
        <div className="mt-6 max-w-md mx-auto bg-green-100 p-4 text-green-700 rounded-lg shadow">
          <p className="text-center font-medium">
            Thank you for reaching out! We will get back to you as soon as possible.
          </p>
        </div>
      )}

      {/* Helpline Numbers */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-charcoal mb-4">Emergency Helplines in India</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>National Disaster Helpline:</strong> 1078</li>
          <li><strong>Police:</strong> 100</li>
          <li><strong>Ambulance:</strong> 102</li>
          <li><strong>Fire:</strong> 101</li>
          <li><strong>Flood Control Room:</strong> 1070</li>
          <li><strong>Child Helpline:</strong> 1098</li>
          <li><strong>Women Helpline:</strong> 181</li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className="py-6 mt-10 text-center" style={{ backgroundColor: '#333333', color: '#ffffff' }}>
        <p className="text-sm">Stay safe and prepared. For any assistance, contact our helpline or fill out the form above.</p>
      </div>
    </div>
  );
}

export default Contact;