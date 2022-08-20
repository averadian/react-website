// Package Imports
import { Link } from 'react-router-dom';
// Style Imports
import './Header.css';

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-inner">
        <div className="logo">
          <Link to="/">
            <h1>Averadian</h1>
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="blog-posts" style={{"--accentColor": `${props.AccentColor}`}}>Blog Posts</Link>
            </li>
            <li>
              <Link to="about" style={{"--accentColor": `${props.AccentColor}`}}>About</Link>
            </li>
            <li>
              <Link to="contact" style={{"--accentColor": `${props.AccentColor}`}}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;