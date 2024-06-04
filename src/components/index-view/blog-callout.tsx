/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { WidthWrapper } from "@/components/ui/layout";
import Link from "next/link";
import ROUTES from "@/utils/routes";
import { FourCirlesIcon } from "@/components/ui/custom-icons";

export default function BlogCallout() {
  const [isVisible, setIsVisible] = useState(true);

  function dismiss() {
    setIsVisible(false);
  }

  return (
    isVisible && (
      <div className="h-[14rem] md:h-[7rem]">
        <div className="bg-white py-4 fixed bottom-0 w-full top-shadown">
          <WidthWrapper>
            <div className="flex justify-between items-center flex-col md:flex-row gap-y-4 gap-x-4">
              <div className="flex gap-4 items-center w-full">
                <div className="">
                  <img
                    src="https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/cc382573-96da-4eaa-a600-1f5372e4c500/thumbnails"
                    alt="Blog post thumbnail"
                    className="w-20 h-20"
                  />
                </div>
                <div>
                  <h2 className="font-blog font-semibold text-[#302721]">
                    Check out my latest blog posts!
                  </h2>
                  <p className="text-sm text-[#302721]">
                    Insights on web development, product and leadership.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-6 items-center flex-col md:flex-row w-full md:w-auto">
                <div className="bg-blue-50 w-full">
                  <Link
                    href={ROUTES.BLOG}
                    className="bg-[#302721] rounded-sm py-2 md:py-3 px-5 text-white flex items-center justify-center gap-2 w-full md:w-auto hover:opacity-90 transition-all duration-200 ease-in-out"
                  >
                    <FourCirlesIcon className="w-4 h-4" />
                    <span className="whitespace-nowrap">Go to Blog</span>
                  </Link>
                </div>
                <button
                  onClick={dismiss}
                  className="text-gray-500 p-2 -mx-2 border-[1px] rounded-sm border-transparent md:hover:border-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hidden md:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="md:hidden text-sm text-[#302721] underline">
                    No Thanks
                  </span>
                </button>
              </div>
            </div>
          </WidthWrapper>
        </div>
      </div>
    )
  );
}
