import Brands from "@/components/common/Brands";
import Footer from "@/components/footers/Footer";
// import Topbar from "@/components/headers/Topbar";
import Header from "@/components/headers/Header";
import Features from "@/components/homes/home/Features";
import Hero from "@/components/homes/home/Hero";
import Howworks from "@/components/homes/home/Howworks";
import Hotspot from "@/components/homes/home/Hotspot";
import Testimonials from "@/components/homes/home/Testimonials";
import ContactLinks from "@/components/innerpages/ContactLinks";
import React from "react";
export const metadata = {
  title:
    "SRM || Homepage",
  description:
    "SRM - Vehicle Repair Centre.",
};
export default function HomePage() {
  return (
    <>
      <div className=" page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        {/* <Topbar /> */}
        <Header />
         <main id="main-content">
        <div id="wrapper" className="wrap">
          <Hero />
          
          <Features />
          <hr className="w-100 m-0 d-block lg:d-none" />
          <Howworks />
          <div className="pt-6">
            <ContactLinks />
          </div>
          <Testimonials />
        </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
