import { useState, useEffect } from "react";

export function useWindowSize() {
     // custom-hook topic | showing height and width of the window
      const [windowSize, setWindowSize] = useState({
        width: window.innerHeight,
        height: window.innerHeight,
      });
      useEffect(() => {
        window.addEventListener("resize", () => {
          setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        });
      }, []);

      return windowSize;
}