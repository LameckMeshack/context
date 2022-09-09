import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,

  setloggedIn: () => {},
});
export default AuthContext;
