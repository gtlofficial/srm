import Header from "@/components/headers/Header";

import Footer from "@/components/footers/Footer";
import Breadcumb from "@/components/otherPages/Breadcumb";
import SignIn2 from "@/components/otherPages/SignIn2";
export const metadata = {
  title:
    "Signin 2 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function SigninPage2() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <SignIn2 />
        </div>
        <Footer />
      </div>
    </>
  );
}
