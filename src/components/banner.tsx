import React from "react";
import "../css/top-banner.css";

const TopBanner: React.FC = () => {
  return (
    <div className="top-banner">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Orbitron&family=Lobster&display=swap"
      ></link>
      <h1>
        <span className="light">Geo</span>
        <span className="dark">Nexus</span>
      </h1>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4a6 6 0 0 0-6 6c0 3.313 2.687 6 6 6s6-2.687 6-6-2.687-6-6-6zm0 10c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4zM21 20.707l-5.707-5.707a7.967 7.967 0 0 0 1.268-4.707c0-4.418-3.582-8-8-8S1.707 6.582 1.707 11 5.289 19 9.707 19c1.657 0 3.27-.622 4.442-1.745L20.707 21.707a1 1 0 0 0 1.415-1.415z"
              fill="#fff"
            />
          </svg>
        </button>
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
