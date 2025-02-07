// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Home from './pages/Home';
import Booking from './pages/Booking';
// Optionally, import About if you plan to use it:
// import About from './pages/About';

// Import shared components (if needed)
// You might use Header and Footer here so they appear on every page
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Optionally include a common header */}
      <Header />
      
      {/* Main routing area */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        {/* Uncomment if you have an About page */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      
      {/* Optionally include a common footer */}
      <Footer />
    </Router>
  );
}

export default App;
