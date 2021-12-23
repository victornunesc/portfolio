import { useState, createContext, useContext, useCallback } from "react";

const ThemeContext = createContext({});

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("Light");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "Light" ? "Dark" : "Light"),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setCurrentTheme, getOpositeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
