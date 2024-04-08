"use client";
import React, { useState, useEffect } from "react";
import { ChevronUp } from "@/components/ui/custom-icons";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-3 md:right-4 h-10 w-10 md:h-12 md:w-12 flex justify-center items-center bg-white text-slate-300 hover:text-slate-700 rounded-full shadow-md transition-colors duration-300 border-[1px] border-slate-200"
        >
          <ChevronUp />
        </button>
      )}
    </>
  );
}
