import Header from "@/components/headers/Header";

import Footer from "@/components/footers/Footer";
export const metadata = {
  title:
    "SRM  || Homepage",
  description:
    "SRM - Vehicle Repair Centre.",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap"></div>
        <Footer />
      </div>
    </>
  );
}
