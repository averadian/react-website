// Page Imports
import PageBox from '../../Components/PageBox/PageBox';
// Style Imports
import './Blog.css';

const Blog = (props) => {
  const { Title, Description, OverlayDown, AccentColor } = props;

  return (
    <PageBox 
      Title={Title} 
      Description={Description} 
      OverlayDown={OverlayDown}
      AccentColor={AccentColor} 
    >
      <h2 id='blogposts-placeholder'>Coming Soon</h2>
    </PageBox>
  );
}

export default Blog;