// Page Imports
import PageBox from '../../Components/PageBox/PageBox';

const BlogPosts = (props) => {
  const { Title, Description, OverlayUp, OverlayDown } = props;

  return (
    <PageBox 
      Title={Title} 
      Description={Description} 
      OverlayUp={OverlayUp} 
      OverlayDown={OverlayDown} 
    />
  );
}

export default BlogPosts;