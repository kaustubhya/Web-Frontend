import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
    const [isDark, setIsDark] = useContext(ThemeContext);
    
    return [isDark, setIsDark];
}

// this syntax also works as it is returning an array
// export const useTheme = () => useContext(ThemeContext)