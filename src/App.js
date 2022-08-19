// Page Imports
import Main from './Pages/Main';
import BlogPosts from './Pages/BlogPosts/BlogPosts';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
// Component Imports
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
// Package Imports
import { Route, Routes } from 'react-router-dom';
// Style Imports
import './App.css';

function App() {
  const overlayUp = () => {
    const overlayElement = document.getElementById("page-transition-effect");
    overlayElement.className = "animate-up";
  }

  const overlayDown = () => {
    const overlayElement = document.getElementById("page-transition-effect");
    overlayElement.className = "animate-down";
  }

  return (
    <>
      <LoadingScreen /> 
      <div id="page-transition-effect"></div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="blog-posts" element={<BlogPosts Title={"Blog Posts"} Description={"Showcasing some of my best work"} OverlayUp={overlayUp} OverlayDown={overlayDown} />} />
          <Route path="about" element={<About Title={"About Me"} Description={"Get to know me"} OverlayUp={overlayUp} OverlayDown={overlayDown} />} />
          <Route path="contact" element={<Contact Title={"Get in Touch"} Description={"Feel free to contact me anytime"} OverlayUp={overlayUp} OverlayDown={overlayDown} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
