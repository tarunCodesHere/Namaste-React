export const Title = () => {
  return (
    <div className="title">
      <h1>PETU</h1>
      <a href=".">
        <img src="./images/petu-icon.png" alt="picture of icon"></img>
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      {<Title />}

      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
