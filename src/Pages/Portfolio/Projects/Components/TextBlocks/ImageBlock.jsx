const ImageBlock = (props) => {
  const { ImgUrl, ImgAlt } = props;

  return (
    <figure className="wp-block-image size-medium_large">
    	<img width="768" height="432" src={ImgUrl} alt={ImgAlt} />
    </figure>
  );
}

export default ImageBlock;