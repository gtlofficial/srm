"use client";
import Script from "next/script"; // ✅ ADD THIS LINE
import Context from "@/context/Context";
import "../public/assets/css/main.scss";
import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../public/assets/custom.scss";

import { useEffect } from "react";
 
 
import { ParallaxProvider } from "react-scroll-parallax";  
 

export default function RootLayout({ children }) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    const observer = new IntersectionObserver(() => { }, {
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
    
     
        </Context>
      
      </body>
    </html>
  );
}
