import React from 'react';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import  CardSlider  from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Common from './pages/common';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<CardSlider />}>
          <Route path="about" element={<Common title={"About Us"} />} />
          <Route path="contact" element={<Common title={"Contact Us"} />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Common title={"Page Not Found"} />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
