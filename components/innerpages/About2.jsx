import { panelsData } from "@/data/facts";
import React from "react";
import Image from "next/image";

export default function About2() {
  return (
    <div
      id="about_us"
      className="about-us section panel overflow-hidden"
      data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
      
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 mb-4">Our Promise</h2>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
               We believe in complete honesty and transparency — values that define how we operate. At SRM, we treat every vehicle as if it were our own, ensuring every repair meets the highest standards of safety, durability, and finish. We prioritise quality, speed, and care, providing each customer with a seamless and stress-free experience.
              </p>
                <h2 className="h3 lg:h2 mb-4">Our Facilities</h2>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
              Our state-of-the-art, F1-inspired workshop is purpose-built for efficiency and excellence. Each stage of the process — strip, prep, paint, build, and wash — has its own dedicated station, allowing us to work with precision and consistency.
We operate a professional spray booth and oven system to achieve superior paint finishes and long-lasting results.
              </p>

             <h2 className="h3 lg:h2 mb-4">Why Choose SRM</h2>
                  <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">✅ Over 25 years of professional experience<br></br>
✅ Approved materials for lasting durability<br></br>
✅ Lifetime guarantee on all repair work<br></br>
✅ Friendly, customer-first service<br></br>
✅ Courtesy vehicles available<br></br>
✅ Efficient workflow using advanced technology</p>
                 <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">At SRM Vehicle Repair Centre, our mission is simple — to deliver high-quality repairs, exceptional service, and lasting results. Whether you’ve had an accident, need a respray, or just want to restore your vehicle’s appearance, we’re here to help.</p>
                 <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">📞 Call us today or book an appointment to visit our workshop — and see why our quality is heard across the country.</p>








            
              {/* <div className="panel mt-6">
                <div className="row child-cols-6 lg:child-cols-4 justify-center g-3 col-match">
                  {panelsData.map((panel, index) => (
                    <div key={index}>
                      <div className="panel vstack gap-1">
                        <h4 className="h2 xl:h1 m-0">
                          <span data-anime={panel.animationData}>
                            {panel.value}
                          </span>
                          {panel.suffix && panel.suffix}
                        </h4>
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 text-nowrap">
                          {panel.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
