"use client";
import { useEffect, useState } from "react";
 

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setScrollingUp(currentScrollPos <= 80 ? false : isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header
     className={`uc-header header-default uc-navbar-sticky-wrap z-999 uc-sticky uc-sticky-below uc-sticky-fixed headerFixed ${
        scrollingUp ? "scroll-up" : ""
      }`}
      data-uc-sticky="start: 100vh; show-on-up: false; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    >
   
    </header>
  );
}
