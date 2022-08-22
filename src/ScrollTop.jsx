import React from "react";
import { useEffect, useState } from "react";

function ScrollTop() {
  const [ToTopBtn, setToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 4600) {
        setToTopBtn(true);
      } else {
        setToTopBtn(false);
      }
    });
  }, []);

  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scrolltop">
      {ToTopBtn && (
        <button
          style={{
            position: "fixed",
            top: "70vh",
            right: "5vw",
            bottom: "50px",
            height: "80px",
            width: "80px",
            fontSize: "60px",
            borderRadius: "50%",
            padding: "10px",
            color: "white",
            zIndex: 2000,
            backgroundColor: "black",
            filter: "opacity(0.8)",
            transition: "500ms ease all",
          }}
          onClick={ScrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}

export default ScrollTop;
