// Package Imports
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
// Style Imports
import './Header.css';

const Header = (props) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
    </motion.div>
    
  );
}

export default Header;