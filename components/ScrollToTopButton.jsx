"use client";

import { useEffect, useState } from "react";
import ChevronUp from "@/public/assets/icons/layout/arrow-up.svg";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      className={`fixed bottom-4 right-1 rounded-[6px] outline-none transition-opacity duration-100 inline-block p-[.2rem] bg-primary hover:bg-primaryDark ${
        isVisible ? "opacity-0" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp className="w-8 h-8 text-white" />
    </button>
  );
};

export default ScrollToTopButton;
