"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero_header"
      className="position-relative w-100 d-flex align-items-center justify-content-center text-center"
      style={{ minHeight: "100vh", paddingTop: "80px" }} // offset for navbar
    >
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <Image
          src="/assets/images/homepage/BUMP_SCRATCH_SMASH.jpg"
          alt="Car repair banner"
          fill
          priority
          className="object-cover"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container position-absolute bottom-0 start-0 end-0 pt-9 text-white">
        {/* <h1 className="fw-bold text-white display-5 mb-3">
          Reliable Repairs. Fast Service. Trusted Experts.
        </h1>
        <p className="lead mb-4">
          We keep your car running smoothly with expert repair, maintenance,
          and care you can trust.
        </p> */}
        <Link
          href="/page-contact"
          className="btn btn-light fw-bold px-8 mb-4"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
