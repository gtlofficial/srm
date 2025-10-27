"use client";
import Context from "@/context/Context";
import "../public/assets/css/main.scss";
import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../public/assets/custom.scss";

import { useEffect } from "react";
import MobileMenu from "@/components/headers/component/MobileMenu";
import BacktoTop from "@/components/common/BacktoTop";
import { ParallaxProvider } from "react-scroll-parallax";
import ContactModal from "@/components/modals/ContactModal";
import NewsletterModal from "@/components/modals/NewsletterModal";
import SearchModal from "@/components/modals/SearchModal";
// import { Toaster } from "react-hot-toast"; // ✅ Toast added
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    const observer = new IntersectionObserver(() => {}, {
      threshold: 0,
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <html lang="en" dir="ltr">
      <body>
     
        <Context>
          <ParallaxProvider>{children}</ParallaxProvider>
          <MobileMenu />
          <ContactModal />
          <NewsletterModal />
          <SearchModal />
          <BacktoTop />
           
        </Context>
     
      </body>
    </html>
  );
}
