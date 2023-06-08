import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [active, setActive] = useState(1);

  return (
    <UserContext.Provider value={{ active, setActive }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
