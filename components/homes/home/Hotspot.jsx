"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hotspot() {
  const hotspots = [
    {
      id: "engine",
      left: "18%",
      top: "30%",
      title: "Engine Diagnostics",
      description:
        "Advanced engine scanning and diagnostics to find root causes — check engine light, misfires, and performance tuning.",
    },
    {
      id: "battery",
      left: "78%",
      top: "38%",
      title: "Battery & Electrical",
      description:
        "Battery testing, replacement, and electrical system troubleshooting to keep you starting reliably.",
    },
    {
      id: "brakes",
      left: "25%",
      top: "62%",
      title: "Brake Services",
      description:
        "Brake inspection, pad/rotor replacement, and ABS diagnostics for safe stopping power.",
    },
    {
      id: "suspension",
      left: "60%",
      top: "64%",
      title: "Suspension & Alignment",
      description:
        "Shock and strut replacement, steering repairs and 4-wheel alignment to restore ride comfort and handling.",
    },
    {
      id: "ac",
      left: "68%",
      top: "20%",
      title: "AC & Climate Control",
      description:
        "Complete HVAC service: recharge, leak check, and compressor repair so your cabin stays comfortable.",
    },
    {
      id: "body",
      left: "45%",
      top: "12%",
      title: "Body & Paint",
      description:
        "Minor dent repair, paint touch-ups, and full bodywork to keep your car looking its best.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Explore Our Services
      </h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Car Image */}
        <div className="relative w-full h-0 pb-[50%]">
          <Image
            src="/assets/images/homepage/car.png"
            alt="Car with service hotspots"
            fill
            className="object-contain"
            priority
          />

          {/* Hotspots */}
          {hotspots.map((hs) => (
            <div
              key={hs.id}
              className="absolute"
              style={{ left: hs.left, top: hs.top }}
            >
              <button
                aria-describedby={`${hs.id}-desc`}
                onMouseEnter={() => setActive(hs.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(hs.id)}
                onBlur={() => setActive(null)}
                className="relative flex items-center justify-center w-8 h-8 rounded-full focus:outline-none"
              >
                {/* pulsing circle */}
                <span className="absolute inline-flex w-8 h-8 rounded-full bg-indigo-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-4 h-4 rounded-full bg-indigo-600 border-2 border-white shadow"></span>
              </button>

              {/* Tooltip */}
              <div
                id={`${hs.id}-desc`}
                role="region"
                aria-hidden={active !== hs.id}
                className={`absolute left-1/2 -translate-x-1/2 mt-3 w-56 transition-all duration-200 ease-out ${
                  active === hs.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ zIndex: 50 }}
              >
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg text-left">
                  <h3 className="font-semibold text-sm mb-1">{hs.title}</h3>
                  <p className="text-sm text-gray-600">{hs.description}</p>
                </div>
                {/* tooltip arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-3 h-3 rotate-45 bg-white border-l border-t border-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500 text-center">
        💡 Hover or tap the blinking dots to learn more about each service.
      </p>
    </section>
  );
}
