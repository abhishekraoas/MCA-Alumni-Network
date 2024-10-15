import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isvisble, setisvisble] = useState(false);

  const toggleVisiblity = () => {
    if (window.pageYOffset > 250) {
      setisvisble(true);
    } else {
      setisvisble(false);
    }
  };

  const scrollOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisiblity);
    return () => {
      window.removeEventListener("scroll", toggleVisiblity);
    };
  }, []);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isvisble ? (
        <button
          onClick={scrollOnTop}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      ) : null}
    </div>
  );
}
