"use client";
import { accordionItems } from "@/data/faq";
import { useEffect, useRef, useState } from "react";

export default function Accordion({
  faqData = accordionItems,
  parentClass = "",
  limit = null, // ✅ Added optional limit prop
}) {
  const parentRefs = useRef([]);
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Apply limit if provided
  const limitedFaqs = limit ? faqData.slice(0, limit) : faqData;

  useEffect(() => {
    questionRefs.current.forEach((el) => {
      if (el) el.classList.remove("active");
    });
    parentRefs.current.forEach((el) => {
      if (el) el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      if (el) {
        el.style.height = "0px";
        el.style.overflow = "hidden";
        el.style.transition = "all 0.5s ease-in-out";
        el.style.marginTop = "0px";
      }
    });
    if (currentIndex !== -1 && parentRefs.current[currentIndex]) {
      const questionEl = questionRefs.current[currentIndex];
      const parentEl = parentRefs.current[currentIndex];
      const answerEl = answerRefs.current[currentIndex];

      questionEl?.classList.add("active");
      parentEl?.classList.add("active");
      if (answerEl) {
        answerEl.style.height = answerEl.scrollHeight + "px";
        answerEl.style.overflow = "hidden";
        answerEl.style.transition = "all 0.5s ease-in-out";
        answerEl.style.marginTop = "20px";
      }
    }
  }, [currentIndex]);

  return (
    <>
      {limitedFaqs.map((item, index) => (
        <li
          ref={(el) => (parentRefs.current[index] = el)}
          className={`${currentIndex == index ? "uc-open" : ""} ${parentClass}`}
          onClick={() => setCurrentIndex((prev) => (prev == index ? -1 : index))}
          key={index}
        >
          <a
            className="uc-accordion-title fs-5 sm:fs-4"
            role="button"
            aria-disabled="false"
            ref={(el) => (questionRefs.current[index] = el)}
          >
            {item.question}
          </a>
          <div
            className="uc-accordion-content"
            ref={(el) => (answerRefs.current[index] = el)}
          >
            <p>{item.answer}</p>
          </div>
        </li>
      ))}
    </>
  );
}
