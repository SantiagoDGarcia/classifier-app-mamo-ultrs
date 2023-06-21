import React, { useState } from "react";
import AppContext from "./createContext";

const AppContextProvider = (props: {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(false);

  return (
    <AppContext.Provider
      value={{
        userData: [user, setUser],
        isLoading: [loading, setLoading],
        // user: { name: [user, setUser] },
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
