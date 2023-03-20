const CollectionImageBlock = (props) => {
  const { Url, ImgUrl, ImgAlt, CaptionText } = props;

  return (
    <figure className="wp-block-gallery has-nested-images columns-default is-cropped">
      <figure className="wp-block-image size-medium">
        <a download href={Url[0]}>
          <img width="300" height="169" src={ImgUrl[0]} alt={ImgAlt[0]} />
        </a>
      </figure>
      <figure className="wp-block-image size-medium">
        <a download href={Url[1]}>
          <img width="300" height="169" src={ImgUrl[1]} alt={ImgAlt[1]} />
        </a>
      </figure>
      <figure className="wp-block-image size-medium">
        <a download href={Url[2]}>
          <img width="300" height="169" src={ImgUrl[2]} alt={ImgAlt[2]} />
        </a>
      </figure>
      <figure className="wp-block-image size-medium_large">
        <a download href={Url[3]}>
          <img width="768" height="432" src={ImgUrl[3]} alt={ImgAlt[3]} />
        </a>
      </figure>
      <figcaption className="blocks-gallery-caption">{CaptionText}</figcaption>
    </figure>
  );
}

export default CollectionImageBlock;