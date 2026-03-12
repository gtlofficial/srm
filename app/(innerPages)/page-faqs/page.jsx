import Header from "@/components/headers/Header";
import Footer from "@/components/footers/Footer";
import FaqMain from "@/components/innerpages/FaqMain";
export const metadata = {
  title:
    "SRM || Faq",
  description:
    "SRM - Vehicle Repair Centre.",
};
export default function FaqPage() {
  return (
    <>
      <div className="page-wrapper p-9 uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap">
          <FaqMain  />
        </div>
        <Footer />
      </div>
    </>
  );
}
