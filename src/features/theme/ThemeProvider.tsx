import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { setTheme } from "./themeSlice";

type ThemeContextType = {
  mode: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(mode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
