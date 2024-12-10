import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Weather from './pages/Weather';
import News from './pages/News';
import Map from './pages/MapComponent';
import Contact from './pages/Contact';
import Alert from './pages/Alerts';
import Donation from './pages/Donation'; // Import your new Donation page

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-blue-50">
        {/* Navbar */}
        <Navbar />
        
        {/* Routes */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/news" element={<News />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/alerts" element={<Alert />} />
            <Route path="/donation" element={<Donation />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;