const TitleBlock = (props) => {
  const { Content, Url } = props;

  return (
    <>
      {Url ? 
        <a className="underline-effect" href={Url} target="_blank" rel="noopener noreferrer">
          <h3>{Content}</h3>
        </a> : 
        <h3>{Content}</h3>}
    </>
  );
}

export default TitleBlock;