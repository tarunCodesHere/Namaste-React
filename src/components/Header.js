import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/petu-icon.png";
import useOnline from "../hooks/useOnline";
import UserContext from "../context/userContext";

export const Title = () => {
  return (
    <div className="title">
      <a href=".">
        <img className="h-28 p-2 " src={Logo} alt="picture of icon"></img>
      </a>
    </div>
  );
};

const Header = () => {
  const { user } = useContext(UserContext);
  const isOnline = useOnline();
  const [authentication, setAuthentication] = useState(true);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      {<Title />}

      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">Contact</li>
          <li className="px-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to={"/instamart"}>Instamart</Link>
          </li>
        </ul>
      </div>
      <div>{isOnline ? "🟢" : "🔴"}</div>
      <h1 className="p-10 font-bold text-red-900">{user.name}</h1>

      {authentication === true ? (
        <button onClick={() => setAuthentication(false)}>Logout</button>
      ) : (
        <button onClick={() => setAuthentication(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
