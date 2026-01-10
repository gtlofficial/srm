"use client";
import { closePortfolioModal } from "@/utlis/togglePortfolioModel";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PortfolioModal({ project }) {
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target) &&
        elementRef.current &&
        !elementRef.current.contains(event.target)
      ) {
        closePortfolioModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close modal on pathname change
  useEffect(() => {
    closePortfolioModal();
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      id="uc-portfolio-modal"
      data-uc-modal="overlay: true"
      className="uc-modal overflow-auto"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog w-full bg-white text-dark dark:bg-gray-900 dark:text-white rounded-3 p-1"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
          type="button"
          onClick={closePortfolioModal}
        >
          <i className="unicon-close" />
        </button>

        {/* Only render content if project exists */}
        {project && (
         
          
                <div className="position-relative w-100 ratio-1 rounded-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="d-block img-fluid m-auto w-auto transition-scale"
                    style={{}}
                  />
                 
                   
           
          </div>
        )}
      </div>
    </div>
  );
}
