// Component Imports
import Header from './../../Components/Header/Header';
// Icon Imports
import * as BsIcons from "react-icons/bs";
// Style Imports
import './Home.css';


const Home = (props) => {
  return (
    <>
      <Header OverlayUp={props.OverlayUp} AccentColor={props.AccentColor} /> 
      {/* <!-- Home --> */}
      <section className="home-area element-cover-bg" id="home">
      {/* <section className="home-area element-cover-bg" id="home"> */}
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-lg-8 home-content text-center">
              <h1 className="home-name">Nicholas <div className="last-name-container"><span className="non-colored" style={{"--accentColor": `${props.AccentColor}`}}>Hacault</span><span className="colored" style={{"--accentColor": `${props.AccentColor}`}}>Hacault</span></div></h1>
              {/* <h4 className="cd-headline clip home-headline">I’m a <span className="cd-words-wrapper single-headline" style={{width: "163.115px", overflow: "hidden"}}>
                  <b className="is-visible">Developer</b>
                  <b className="is-hidden">Designer</b>
                  <b className="is-hidden">Freelancer</b>
                </span>
              </h4> */}
            </div>
          </div>
        </div>
        <div className="fixed-wrapper">
          {/* <!-- Languages list--> */}
          <div className="fixed-block block-left">
            <ul className="list-unstyled languages-list">
              {/* <li><a href="#0"><span className="single-language">ENG</span></a></li>
              <li><a href="#0"><span className="single-language">FRA</span></a></li> */}
            </ul>
          </div>
          {/* <!-- Social media icons--> */}
          <div className="fixed-block block-right">
            <ul className="list-unstyled social-icons">
              {/* <li><a href="https://twitter.com/averadian" target="_blank" rel="noopener noreferrer"><BsIcons.BsTwitter className="home-icon" /></a></li> */}
              <li><a href="https://www.instagram.com/nhacault7" target="_blank" rel="noopener noreferrer"><BsIcons.BsInstagram className="home-icon" /></a></li>
              <li><a href="https://www.linkedin.com/in/nicholas-hacault-b089741b9/" target="_blank" rel="noopener noreferrer"><BsIcons.BsLinkedin className="home-icon" /></a></li>
              <li><a href="https://github.com/nhacault7" target="_blank" rel="noopener noreferrer"><BsIcons.BsGithub className="home-icon" /></a></li>
              <li><a href="https://www.reddit.com/user/averadian/" target="_blank" rel="noopener noreferrer"><BsIcons.BsReddit className="home-icon" /></a></li>
              <li><a href="https://www.youtube.com/channel/UCUkUePnECQsvs-xmDJgKBsA" target="_blank" rel="noopener noreferrer"><BsIcons.BsYoutube className="home-icon" /></a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;