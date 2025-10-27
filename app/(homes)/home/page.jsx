import Brands from "@/components/common/Brands";
import Footer from "@/components/footers/Footer";
// import Topbar from "@/components/headers/Topbar";
import Header from "@/components/headers/Header";
import Features from "@/components/homes/home/Features";
import Hero from "@/components/homes/home/Hero";
import Howworks from "@/components/homes/home/Howworks";
import Hotspot from "@/components/homes/home/Hotspot";
import Testimonials from "@/components/homes/home/Testimonials";
import React from "react";
export const metadata = {
  title:
    "SRM  || Homepage",
  description:
    "SRM - Vehicle Repair Centre.",
};
export default function HomePage() {
  return (
    <>
      <div className=" page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        {/* <Topbar /> */}
        <Header />
        <div id="wrapper" className="wrap"> 
          <Hero />
          <div
            id="companies_sponsores"
            className="companies-sponsores p-2 sm:p-6 section panel overflow-hidden rounded-bottom-3 bg-black text-white dark:bg-gray-700 dark:bg-opacity-50"
          >
            <div className="section-outer panel">
              <div className="container sm:max-w-lg xl:max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
                    data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                  ><h2 className="h3 text-white sm:h2 lg:h1 xl:display-6 m-0">
                We Repair All Makes & Model
              </h2>
                    <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
                      Guaranteed Quality.
                    </p>
                    <div className="block-panel panel">
                      <div className="element-brands text-black dark:text-white mask-x">
                        <Brands />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Features />
          <hr className="w-100 m-0 d-block lg:d-none" />
          <Howworks />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
}
