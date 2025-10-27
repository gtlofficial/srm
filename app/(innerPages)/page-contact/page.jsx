import Header from "@/components/headers/Header";
import Footer from "@/components/footers/Footer";
import Contact from "@/components/innerpages/Contact";
import ContactLinks from "@/components/innerpages/ContactLinks";
export const metadata = {
  title:
    "SRM  || Contact",
  description:
    "SRM - Vehicle Repair Centre.",
};
export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap">
          <Contact />

          <ContactLinks />
        </div>
        <Footer />
      </div>
    </>
  );
}
