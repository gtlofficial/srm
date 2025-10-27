import { features } from "@/data/features";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function KeyFeatures() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden bg-gray-900 uc-dark"
    >
      <div className="section-outer panel py-6 xl:py-9 dark:bg-gray-800">
        <div className="container sm:max-w-md lg:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                Review quickly and confidently using
                <span className="text-primary"> SRM.</span>
              </h2>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {features.map((feature, index) => (
                    <div key={index}>
                      <div className="feature-item text-center panel p-2 border dark:hover:text-primary rounded hover:bg-white dark:hover:bg-secondary dark:text-white hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-200px">
                          <div className="vstack justify-between gap-2 h-100">
                            <Image
            src={feature.icon}
            alt={feature.title}
            width={30}
            height={30}
            className="mb-3 mx-auto block"
          />
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h6 m-0 text-inherit">
                                  {feature.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
