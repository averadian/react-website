// Style Imports
import './PortfolioCard.css';

const PortfolioCard = (props) => {
	return (
		<div className={`single-card col-6 col-lg-4 ${props.Category}`}>
			<div className="portfolio-item" style={{"--accentColor": `${props.AccentColor}`}} onClick={e => props.HandleOnClick(props.Image, props.Name)}>
  	    <div className="portfolio-wrapper">
					<img className="img-fluid" alt={props.AltText} src={props.Image} />
  	      <div className="item-content">
  	        <h6 className="content-title">{props.Name}</h6>
						<span className="content-more">More Info</span>
  	      </div>
  	    </div>
  	  </div>
		</div>
	);
}

export default PortfolioCard;