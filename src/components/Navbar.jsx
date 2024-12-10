import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animationData from '../animations/Animation - 1733855543717.json';

function Navbar() {
  return (
    <nav
      className="px-6 py-4"
      style={{
        backgroundColor: '#333333', // Charcoal background
        color: '#b2ebf2', // Pale blue text
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-4">
          {/* Lottie Animation as Logo */}
          <div className="w-16 h-16 flex-shrink-0">
            <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Brand Name */}
          <h1 className="text-xl font-bold" style={{ color: '#b2ebf2' }}>
            FloodGuard HQ
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
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
          {/* New Donation Page Link */}
          <Link
            to="/donate"
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