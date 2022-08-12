// Page Imports
import Main from './Pages/Main';
import Home from './Pages/Home/Home';
import BlogPosts from './Pages/BlogPosts/BlogPosts';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
// Package Imports
import { Route, Routes } from 'react-router-dom';
// Style Imports
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="blog-posts" element={<BlogPosts />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
