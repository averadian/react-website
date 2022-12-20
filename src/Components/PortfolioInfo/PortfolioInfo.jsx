// Style Imports
import './PortfolioInfo.css';

const PortfolioInfo = (props) => {
  const handleOnClick = () => {
		document.getElementById("portfolio-info").classList.toggle("info-card-opened");
		document.getElementById("portfolio-info").classList.toggle("info-card-closed");
	}

	return (
		<div id="portfolio-info" className="info-card info-card-closed info-card-image">
      <div className="info-card-wrap">
        <div className="info-card-container">
          <div className="info-card-content">
            <img src={props.InfoImage} alt="project" />
            <h6 className="content-title">{props.InfoName}</h6>
						<span className="content-more" style={{"--accentColor": `${props.AccentColor}`}}>COMING SOON</span>
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