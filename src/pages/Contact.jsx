import React, { useState } from 'react';

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
    e.preventDefault(); // Prevent default form submission behavior
    setSubmitted(true); // Set submission state to true
    setFormData({ name: '', email: '', message: '' }); // Clear the form fields
    // Add additional submission logic here if needed (e.g., API call)
  };

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
          Contact Us & Safety Information
        </h1>

        {/* Contact Form */}
        <form
          className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
            Get in Touch
          </h2>

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

          <label className="block text-gray-700 font-medium mt-4">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* Confirmation Message */}
        {submitted && (
          <div className="mt-6 max-w-md mx-auto bg-green-100 p-4 text-green-700 rounded-lg shadow">
            <p className="text-center font-medium">
              Thank you for reaching out! We will get back to you as soon as possible.
            </p>
          </div>
        )}

        {/* Helpline Numbers */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Emergency Helplines in India
          </h2>
          <ul className="list-disc list-inside text-gray-800">
            <li>
              <strong>National Disaster Helpline:</strong> 1078
            </li>
            <li>
              <strong>Police:</strong> 100
            </li>
            <li>
              <strong>Ambulance:</strong> 102
            </li>
            <li>
              <strong>Fire:</strong> 101
            </li>
            <li>
              <strong>Flood Control Room:</strong> 1070
            </li>
            <li>
              <strong>Child Helpline:</strong> 1098
            </li>
            <li>
              <strong>Women Helpline:</strong> 181
            </li>
          </ul>
        </div>

        {/* Flood Safety Tips */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Flood Safety Tips
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Stay informed: Monitor weather updates and warnings through reliable sources.</li>
            <li>
              Prepare an emergency kit: Include water, food, flashlights, batteries, first aid, and
              necessary medicines.
            </li>
            <li>Avoid floodwaters: Stay away from moving or stagnant floodwaters to avoid infections or drowning.</li>
            <li>Turn off electricity: Switch off power sources if water starts entering your home.</li>
            <li>Evacuate early: Move to higher ground as soon as you receive flood warnings.</li>
            <li>Help vulnerable individuals: Assist children, elderly people, and those with disabilities.</li>
            <li>Stay connected: Keep your mobile phone charged and maintain contact with local authorities.</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-gray-600">
          Stay safe and prepared. For any assistance, contact our helpline or fill out the form above.
        </div>
      </div>
    </div>
  );
}

export default Contact;