 
import Footer from "@/components/footers/Footer";
 
import Header from "@/components/headers/Header";
 
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
     
        </main>
        <Footer />
      </div>
    </>
  );
}
