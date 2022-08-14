// Package Imports
import { Link } from 'react-router-dom';
// Style Imports
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="active">
        <div className="home">
          <div className="home-inner">
            <h3 className="name">Nicholas <span className="last-name non-colored">Hacault</span><span className="last-name colored">Hacault</span></h3>
            <div className="button">
              <Link to="contact">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;