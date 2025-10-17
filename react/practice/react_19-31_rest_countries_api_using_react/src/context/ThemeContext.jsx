import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();
// we we pass a value here inside create context and also pass a value inside ThemeContext.Provider and console log it, then we will see the value inside ThemeContext.Provider as it is more precedent. If there is no value there, then we see this value as output.

export function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return <ThemeContext.Provider value={[isDark, setIsDark]}>{children}</ThemeContext.Provider>
}
