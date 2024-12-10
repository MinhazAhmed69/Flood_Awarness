import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Weather from './pages/Weather';
import News from './pages/News';
import Map from './pages/MapComponent';
import Contact from './pages/Contact';
import Alert from './pages/Alerts';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area with Routing */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            {/* Route for Home */}
            <Route path="/" element={<Home />} />
            {/* Route for Weather */}
            <Route path="/weather" element={<Weather />} />
            {/* Route for News */}
            <Route path="/news" element={<News />} />
            {/* Route for Map */}
            <Route path="/map" element={<Map />} />
            {/* Route for Contact */}
            <Route path="/contact" element={<Contact />} />
            {/* Route for Alerts */}
            <Route path="/alerts" element={<Alert />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;