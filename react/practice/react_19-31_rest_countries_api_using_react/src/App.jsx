import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

const App = () => {


  return (
    <>
    {/* Wrap everything with theme provider */}
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
