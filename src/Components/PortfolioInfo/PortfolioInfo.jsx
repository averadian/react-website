// Package Imports
import { useNavigate } from 'react-router-dom';
// Style Imports
import './PortfolioInfo.css';

const PortfolioInfo = (props) => {

  const { OverlayDown } = props;

  const navigate = useNavigate();

  const handleOnClick = () => {
		document.getElementById("portfolio-info").classList.toggle("info-card-opened");
		document.getElementById("portfolio-info").classList.toggle("info-card-closed");
	}

  const onClick = (e) => {
    OverlayDown();

    setTimeout(() => {  
      navigate("pibag");
    }, 500);
    
  }

	return (
		<div id="portfolio-info" className="info-card info-card-closed info-card-image">
      <div className="info-card-wrap">
        <div className="info-card-container">
          <div className="info-card-content">
            <img className="info-card-picture" src={props.InfoImage} alt="project" onClick={onClick} />
            <div className="info-card-text-wrap">
              <h6 className="content-title">{props.InfoName}</h6>
						  <span className="content-more" onClick={onClick} style={{"--accentColor": `${props.AccentColor}`}}>More Info</span>
            </div>
          </div>
          <div className="info-card-close" onClick={handleOnClick}>
            <span className="btn-line"></span>
          </div>
        </div>
      </div>
    </div>
	);
}

export default PortfolioInfo;