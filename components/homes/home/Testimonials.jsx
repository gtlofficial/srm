"use client";

import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel p-2 xl:p-2">
        <div className="container container-expand">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -200; targets: >*; translateY:[48,0]; opacity:[0,1]; easing:easeOutCubic; duration:450; delay:anime.stagger(100,{start:200});"
            >
              {/* --- Section Header --- */}
              <header className="section-header vstack items-center gap-2 lg:gap-3 text-center">
                <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                  Testimonials
                </span>
                <h2 className="h4 sm:h3 lg:h2 m-0 max-w-650px mx-auto">
                  See what our{" "}
                  <span className="text-primary">
                    happy users
                  </span>{" "}
                  are sharing about us!
                </h2>
              </header>

              {/* --- Swiper Slider --- */}
              <div className="panel w-100">
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1.15}
                  centeredSlides
                  initialSlide={2}
                  className="swiper overflow-unset"
                  breakpoints={{
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                      centeredSlides: false,
                    },
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="px-2 sm:px-2 py-2 panel vstack justify-between gap-2 rounded-2 bg-secondary dark:bg-black shadow-sm hover:shadow-md transition-shadow duration-300">

                        {/* Quote */}
                        <p className="fs-7 lg:fs-7 text-dark dark:text-white">
                          “{testimonial.text}”
                        </p>

                        {/* User Info */}
                        <div className="panel hstack gap-2 mt-3">
                          {testimonial.imgSrc && (
                          <Image
                            src={testimonial.imgSrc}
                            alt={testimonial.name}
                            width={150}
                            height={150}
                            className="w-40px h-40px rounded-circle object-cover"
                          />
                          )}
                          <div className="panel vstack justify-center gap-narrow">
                            {/* Stars */}
                            <ul className="nav-x gap-0 text-warning">
                              {Array(5)
                                .fill()
                                .map((_, starIndex) => (
                                  <li key={starIndex}>
                                    <i className="icon icon-narrow unicon-star-filled" />
                                  </li>
                                ))}
                            </ul>
                            <span className="fw-bold ft-secondary">
                              {testimonial.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
