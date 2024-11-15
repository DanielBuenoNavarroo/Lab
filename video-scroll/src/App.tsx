import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect, useRef } from "react";
import { Power3, TweenMax } from "gsap";

function App() {
  const logoItem = useRef(null);

  useEffect(() => {
    TweenMax.to(logoItem.current, 1.5, {
      opacity: 1,
      y: -50,
      ease: Power3.easeInOut,
    });
  }, []);
  return (
    <>
      <div>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img src={reactLogo} className="logo react" alt="React logo" ref={logoItem} />
        </a>
      </div>
    </>
  );
}

export default App;
