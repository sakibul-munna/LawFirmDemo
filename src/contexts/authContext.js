import React, { useState, useEffect, useContext } from "react";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  const logIn = (email, password) => {
    setCurrentUser({ email, password });
  };

  const logOut = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    setCurrentUser(currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, logIn, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
