import { useState } from "react";
import Logo from "../images/petu-icon.png";

export const Title = () => {
  return (
    <div className="title">
      <a href=".">
        <img className="logo-img" src={Logo} alt="picture of icon"></img>
      </a>
    </div>
  );
};

const Header = () => {
  const [authentication, setAuthentication] = useState(true);
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
      {authentication === true ? (
        <button onClick={() => setAuthentication(false)}>Logout</button>
      ) : (
        <button onClick={() => setAuthentication(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
