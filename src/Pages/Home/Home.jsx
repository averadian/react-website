// Package Imports
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
// Style Imports
import './Home.css';

const Home = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
    </motion.div>
    
  );
}

export default Home;