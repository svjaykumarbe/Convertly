import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Dashboard from './components//pages/Dashboard';
import CompareVendors from './components//pages/CompareVendors';
import Navbar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import Register from '../src/components/Auth/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compare-vendors" element={<CompareVendors />} />
        <Route path="/register" element={<Register />} /> {/* Add the Register route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;