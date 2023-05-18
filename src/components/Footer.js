import UserContext from "../context/userContext";
import { useContext } from "react";
const Footer = () => {
  const { user } = useContext(UserContext);
  const { name, email } = user;
  return (
    <div className="footer" style={{ backgroundColor: "yellow" }}>
      <h1 className="p-10 m-10 font-bold text-center">
        This site is developed by developer {name}- {email}
      </h1>
    </div>
  );
};

export default Footer;
