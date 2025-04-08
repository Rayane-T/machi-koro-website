import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Play from './pages/Play';
import Download from './pages/Download';
import Contact from './pages/Contact';
import wpmachikoro from './assets/wpmachikoro.png';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div 
          className="min-h-screen bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${wpmachikoro})` }}
        >
          <div className="backdrop-blur-sm bg-white/30 min-h-screen">
            <Navbar />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/play" element={<Play />} />
                <Route path="/download" element={<Download />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App; 