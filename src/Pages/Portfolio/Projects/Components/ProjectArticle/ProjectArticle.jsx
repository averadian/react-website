// Style Imports
import './ProjectArticle.css';

const ProjectArticle = (props) => {
	const { Title, MinRead, Date, DateTime, ImgUrl } = props;

  return (
  	<article className="main-article">
  	  <header>
    		<div className="post-image">
    	    <div className="featured-image decoration-border">
    	      <div className="image-loader">
    	        <img width="950" height="500" className="fullwidth" alt="" src={ImgUrl} />
    	      </div>
    	  	</div>
    	  </div>
    	  <div className="clear"></div>
    	  <div className="info">
    	    <h1 className="main-title title textcenter">{Title}</h1>
    	    <div className="meta">
    	      <time className="meta-info" dateTime={DateTime}>{Date} </time>
    	      <div className="min-read meta-info" style={{"--accentColor": `${props.AccentColor}`}}>
    	        <span className="count">{MinRead}</span> Min Read
    	    	</div>
    	      <div className="clear"></div>
    	    </div>
    	  </div>
    	</header>
    	<section className="post-content">
    	  <div className="text" style={{"--accentColor": `${props.AccentColor}`}}>
					{props.children}
    	  </div>
    	  <div className="clear"></div>
    	</section>
    </article>
  );
}

export default ProjectArticle