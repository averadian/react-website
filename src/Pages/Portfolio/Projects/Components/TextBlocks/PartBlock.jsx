const PartBlock = (props) => {
  const { Url, ImgUrl, PartName, ExtraText } = props;


        return (
          <article className="item primary-cat-3 post">
            <a className="thumb dropcap main-effect effect-small image-loader" href={Url} target="_blank" rel="noopener noreferrer">
              <span className="fullimage cover lazy loaded" style={{"backgroundImage": `url(${ImgUrl})`}}></span>
              <span className="fullimage fake-layout cover lazy loaded" style={{"backgroundImage": `url(${ImgUrl})`}}></span>
            </a>
            <div className="info">
              <div className="right">
                <h4 className="title usmall underline-effect" style={{"--accentColor": `${props.AccentColor}`}}>
                  <a href={Url} target="_blank" rel="noopener noreferrer">{PartName}</a>
                </h4>
                <p className="icon">{ExtraText}</p>
              </div>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </article> 
        );
}

export default PartBlock;
