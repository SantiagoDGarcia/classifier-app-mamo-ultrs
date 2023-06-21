import { createContext } from "react";

interface contextProps {
  userData: any | null;
  isLoading: [
    isLoading: boolean | null,
    setMaskImg: (e: boolean | null) => void
  ];
  // createdAt: Date | null,
  // organization: string | null
}

const AppContext = createContext<contextProps | null>(null);

export default AppContext;
