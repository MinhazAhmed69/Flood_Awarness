import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className="px-6 py-4"
      style={{
        backgroundColor: '#333333', // Charcoal background
        color: '#b2ebf2', // Pale blue text
      }}
    >
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold" style={{ color: '#b2ebf2' }}>
          FloodGuard HQ
        </h1>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="hover:underline"
            style={{ color: '#b2ebf2' }}
          >
            Home
          </Link>
          <Link
            to="/detection"
            className="hover:underline"
            style={{ color: '#b2ebf2' }}
          >
            Detection
          </Link>
          <Link
            to="/alerts"
            className="hover:underline"
            style={{ color: '#b2ebf2' }}
          >
            Alerts
          </Link>
          <Link
            to="/contact"
            className="hover:underline"
            style={{ color: '#b2ebf2' }}
          >
            Contact
          </Link>
          <Link
            to="/weather"
            className="hover:underline"
            style={{ color: '#b2ebf2' }}
          >
            Weather
          </Link>
          <Link
            to="/news"
            className="hover:underline"
            style={{ color: '#b2ebf2' }}
          >
            News
          </Link>
          <Link
            to="/map"
            className="hover:underline"
            style={{ color: '#b2ebf2' }}
          >
            Map
          </Link>
          {/* Added Donation Link */}
          <Link
            to="/donation"
            className="hover:underline"
            style={{ color: '#b2ebf2' }}
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;