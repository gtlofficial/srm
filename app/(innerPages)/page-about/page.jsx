import Header from "@/components/headers/Header";

import Footer from "@/components/footers/Footer";
import About from "@/components/innerpages/About";
import About2 from "@/components/innerpages/About2";
import Feedback from "@/components/homes/home/Feedback";
export const metadata = {
  title:
    "SRM || About",
  description:
    "SRM - Vehicle Repair Centre.",
};
export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap">
          <About />
          <About2 />
          <Feedback />
        </div>
        <Footer />
      </div>
    </>
  );
}
