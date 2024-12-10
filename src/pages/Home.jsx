import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-teal-500 text-gray-700">
      {/* Hero Section */}
      <div className="text-center pt-20 pb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 animate-pulse mb-4">Welcome to Flood Awareness Hub</h1>
        <p className="text-lg md:text-xl mt-2 text-gray-700 animate-fadeIn">Stay informed and prepared with real-time flood detection and alerts.</p>
        
        {/* Call-to-Action Button */}
        <div className="mt-6">
          <button className="transition-transform transform hover:scale-110 bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700">
            Check Weather & Alerts
          </button>
        </div>
      </div>

      {/* Features Section with new background */}
      <div className="max-w-6xl mx-auto px-6 py-8 bg-gradient-to-r from-blue-100 via-teal-100 to-blue-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Feature 1 */}
          <div className="p-4 bg-blue-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Real-Time Alerts</h3>
            <p className="text-sm text-gray-600">Receive up-to-date flood alerts directly to your dashboard.</p>
          </div>
          {/* Feature 2 */}
          <div className="p-4 bg-blue-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Weather Monitoring</h3>
            <p className="text-sm text-gray-600">Stay updated with the latest weather information in your area.</p>
          </div>
          {/* Feature 3 */}
          <div className="p-4 bg-blue-50 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Community Support</h3>
            <p className="text-sm text-gray-600">Connect with local emergency services and community relief groups.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;