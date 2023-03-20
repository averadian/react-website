const CaptionImageBlock = (props) => {
  const { Url, ImgUrl, ImgAlt, CaptionText } = props;

  return (
    <figure className="wp-block-image size-medium_large">
    	<a href={Url} target="_blank" rel="noopener noreferrer">
    	  <img width="768" height="432" alt={ImgAlt} src={ImgUrl} />
    	</a>
    <figcaption>{CaptionText}</figcaption>
    </figure>
  );
}

export default CaptionImageBlock;