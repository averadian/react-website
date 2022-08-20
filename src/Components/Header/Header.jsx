// Package Imports
import { Link, useNavigate } from 'react-router-dom';
// Style Imports
import './Header.css';

const Header = (props) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    props.OverlayUp();
    navigate(`${e.target.id}`);
  }

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
              <div id="blog-posts" onClick={onClick} style={{"--accentColor": `${props.AccentColor}`}}>Blog Posts</div>
            </li>
            <li>
              <div id="about" onClick={onClick} style={{"--accentColor": `${props.AccentColor}`}}>About</div>
            </li>
            <li>
              <div id="contact" onClick={onClick} style={{"--accentColor": `${props.AccentColor}`}}>Contact</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;