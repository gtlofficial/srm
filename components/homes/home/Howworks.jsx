import React from "react";
import Image from "next/image";
import AccordionList from "@/components/common/AccordionList";

export default function Howworks() {
  return (
    <section
      id="how_it_works"
      className="how-it-works section panel overflow-hidden rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white"
    >
      <div className="section-outer panel">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel pt-6">

            {/* --- About Us Block --- */}
            <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
              {/* Image */}
              <div
                className="lg:order-2"
                data-anime="onview: -100; translateX: [-48,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:300;"
              >
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-top-start-0">
                  <Image
                    src="/assets/images/homepage/img-w-text1.jpg"
                    alt="About SRM Auto Services"
                    width={1200}
                    height={1200}
                    className="media-cover image"
                  />
                </figure>
              </div>

              {/* Text */}
              <div
                className="order-1"
                data-anime="onview: -100; translateX:[48,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:400;"
              >
                <div
                  className="panel vstack items-start gap-2 lg:gap-3 my-2 lg:my-0"
                  data-anime="onview: -100; targets: >*; translateY:[16,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:anime.stagger(100,{start:500});"
                >
                  <h3 className="h3 lg:h2 m-0">About SRM Vehicle Repair Centre</h3>
                  <p className="fs-6 lg:fs-5">
                    At SRM Vehicle Repair Centre, we specialise in bringing vehicles back to life and perfecting every imperfection. From spraying a bike frame to carrying out a full respray on a van — and everything in between — our team delivers precision, passion, and unmatched quality in every job we do.<br></br>
                    Based in Oldham, we proudly serve customers across the North West and beyond. With over 25 years of industry experience, our reputation for high-quality workmanship is recognised nationwide. We follow approved repair guidelines and use only premium materials designed to withstand the UK’s challenging climate and road conditions.
                  </p>
                  <a className="btn btn-md btn-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" href="/page-about">Learn More</a>

                </div>
              </div>
            </div>

            {/* --- FAQ Block --- */}
            <div className="row pb-6 child-cols-12 lg:child-cols-6 col-match items-center g-0 mt-6">
              {/* Image */}
              <div
                data-anime="onview: -100; translateX:[-48,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:100;"
              >
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-bottom-end-0">
                  <Image
                    src="/assets/images/homepage/img-w-text2.jpg"
                    alt="FAQ illustration"
                    width={1200}
                    height={1200}
                    className="media-cover image"
                  />
                </figure>
              </div>

              {/* FAQ Accordion */}
              <div
                data-anime="onview: -100; translateX:[48,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:200;"
              >
                <div
                  className="panel vstack items-start gap-2 lg:gap-3 md:p-4 my-2 lg:my-0"
                  data-anime="onview: -100; targets: >*; translateY:[16,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:anime.stagger(100,{start:500});"
                >
                  <h3 className="h3 lg:h2 m-0">Frequently Asked Questions</h3>
                  <div className="panel w-100 mt-2 lg:mt-4">
                    <ul
                      className="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                      data-uc-accordion="collapsible: false"
                      style={{ "--divider-gap": "40px" }}
                    >
                      <AccordionList limit={4} />
                    </ul>
                    <a className="btn btn-md btn-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" href="/page-faqs">Load More</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
