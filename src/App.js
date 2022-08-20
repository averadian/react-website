// Page Imports
import Main from './Pages/Main';
import BlogPosts from './Pages/BlogPosts/BlogPosts';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
// Component Imports
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import SiteCustomizer from './Components/SiteCustomizer/SiteCustomizer';
// Package Imports
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Style Imports
import './App.css';

function App() {
  const [accentColor, setAccentColor] = useState("#9200ee");
  const [accentCursor, setAccentCursor] = useState("default");

  const overlayUp = () => {
    const overlayElement = document.getElementById("page-transition-effect").style;
    overlayElement.className = "animate-up";
  }

  const overlayDown = () => {
    const overlayElement = document.getElementById("page-transition-effect");
    overlayElement.className = "animate-down";
  }

  return (
    <div id="cursor-container" style={{"--accentCursor": accentCursor}}>
      <LoadingScreen /> 
      <div id="page-transition-effect"></div>
      <SiteCustomizer SetAccentColor={setAccentColor} SetAccentCursor={setAccentCursor} />
      <Routes>
        <Route path="/" element={<Main AccentColor={accentColor} />}>
          <Route path="blog-posts" element={<BlogPosts Title={"Blog Posts"} Description={"Showcasing some of my best work"} OverlayUp={overlayUp} OverlayDown={overlayDown} AccentColor={accentColor} />} />
          <Route path="about" element={<About Title={"About Me"} Description={"Get to know me"} OverlayUp={overlayUp} OverlayDown={overlayDown} AccentColor={accentColor} />} />
          <Route path="contact" element={<Contact Title={"Get in Touch"} Description={"Feel free to contact me anytime"} OverlayUp={overlayUp} OverlayDown={overlayDown} AccentColor={accentColor} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
