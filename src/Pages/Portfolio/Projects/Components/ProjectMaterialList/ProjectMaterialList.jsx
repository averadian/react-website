// Style Imports
import './ProjectMaterialList.css';

const ProjectMaterialList = (props) => {
  return (
    <aside id="sidebar" className="grid-30 no-sidebar sticky-enabled">
    	<div className="sidebar-wrapper default-sidebar">
    	  <section className="widget widget_epcl_thumbs">
    	    <h4 className="widget-title title medium bordered">
    	      <span className="bg">Part List</span>
    	      <span className="border" style={{"--accentColor": `${props.AccentColor}`}}></span>
    	    </h4>
    	    {props.children}
          <div className="clear"></div>
        </section>
      </div>
    </aside>
  );
}

export default ProjectMaterialList;