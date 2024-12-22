import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Dashboard from './components//pages/Dashboard';
import CompareVendors from './components//pages/CompareVendors';
import Navbar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compare-vendors" element={<CompareVendors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;