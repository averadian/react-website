// Package Imports
import { useEffect } from 'react';
// Style Imports
import './LoadingScreen.css';

const LoadingScreen = () => {
  useEffect(() => {

    setTimeout(() => {
      const item = document.getElementById("loader-icon-container");
      item.classList.add("fade-out");
    }, 1200);

    setTimeout(() => {
      const item = document.getElementById("loader-container");
      item.classList.add("fade-out");
    }, 2100);

  }, []);

  return (
    <div id="loader-container" className="preloader">
      <div className="preloader-block">
        <div id="loader-icon-container" className="preloader-icon">
          <span className="loading-dot loading-dot-1"></span>
          <span className="loading-dot loading-dot-2"></span>
          <span className="loading-dot loading-dot-3"></span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;