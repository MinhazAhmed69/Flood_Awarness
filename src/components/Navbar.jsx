import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">FloodGuard HQ</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/detection" className="hover:underline">Detection</Link>
          <Link to="/alerts" className="hover:underline">Alerts</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/weather" className="hover:underline">Weather</Link>
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="/map" className="hover:underline">Map</Link> {/* Added Map */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;