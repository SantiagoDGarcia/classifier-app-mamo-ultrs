import React, { useState } from "react";
import AppContext from "./CreateContext";

export default function AppContextProvider(props: {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(false);
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(0);
  const [activatedFullScreen, setActivatedFullScreen] = useState<
    boolean | null
  >(false);
  return (
    <AppContext.Provider
      value={{
        userData: [user, setUser],
        isLoading: [loading, setLoading],
        activatedFullScreen: [
          activatedFullScreen,
          setActivatedFullScreen,
          fullScreenIndex,
          setFullScreenIndex,
        ],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
