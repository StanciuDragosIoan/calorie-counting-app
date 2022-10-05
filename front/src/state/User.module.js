import React, { createContext, useState } from "react";
export const UserContext = createContext();

/*
 * State module for handling User context globally thoroughout our app
 */

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
