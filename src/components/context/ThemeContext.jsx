// // ThemeContext.js
// import { createContext, useContext, useState } from "react";

// export const ThemeContext = createContext();

// export const useTheme = () => {
//   return useContext(ThemeContext);
// };

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false); // Default is light mode

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import { createContext } from "react";

export const ThemeContext = createContext()