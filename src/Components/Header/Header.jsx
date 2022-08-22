// Package Imports
import { useNavigate } from 'react-router-dom';
// Style Imports
import './Header.css';

const Header = (props) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.target.id !== "/") {
      props.OverlayUp();
    }
    
    setTimeout(() => {
      navigate(`${e.target.id}`);
    }, 500);
  }

  const onNavClick = (e) => {
    const navButton = document.getElementById("nav-button");
    const navList = document.getElementById("navbarSupportedContent");

    if (navButton.classList.contains("collapsed")) {
      navButton.classList.toggle("collapsed");
      navList.classList.replace("collapse", "collapsing");
      setTimeout(() => {
        navList.style.height = "231px";
      }, 100);
    }
    else {
      navList.style.height = "0px";
      setTimeout(() => {
        navButton.classList.toggle("collapsed");
        navList.classList.replace("collapsing", "collapse");
      }, 250);
    }
  }

  return (
    // <!-- Navbar-->
    <nav className="navbar-expand-md navbar fixed-top" id="navbar">
      <div className="navbar-brand" data-scroll="" onClick={onClick}>
        {/* <!-- Navbar Logo--> */}
        {/* <img className="img-fluid" src="https://placekitten.com/301/70" alt="Logo" /> */}
        <h1 id="/" style={{"--accentColor": props.AccentColor}}>Averadian</h1>
      </div>
      <span id="nav-button" className="navbar-menu ml-auto collapsed" role="button" onClick={onNavClick}>
        <span className="btn-line"></span>
      </span>
      <div className="navbar-collapse order-1 order-lg-0 collapse" id="navbarSupportedContent">
        {/* <!-- Navbar menu--> */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><div id="about" className="nav-link" onClick={onClick} style={{"--accentColor": props.AccentColor}}>About</div></li>
          {/* <li className="nav-item"><div id="resume" className="nav-link" onClick={onClick} style={{"--accentColor": props.AccentColor}}>Resume</div></li> */}
          {/* <li className="nav-item"><div id="portfolio" className="nav-link" onClick={onClick} style={{"--accentColor": props.AccentColor}}>Portfolio</div></li> */}
          {/* <li className="nav-item"><div id="blog" className="nav-link" onClick={onClick} style={{"--accentColor": props.AccentColor}}>Blog</div></li> */}
          <li className="nav-item"><div id="contact" className="nav-link" onClick={onClick} style={{"--accentColor": props.AccentColor}}>Contact</div></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;