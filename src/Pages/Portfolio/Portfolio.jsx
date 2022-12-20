// Page Imports
import PageBox from '../../Components/PageBox/PageBox';
// Package Imports
import { useState } from 'react';
// Component Imports
import PortfolioInfo from '../../Components/PortfolioInfo/PortfolioInfo';
import PortfolioCard from '../../Components/PortfolioCard/PortfolioCard';
// Style Imports
import './Portfolio.css';

const Portfolio = (props) => {
	const { Title, Description, OverlayDown, AccentColor } = props;

  const [infoImage, setInfoImage] = useState("");
  const [infoName, setInfoName] = useState("");

  const handleFilterOnClick = (e) => {
    document.querySelector(".tab-active").classList.toggle("tab-active");
    e.target.classList.toggle("tab-active");
  }

  const handleCardOnClick = (img, name) => {
    setInfoImage(img);
    setInfoName(name);
    let info = document.getElementById("portfolio-info");

	  info.classList.toggle("info-card-closed");
		info.classList.toggle("info-card-opened");
	}

	return (
		<PageBox 
      Title={Title} 
      Description={Description}  
      OverlayDown={OverlayDown}
      AccentColor={AccentColor}  
    >
      <div className="portfolio-section single-section">
        <div className="row">
          {/* Filter nav */}
          <div className="col-12">
            <ul className="list-inline filter-control">
              <li className="list-inline-item tab-active" style={{"--accentColor": `${props.AccentColor}`}} onClick={handleFilterOnClick}>All</li>
              <li className="list-inline-item" style={{"--accentColor": `${props.AccentColor}`}} onClick={handleFilterOnClick}>Projects</li>
            </ul>
          </div>
        </div>
        {/* Thumbnail list */}
        <div className="portfolio-grid row">
          <PortfolioCard AccentColor={AccentColor} Name={"???"} Category={"Projects"} Image={"./item-1.jpg"} AltText={"A backpack with a computer built into it"} HandleOnClick={handleCardOnClick} />
        </div>
        <PortfolioInfo AccentColor={AccentColor} InfoImage={infoImage} InfoName={infoName} />
      </div>
    </PageBox>
	);
}

export default Portfolio;