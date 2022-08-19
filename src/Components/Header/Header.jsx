// Package Imports
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
// Style Imports
import './Header.css';

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-inner">
        <div className="logo">
          <Link to="home">
            <h1>Averadian</h1>
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="blog-posts">Blog Posts</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;