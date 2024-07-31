import React from "react";
import "../css/top-banner.css";

const TopBanner: React.FC = () => {
  return (
    <div className="top-banner">
      <h1>
        <span className="light">Travel</span>
        <span className="dark"> Co</span>
      </h1>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">🔍</button>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </div>
  );
};

export default TopBanner;
