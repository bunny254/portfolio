import React, { createContext, useContext, useState } from 'react';

// Create the context
const DarkModeContext = createContext();

// Create a custom hook to use the context
export function useDarkMode() {
  return useContext(DarkModeContext);
}

// Create a provider component
export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
