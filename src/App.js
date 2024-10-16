// src/App.js
import React from 'react';

import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Herosection/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
const App = () => {
  return (
    <div>


      <HeroSection />
      <Dashboard />
      <About />
    </div>
  );
};

export default App;
