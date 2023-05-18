import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "Dummy Email",
  },
});
export default UserContext;
