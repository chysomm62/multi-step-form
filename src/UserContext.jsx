import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [active, setActive] = useState(1);
  // second step
  const [planIndex, setPlanIndex] = useState(0);
  const [isDurationToggled, setIsDurationToggled] = useState(false);

  // third step
  const [selected, setSelected] = useState([]);

  return (
    <UserContext.Provider
      value={{
        active,
        setActive,
        planIndex,
        setPlanIndex,
        isDurationToggled,
        setIsDurationToggled,
        selected,
        setSelected,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
