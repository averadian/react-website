// Page Imports
import PageBox from '../../Components/PageBox/PageBox';
// Icon Imports
import * as BsIcons from "react-icons/bs";
// Style Imports
import './About.css';

const About = (props) => {
  const { Title, Description, OverlayDown, AccentColor } = props;

  return (
    <PageBox 
      Title={Title} 
      Description={Description}  
      OverlayDown={OverlayDown}
      AccentColor={AccentColor}  
    >
      {/* About Section */}
      <div className="info-section single-section">
        <div className="row align-items-center">
        {/* <!-- Picture part--> */}
          <div className="col-12 col-lg-5 info-img">
            <img className="img-fluid img-thumbnail" src="../../../about-portrait.jpg" alt="About" />
          </div>
          {/* <!-- Content part--> */}
          <div className="col-12 col-lg-7 info-content">
            <div className="content-block">
              <h2 className="content-subtitle" style={{"--accentColor": AccentColor}}>Who am i?</h2>
              <h6 className="content-title">I'm Nicholas Hacault, a student and Full Stack Developer</h6>
              <div className="content-description">
                <p>I am a recently graduated Software Developer from Manitoba with a passion for technology. I believe that computers are the most powerful tool to enhance lives, create positive change worldwide, and bring people together. I take my love for tech and problem-solving skills to make this belief a reality.</p>
              </div>
              <address className="content-info">
                <div className="row">
                  <div className="col-12 col-md-6 single-info"><span>Name:</span>
                    <p>Nicholas Hacault</p>
                  </div>
                  <div className="col-12 col-md-6 single-info"><span>Email:</span>
                    <p><a href="mailto:nhacault7@gmail.com" style={{"--accentColor": AccentColor}}>nhacault7@gmail.com</a></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 single-info"><span>Age:</span>
                    <p>19</p>
                  </div>
                  <div className="col-12 col-md-6 single-info"><span>From:</span>
                    <p>Winnipeg, MB</p>
                  </div>
                </div>
              </address>
              <div className="d-block d-sm-flex align-items-center">
                <a className="btn content-download button-main button-scheme" href="../../../Nicholas Hacault - Resume.pdf" role="button" style={{"--accentColor": AccentColor}} download>Download CV</a>
                <ul className="list-unstyled list-inline content-follow">
                  <li className="list-inline-item">
                    <a href="https://twitter.com/averadian" rel="noreferrer" style={{"--accentColor": AccentColor}}>
                      <BsIcons.BsTwitter className="about-icon" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/nhacault7" rel="noreferrer" style={{"--accentColor": AccentColor}}>
                      <BsIcons.BsInstagram className="about-icon" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/nicholas-hacault-b089741b9/" rel="noreferrer" style={{"--accentColor": AccentColor}}>
                      <BsIcons.BsLinkedin className="about-icon" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/nhacault7" rel="noreferrer" style={{"--accentColor": AccentColor}}>
                      <BsIcons.BsGithub className="about-icon" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.twitch.tv/averadian" rel="noreferrer" style={{"--accentColor": AccentColor}}>
                      <BsIcons.BsTwitch className="about-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageBox>
  );
}

export default About;