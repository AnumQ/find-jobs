import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const defaultValue = {
  isLiveMode: false,
  isDarkMode: true,
  toggleLiveMode: () => {},
  toggleDarkMode: () => {},
};
const GlobalContext = createContext(defaultValue);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLiveMode, setIsLiveMode] = useState(defaultValue.isLiveMode);
  const [isDarkMode, setIsDarkMode] = useState(defaultValue.isDarkMode);

  const toggleLiveMode = () => setIsLiveMode((prevMode) => !prevMode);
  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      isLiveMode,
      isDarkMode,
      toggleLiveMode,
      toggleDarkMode,
    }),
    [isLiveMode, isDarkMode]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
