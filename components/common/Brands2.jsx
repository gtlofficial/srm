"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { brands } from "@/data/brands";
import Image from "next/image";

export default function Brands2() {
  const swiperOptions = {
    slidesPerView: 2, // items: 2
    centeredSlides: true, // center: true
    centeredSlidesBounds: true, // center-bounds: true
    breakpoints: {
      // data-uc-swiper-s
      768: {
        slidesPerView: 4, // items: 4
        centeredSlides: false, // center: false
        centeredSlidesBounds: false, // center-bounds: false
      },
      // data-uc-swiper-m
      1024: {
        slidesPerView: 5, // items: 5
        spaceBetween: 80, // gap: 80
      },
    },
  };
 
}
