// Package Imports
import { Link } from 'react-router-dom';
// Icon Imports
import * as BsIcons from "react-icons/bs";
// Style Imports
import './Home.css';

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="active">
        <div className="home">
          <div className="home-inner">
            <h3 className="name">Nicholas <span className="last-name non-colored" style={{"--accentColor": `${props.AccentColor}`}}>Hacault</span><span className="last-name colored" style={{"--accentColor": `${props.AccentColor}`}}>Hacault</span></h3>
            <div className="button">
              <Link to="contact" style={{"--accentColor": `${props.AccentColor}`}}>Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;