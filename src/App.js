import React, { useState } from 'react';
import '../src/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Weather from './pages/Weather';
import News from './pages/News';
import Map from './pages/MapComponent';
import Contact from './pages/Contact';
import Alert from './pages/Alerts';
import Detection from './pages/Detection';
import DonationPage from './pages/Donation'; // Import the donation page
import Chatbot from './components/Chatbot';

function App() {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-blue-50">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detection" element={<Detection />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/news" element={<News />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/alerts" element={<Alert />} />
            <Route path="/donate" element={<DonationPage />} /> {/* Added Donation Route */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Chatbot Bubble */}
        <div 
          onClick={toggleChatbot} 
          className="fixed bottom-4 right-4 bg-[#97e7f5] text-[#36454F] p-4 rounded-full cursor-pointer shadow-lg"
        >
          <p>Mira.AI</p>
        </div>

        {/* Conditionally render Chatbot */}
        {chatbotVisible && <Chatbot />}
      </div>
    </Router>
  );
}

export default App;