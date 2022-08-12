import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-inner">
        <div className="logo">
          <a href="">
            {/* <img src="https://placekitten.com/g/50/50" alt="" /> */}
            <h1>Averadian</h1>
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Blog Posts</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;