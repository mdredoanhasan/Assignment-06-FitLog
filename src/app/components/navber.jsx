"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";

const Navber = () => {
  const { todayPlan, savedPlan, setActivePlanTab } = useContext(WorkoutContext);
  const pathname = usePathname();

  const isActive = pathname === "/";
  const isActive2 = pathname === "/myPlan";
  return (
    <div className="sticky top-0 z-10 border-b border-white/10 bg-[#0C0D10]">
      <div className="container mx-auto mt-3 mb-3 px-3 md:mt-4 md:mb-4 md:px-6">
        <div className="flex items-center justify-between gap-2 md:flex-row md:gap-3">
          <div className="flex min-w-0 items-center justify-center md:justify-start">
            <Image
              src={"/logo.png"}
              width={90}
              height={0}
              alt="Nav logo"
              className="h-6 w-6 md:mr-2 md:h-6 md:w-6"
            />
            <span className="hidden text-[20px] font-bold md:inline">
              FITLOG
            </span>
          </div>

          <ul className="flex flex-1 items-center justify-center gap-1 sm:gap-2 md:gap-5">
            <Link href={"/"}>
              <button
                className={
                  isActive
                    ? "rounded-full bg-[#17200d] px-2.5 py-1.5 text-[10px] font-semibold text-[#b8ff00] sm:px-3 sm:text-xs md:px-6 md:py-2.5 md:text-sm"
                    : "px-2.5 py-1.5 text-[10px] text-gray-300 sm:px-3 sm:text-xs md:px-6 md:py-2.5 md:text-sm"
                }
              >
                Workouts
              </button>
            </Link>
            <Link href={"/myPlan"}>
              <button
                className={
                  isActive2
                    ? "rounded-full bg-[#17200d] px-2.5 py-1.5 text-[10px] font-semibold text-[#b8ff00] sm:px-3 sm:text-xs md:px-6 md:py-2.5 md:text-sm"
                    : "px-2.5 py-1.5 text-[10px] text-gray-300 sm:px-3 sm:text-xs md:px-6 md:py-2.5 md:text-sm"
                }
              >
                My Plan
              </button>
            </Link>
          </ul>

          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-8">
            <Link
              href="/myPlan"
              onClick={() => setActivePlanTab("today")}
              className="flex items-center gap-1 text-gray-300 transition hover:text-white md:gap-3"
            >
              <span className="text-[10px] md:text-sm">Plan</span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-[10px] font-semibold text-black md:h-7 md:w-7 md:text-sm">
                {todayPlan.length}
              </span>
            </Link>

            <Link
              href="/myPlan"
              onClick={() => setActivePlanTab("saved")}
              className="flex items-center gap-1 text-gray-400 transition hover:text-white md:gap-3"
            >
              <span className="text-[10px] md:text-sm">Saved</span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-[10px] text-gray-300 md:h-7 md:w-7 md:text-sm">
                {savedPlan.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
