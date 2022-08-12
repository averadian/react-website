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
            <h3 className="name">Nicholas <span className="colored">Hacault</span></h3>
            <h3 className="job">
              <span className="headline">
                <span className="hl1">Creative </span>
                <span className="hl2">
                  <b className="is-visible">Designer</b>
                  {/* <b className="is-hidden">Developer</b>
                  <b className="is-hidden">Freelancer</b> */}
                </span>
              </span>
            </h3>
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