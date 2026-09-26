"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navber = () => {
  const pathname = usePathname();

  const isActive = pathname === "/";
  const isActive2 = pathname === "/myPlan";
  return (
    <div className="border-b border-white/10 sticky top-0 bg-[#0C0D10] z-10">
      <div className="flex justify-between container mx-auto mt-5 mb-4">
        <div className="flex font-bold text-[20px] items-center">
          <Image
            src={"/logo.png"}
            width={90}
            height={0}
            alt="Nav logo"
            className="h-6 w-6 mr-2"
          />
          FITLOG
        </div>

        <ul className="flex gap-5 items-center">
          <Link href={"/"}>
            <button
              className={
                isActive
                  ? "rounded-full bg-[#17200d] px-6 py-2.5 font-semibold text-[#b8ff00]"
                  : ""
              }
            >
              {" "}
              Workouts{" "}
            </button>{" "}
          </Link>
          <Link href={"/myPlan"}>
            <button 
              className={
                isActive2
                  ? "rounded-full bg-[#17200d] px-6 py-2.5 font-semibold text-[#b8ff00]"
                  : ""
              }
            >
              My Plan
            </button>
          </Link>
        </ul>

        <div className="flex items-center gap-8">
          {/* Plan */}
          <div className="flex items-center gap-3 text-gray-300">
            <span className="text-sm">Plan</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-sm font-semibold text-black">
              0
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-3 text-gray-400">
            <span className="text-sm">Saved</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-sm text-gray-300">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
