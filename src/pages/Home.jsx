import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    generateRaindrops();
  }, []);

  const generateRaindrops = () => {
    const totalDrops = 100; // Number of raindrops
    const drops = [];

    for (let i = 0; i < totalDrops; i++) {
      const leftPosition = Math.random() * 100; // Random horizontal position
      const delay = Math.random() * 5; // Random animation delay
      const duration = Math.random() * 3 + 2; // Animation duration (2s to 5s)
      const size = Math.random() * 2 + 1; // Random size of raindrops

      drops.push(
        <div
          key={i}
          style={{
            position: 'absolute',
            top: '-10%', // Start slightly above the screen
            left: `${leftPosition}%`,
            width: `${size}px`,
            height: `${size * 8}px`,
            backgroundColor: 'rgba(135, 206, 250)', // Light SkyBlue color with 50% opacity
            borderRadius: '50%',
            animation: `fall ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }

    setRaindrops(drops);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e0f7fa', color: '#333333' }}>
      {/* Raindrops */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {raindrops}
      </div>

      {/* Hero Section */}
      <div className="text-center pt-20 pb-12" style={{ backgroundColor: '#b2ebf2' }}>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#333333' }}>
          Welcome to Flood Awareness Hub
        </h1>
        <p className="text-md md:text-lg mt-2" style={{ color: '#4f4f4f' }}>
          Stay informed and prepared with real-time flood detection and alerts. Your safety is our priority.
        </p>
        {/* Call-to-Action Button */}
        <div className="mt-6">
          <Link
            to="/alerts"
            className="px-6 py-3 rounded-md shadow-md hover:shadow-lg transition"
            style={{
              backgroundColor: '#333333',
              color: '#ffffff',
              transition: 'background-color 0.3s ease',
            }}
          >
            Check Weather & Alerts
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold text-center mb-6" style={{ color: '#333333' }}>
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Card */}
          {[
            {
              title: 'Real-Time Alerts',
              description:
                'Get notified immediately about potential flood risks in your area.',
            },
            {
              title: 'Weather Monitoring',
              description:
                'Track weather patterns, rainfall levels, and river conditions accurately.',
            },
            {
              title: 'Community Support',
              description:
                'Connect with emergency services and community relief groups.',
            },
            {
              title: 'Flood Risk Maps',
              description:
                'Access interactive maps showing flood-prone areas and evacuation routes.',
            },
            {
              title: 'Safety Guidelines',
              description:
                'Learn how to prepare for floods and protect your family effectively.',
            },
            {
              title: 'Custom Alerts',
              description:
                'Set alert preferences based on location and risk levels.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-md shadow hover:shadow-lg transition-shadow"
              style={{ backgroundColor: '#ffffff', color: '#333333' }}
            >
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm" style={{ color: '#4f4f4f' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div
        className="max-w-5xl mx-auto px-6 py-8 rounded-md shadow-md mt-10"
        style={{ backgroundColor: '#b2ebf2' }}
      >
        <h2 className="text-lg font-bold text-center mb-4" style={{ color: '#333333' }}>
          About Flood Awareness Hub
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: '#4f4f4f' }}>
          At Flood Awareness Hub, our mission is to save lives by providing
          accurate, timely, and actionable information about flood risks. By
          leveraging the latest technology and data, we empower individuals and
          communities to stay prepared. Our vision is to create safer, more
          resilient communities worldwide.
        </p>
      </div>

      {/* Contact Section */}
      <div className="py-8 mt-10" style={{ backgroundColor: '#333333' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg font-bold mb-4" style={{ color: '#ffffff' }}>
            Need Assistance?
          </h2>
          <p className="text-sm mb-6" style={{ color: '#b2ebf2' }}>
            If you have any questions or need help, feel free to reach out to
            us. Our support team is available 24/7.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundColor: '#b2ebf2',
              color: '#333333',
              transition: 'transform 0.3s ease',
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
