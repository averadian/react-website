// Page Imports
import PageBox from '../../Components/PageBox/PageBox';
// Style Imports
import './Contact.css';

const Contact = (props) => {
  const { Title, Description, OverlayUp, OverlayDown } = props;

  return (
    <PageBox 
      Title={Title} 
      Description={Description} 
      OverlayUp={OverlayUp} 
      OverlayDown={OverlayDown} 
    >
      <h2 id='contact-placeholder'>Coming Soon</h2>
    </PageBox>
  );
}

export default Contact;