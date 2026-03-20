"use client";
 
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PortfolioModal({ project }) {
  const pathname = usePathname();
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closePortfolioModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Close modal on route change
  useEffect(() => {
    closePortfolioModal();
  }, [pathname]);

  return (
    <div
      id="uc-portfolio-modal"
      data-uc-modal="overlay: true"
      className="uc-modal d-flex align-items-center justify-content-center p-3"
      style={{ display: "block" }}
      tabIndex={-1}
    >
       
    </div>
  );
}
