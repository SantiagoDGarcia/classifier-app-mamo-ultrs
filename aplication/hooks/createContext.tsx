import { createContext } from "react";

interface contextProps {
  userData: any | null;
  isLoading: [
    isLoading: boolean | null,
    setMaskImg: (e: boolean | null) => void
  ];
  activatedFullScreen: [
    activatedFullScreen: boolean | null,
    setActivatedFullScreen: (e: boolean | null) => void,
    fullScreenIndex: number | null,
    setFullScreenIndex: (e: number | null) => void
  ];
}

const AppContext = createContext<contextProps | null>(null);

export default AppContext;
