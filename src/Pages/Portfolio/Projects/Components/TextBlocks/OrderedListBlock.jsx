import TitleBlock from "./TitleBlock";

const OrderedListBlock = (props) => {
  const { Title, Content } = props;

  return (
    <ol>
      {Content.map((element, index) => (
        <div key={element}>
          {Title && index === 0 ? <TitleBlock Content={Title[index]} /> : <></>}
          <li>{element}</li>
        </div>
      ))}
    </ol>
  );
}

export default OrderedListBlock;