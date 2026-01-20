import { createContext, useState, useEffect } from "react";

// Create a context object
export const ThemeContext = createContext();

function ThemeProvider({ children }) {

  // State to store theme (dark or light)
  const [theme, setTheme] = useState("dark");

  // This runs when theme changes
  useEffect(() => {
    // Add or remove 'dark' class from HTML body
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    // Provide theme data to whole app
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
