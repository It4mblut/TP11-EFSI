import React, { createContext, useState } from "react";

const defaultTheme = {
  isDarkMode: true,
  bg: "rgb(0,0,59)",
  cardBg: "#1c1c4b",
  text: "#ffffff",
  textSecondary: "#bbb",
  border: "#222",
};

export const ThemeContext = createContext({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    isDarkMode,
    bg: isDarkMode ? "rgb(0,0,59)" : "#f5f5f5",
    cardBg: isDarkMode ? "#1c1c4b" : "#ffffff",
    text: isDarkMode ? "#ffffff" : "#000000",
    textSecondary: isDarkMode ? "#bbb" : "#666",
    border: isDarkMode ? "#222" : "#ddd",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};