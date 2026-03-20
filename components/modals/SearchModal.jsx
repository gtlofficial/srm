"use client";
 
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SearchModal() {
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeSearchModal();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeSearchModal();
  }, [pathname]);
  return (
    <div
      ref={containerRef}
      id="uc-search-modal"
      className="uc-modal-full uc-modal"
      data-uc-modal="overlay: true"
      style={{ display: "block" }}
      tabIndex={-1}
    >
       
    </div>
  );
}
