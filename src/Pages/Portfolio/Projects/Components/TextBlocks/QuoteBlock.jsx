const QuoteBlock = (props) => {
  const { Content, Cite } = props;

  return (
    <blockquote className="wp-block-quote">
    	<p>{Content}</p>
    	<cite>{Cite}</cite>
    </blockquote>
  );
}

export default QuoteBlock;