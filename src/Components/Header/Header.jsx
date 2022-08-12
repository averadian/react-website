// Package Imports
import { Link } from 'react-router-dom';
// Style Imports
import './Header.css';


const Header = () => {
  return (
    <div className="header-container">
      <div className="header-inner">
        <div className="logo">
          <a href="">
            {/* <img src="https://placekitten.com/g/50/50" alt="" /> */}
            <h1>Averadian</h1>
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
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