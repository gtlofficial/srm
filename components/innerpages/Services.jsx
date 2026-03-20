"use client";

import { featureItems } from "@/data/features";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <section
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            
            {/* --- Section Header --- */}
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY:[48,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:anime.stagger(100,{start:200});"
            >
              <span className="fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-secondary">
                Features
              </span>
              <h2 className="h3 sm:h2 lg:h1 xl:display-6 m-0">Our Services</h2>
              <p className="fs-7 sm:fs-6 lg:fs-5 xl:fs-4 text-opacity-70">
                Comprehensive Vehicle Care
              </p>
            </div>

            {/* --- Feature Cards --- */}
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-2 col-match"
              data-anime="onview: -100; targets: >*; translateY:[48,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:anime.stagger(100,{start:400});"
            >
              {featureItems.map((item, index) => (
                <div key={index} className={item.order}>
                  <Link
                    href={`/page-features`}
                    className="text-decoration-none group"
                  >
                    <div
                      className={`features-item h-auto relative overflow-hidden rounded-2 shadow-sm hover:shadow-md transition-shadow duration-300 ${item.bgClass || ""}`}
                    >
                      {/* Image */}
                      <Image
                        src={item.imgSrc}
                        alt={item.alt}
                        width={400}
                        height={400}
                        className="w-full h-60 object-cover"
                      />

                      {/* Dark Overlay (always visible) */}
                      <div className="absolute inset-0 bg-black/50"></div>

                      {/* Content (always visible) */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black p-4 z-10">
                       
                        <h6 className="h5 m-0">{item.title}</h6>
                         <p className="text-primary"><strong>{item.description}</strong></p>
                        <p className="desc dark:text-white fs-7 xl:fs-6 opacity-90 mt-1">
                          {item.bigDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
