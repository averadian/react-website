import TitleBlock from "./TitleBlock";

const ListBlock = (props) => {
  const { Title, Content } = props;

  return (
    <ul>
      {Content.map((element, index) => (
        <div key={element}>
          {Title ? <TitleBlock Content={Title[index][0]} Url={Title[index][1]} /> : <></>}
          <li>{element}</li>
        </div>
      ))}
    </ul>
  );
}

export default ListBlock;