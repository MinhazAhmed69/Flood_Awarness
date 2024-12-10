import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    generateRaindrops();
  }, []);

  const generateRaindrops = () => {
    const totalDrops = 100;
    const drops = [];

    for (let i = 0; i < totalDrops; i++) {
      const delay = Math.random() * 2;
      const duration = Math.random() * 3 + 2; // Random duration between 2s and 5s
      const leftPosition = Math.random() * 100;
      const width = Math.random() * 2 + 1; // Width of raindrops

      drops.push(
        <div
          key={i}
          className="absolute bg-blue-400 rounded-full"
          style={{
            left: `${leftPosition}%`,
            width: `${width}px`,
            height: `${Math.random() * 10 + 10}px`, // Random height for drops
            animation: `fall ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }

    setRaindrops(drops);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-teal-500 text-gray-700 relative overflow-hidden">
      {/* Rain Effect */}
      <div className="absolute top-0 left-0 w-full h-full z-10">{raindrops}</div>

      {/* Hero Section */}
      <div className="text-center pt-20 pb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 animate-pulse mb-4">
          Welcome to Flood Awareness Hub
        </h1>
        <p className="text-lg md:text-xl mt-2 text-gray-700 animate-fadeIn">
          Stay informed and prepared with real-time flood detection and alerts. Your safety is our priority.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-6">
          <button className="transition-transform transform hover:scale-110 bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700">
            <Link to="/alerts" className="hover:underline">
              Check Weather & Alerts
            </Link>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-8 bg-gradient-to-r from-blue-100 via-teal-100 to-blue-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Feature 1 */}
          <div className="p-4 bg-blue-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Real-Time Alerts</h3>
            <p className="text-sm text-gray-600">
              Get notified immediately about potential flood risks in your area. Our advanced alert system ensures you stay updated at all times.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-4 bg-blue-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Weather Monitoring</h3>
            <p className="text-sm text-gray-600">
              Track weather patterns, rainfall levels, and river flow conditions with our accurate weather monitoring tools.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-4 bg-blue-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Community Support</h3>
            <p className="text-sm text-gray-600">
              Connect with emergency services, relief groups, and fellow community members during critical times.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="p-4 bg-blue-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Flood Risk Maps</h3>
            <p className="text-sm text-gray-600">
              Access interactive maps showing flood-prone areas, evacuation routes, and safe zones in your region.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="p-4 bg-blue-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Safety Guidelines</h3>
            <p className="text-sm text-gray-600">
              Learn how to prepare for floods, protect your family, and stay safe during emergencies with our comprehensive safety resources.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="p-4 bg-blue-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Custom Alerts</h3>
            <p className="text-sm text-gray-600">
              Set preferences for alerts based on your location and risk levels. Tailor notifications to suit your needs.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">About Flood Awareness Hub</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Flood Awareness Hub, our mission is to save lives by providing accurate, timely, and actionable information about flood risks. 
          By leveraging the latest technology and data, we empower individuals and communities to make informed decisions and stay prepared.
          Our platform is built with the vision of creating safer, more resilient communities across the globe.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Whether you are monitoring the weather, planning for emergencies, or seeking support during a flood, we are here to assist you at every step. 
          Together, we can mitigate the impact of floods and ensure a safer future for everyone.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-200 to-teal-300 py-8 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Assistance?</h2>
          <p className="text-lg text-white mb-6">
            If you have any questions or need help, feel free to reach out to us. Our support team is available 24/7.
          </p>
          <Link
            to="/contact"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-transform transform hover:scale-110"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
