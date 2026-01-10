"use client";
import { closePortfolioModal } from "@/utlis/togglePortfolioModel";
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
      <div
        ref={modalRef}
        className="d-flex uc-modal-dialog max-w-1000px w-md-100 bg-white dark:bg-gray-900 rounded-1 position-relative"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default p-0 icon-3 btn border-0 position-absolute top-0 end-0 m-2 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
          type="button"
          onClick={closePortfolioModal}
        >
          <i className="unicon-close" />
        </button>

        {project && (
          <div className="d-flex items-center justify-content-center">
            <img
              src={project.image}
              alt={project.title}
              className="img-fluid"
              style={{objectFit: "contain",}}
            />
          </div>
        )}
      </div>
    </div>
  );
}
