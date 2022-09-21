// Page Imports
import PageBox from '../../Components/PageBox/PageBox';
// Style Imports
import './Portfolio.css';

const Portfolio = (props) => {
	const { Title, Description, OverlayDown, AccentColor } = props;

	return (
		<PageBox 
      Title={Title} 
      Description={Description}  
      OverlayDown={OverlayDown}
      AccentColor={AccentColor}  
    ></PageBox>
	);
}

export default Portfolio;