// Page Imports
import PageBox from '../../Components/PageBox/PageBox';
// Style Imports
import './About.css';

const About = (props) => {
  const { Title, Description, OverlayUp, OverlayDown, AccentColor } = props;

  return (
    <PageBox 
      Title={Title} 
      Description={Description} 
      OverlayUp={OverlayUp} 
      OverlayDown={OverlayDown}
      AccentColor={AccentColor}  
    >
      <h2 id='about-placeholder'>Coming Soon</h2>
    </PageBox>
  );
}

export default About;