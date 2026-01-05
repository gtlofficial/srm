"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel md:pt-8-5 sm:pt-8 bg-secondary dark:bg-gray-900">
        <div className="max-w-100">
          <div className="section-inner panel py-0">

        

            <div className="items-center gy-4 sm:gy-6 gx-0">
       
              <div className="col-12 lg:col-12 xl:col-12">
                <div
                  className="hero-scene panel rtl:me-6 rtl:ms-n6"
                  data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
                >
                  <div className="panel overflow-hidden">
                    <Image
                      className="d-block dark:d-none w-100"
                      alt="Main hero image"
                      src="/assets/images/homepage/BUMP-SCRATCH-SMASH.jpg"
                      width="3000"
                      height="1200"
                    />
                    <Image
                      className="d-none dark:d-block w-100"
                      alt="Main hero image"
                      src="/assets/images/homepage/BUMP-SCRATCH-SMASH.jpg"
                      width="3000"
                      height="1200"
                    />
                  </div>
                   {/* Content */}
     



        <div
                  className="container position-absolute py-2 bottom-0 start-0 end-0 gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-center rtl:lg:text-end"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
          



                  <Link
                    href={`/page-contact`}
                    className="btn btn-md h-48px lg:h-56px w-150px btn-primary text-white"
                  >
                    Book Now
                  </Link>
 
      </div>

      
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
