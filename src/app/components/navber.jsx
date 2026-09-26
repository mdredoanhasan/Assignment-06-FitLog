"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";

const Navber = () => {
  const { todayPlan, savedPlan } = useContext(WorkoutContext);
  const pathname = usePathname();

  const isActive = pathname === "/";
  const isActive2 = pathname === "/myPlan";
  return (
    <div className="sticky top-0 z-10 border-b border-white/10 bg-[#0C0D10]">
      <div className="container mx-auto mt-4 mb-4 px-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-center font-bold text-[20px] md:justify-start">
            <Image
              src={"/logo.png"}
              width={90}
              height={0}
              alt="Nav logo"
              className="mr-2 h-6 w-6"
            />
            FITLOG
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-5">
            <Link href={"/"}>
              <button
                className={
                  isActive
                    ? "rounded-full bg-[#17200d] px-4 py-2 text-sm font-semibold text-[#b8ff00] md:px-6 md:py-2.5"
                    : "px-4 py-2 text-sm text-gray-300 md:px-6 md:py-2.5"
                }
              >
                Workouts
              </button>
            </Link>
            <Link href={"/myPlan"}>
              <button
                className={
                  isActive2
                    ? "rounded-full bg-[#17200d] px-4 py-2 text-sm font-semibold text-[#b8ff00] md:px-6 md:py-2.5"
                    : "px-4 py-2 text-sm text-gray-300 md:px-6 md:py-2.5"
                }
              >
                My Plan
              </button>
            </Link>
          </ul>

          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-gray-300 md:gap-3">
              <span className="text-xs md:text-sm">Plan</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-sm font-semibold text-black">
                {todayPlan.length}
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 md:gap-3">
              <span className="text-xs md:text-sm">Saved</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-sm text-gray-300">
                {savedPlan.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
