const ParagraphBlock = (props) => {
  const { Content, Url, UrlText } = props;

  return (
   <>
      {Url ? 
        <p>{Content} <a className="underline-effect" href={Url} target="_blank" rel="noopener noreferrer">{UrlText}</a></p> : 
        <p>{Content}</p>
      }
    </>
  );
}

export default ParagraphBlock;