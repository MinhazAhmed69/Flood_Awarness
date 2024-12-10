import React from 'react';
import '../src/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Weather from './pages/Weather';
import News from './pages/News';
import Map from './pages/MapComponent';
import Contact from './pages/Contact';
import Alert from './pages/Alerts';
import Detection from './pages/Detection'

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
            <Route path="/detection" element={<Detection />} />  {/* Keep the Detection route */}
            <Route path="/weather" element={<Weather />} />
            <Route path="/news" element={<News />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/alerts" element={<Alert />} />
          
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
