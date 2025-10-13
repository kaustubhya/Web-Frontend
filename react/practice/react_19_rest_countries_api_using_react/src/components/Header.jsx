import React from "react";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
const [isDark, setIsDark] = useTheme();

  return (
    <header className={`header-container ${isDark && 'dark' }`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", JSON.stringify(!isDark));
            // in localstorage, only the value is stringified and not the key.Key is already a string
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp; &nbsp; {`${isDark ? "Light" : "Dark"} Mode`}
        </p>
      </div>
    </header>
  );
};

export default Header;
