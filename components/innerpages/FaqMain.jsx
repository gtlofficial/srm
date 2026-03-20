import { panelsData } from "@/data/facts";
import React from "react";
import Accordion from "../common/Accordion";

export default function FaqMain() {
  return (
    <div
      id="faqs-main"
      className="faqs section panel overflow-hidden"
      data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
      
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 mb-4">FAQs</h2>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                Everything you need to know about the product and services.
                    Can’t find the answer you’re looking for?
              </p>
              <br></br>
              <div className="panel pb-6">
                                <ul className="gap-0" data-uc-accordion="targets: > li;">
                                  <Accordion parentClass="panel py-2" />
                                </ul>
                              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
