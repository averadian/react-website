// Style Imports
import './ProjectWrapper.css';

const ProjectWrapper = (props) => {
  return (
    <div id="project-wrapper" className="main grid-container">
  	  <div className="content row">
  	    <div className="page-wrapper">
          <div className="left-content grid-70 np-mobile">
            {props.children[0]}
  	      </div>
  	      {props.children[1]}
  	    </div>
  	  </div>
  	</div>
  );
}

export default ProjectWrapper;