import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();


const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticateUser = async () => {
    const tokenInStorage = localStorage.getItem("authToken");
    console.log("Here is the token from the local storage", tokenInStorage);
    if (tokenInStorage) {
      // we make a call to the server to check if the token is valid. Delete line below when we call 'data'

      const { data } = await axios.get("http://localhost:5005/auth/verify", {
        headers: { authorization: `Bearer ${tokenInStorage}` },
      });
        console.log("From the context, here is the verify response ", data);
        setUser(data.currentUser);
    } else {
      //we will set the user back to null, set isLoading to false, isLogged in to false
    }
  };


  return (
    <AuthContext.Provider value={{ authenticateUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
