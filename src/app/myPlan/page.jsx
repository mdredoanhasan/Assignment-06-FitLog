"use client";
import React, { useContext, useMemo, useState } from "react";
import { WorkoutContext } from "../context/workoutContext";
import MyPlanCard from "./myPlanCard";
import SavedCard from "./mySaveCard";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

const MyPlan = () => {
  const { todayPlan, savedPlan, setTodayPlan, setSavedPlan } =
    useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("Duration");

  const removeTodayPlan = (id) => {
    setTodayPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const removeSavedPlan = (id) => {
    setSavedPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const activePlan = activeTab === "today" ? todayPlan : savedPlan;

  const visiblePlan = useMemo(() => {
    const sorted = [...activePlan];

    if (sortBy === "Calories") {
      return sorted.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    if (sortBy === "Rating") {
      return sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted.sort((a, b) => a.duration - b.duration);
  }, [activePlan, sortBy]);

  const totalExercises = activePlan.length;
  const totalMinutes = activePlan.reduce(
    (sum, item) => sum + Number(item.duration || 0),
    0,
  );
  const totalCalories = activePlan.reduce(
    (sum, item) => sum + Number(item.caloriesBurned || 0),
    0,
  );

  return (
    <div className="min-h-screen bg-[#0d0f13] text-white">
      <div className="container mx-auto px-4 py-8 md:px-8 md:py-10">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">MY PLAN</h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-[#252932] bg-[#12151b] sm:grid-cols-3">
          {/* Exercises */}
          <div className="border-b border-[#252932] px-6 py-7 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">Exercises</p>

            <p className="mt-1.5 text-3xl font-bold text-[#b8ff00]">
              {totalExercises}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-b border-[#252932] px-6 py-7 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">Minutes</p>

            <p className="mt-1.5 text-3xl font-bold">{totalMinutes}</p>
          </div>

          {/* Calories */}
          <div className="px-6 py-7">
            <p className="text-xs text-gray-500">Calories</p>

            <p className="mt-1.5 text-3xl font-bold">{totalCalories}</p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="relative mt-6">
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-box w-full bg-transparent p-0">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab h-9 min-h-9 w-[90px] rounded-md border border-transparent px-3 text-xs text-gray-500"
              aria-label="Today's Plan"
              checked={activeTab === "today"}
              onChange={() => setActiveTab("today")}
            />

            <div className="tab-content mt-3 w-full border-0 bg-transparent p-0">
              <div>
                {activeTab === "today" ? (
                  todayPlan.length > 0 ? (
                    visiblePlan.map((fitData) => {
                      return (
                        <MyPlanCard
                          key={fitData.id}
                          fitData={fitData}
                          onRemove={removeTodayPlan}
                        />
                      );
                    })
                  ) : (
                    <div className="mt-5 flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252932] bg-[#0d0f13]">
                      <h2 className="text-base font-bold">NOTHING HERE YET</h2>

                      <p className="mt-2 text-xs text-gray-500">
                        Browse the library or add a lift to get today moving.
                      </p>

                      <Link
                        href="/"
                        className="mt-5 inline-flex rounded-full bg-[#b8ff00] px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-[#c8ff33]"
                      >
                        Go to workouts
                      </Link>
                    </div>
                  )
                ) : null}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_6"
              className="tab h-9 min-h-9 w-[90px] rounded-md border border-transparent px-3 text-xs text-gray-500"
              aria-label="Saved"
              checked={activeTab === "saved"}
              onChange={() => setActiveTab("saved")}
            />

            <div className="tab-content mt-3 w-full border-0 bg-transparent p-0">
              <div>
                {activeTab === "saved" ? (
                  savedPlan.length > 0 ? (
                    visiblePlan.map((fitData) => {
                      return (
                        <SavedCard
                          key={fitData.id}
                          fitData={fitData}
                          onRemove={removeSavedPlan}
                        />
                      );
                    })
                  ) : (
                    <div className="mt-5 flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252932] bg-[#0d0f13]">
                      <h2 className="text-base font-bold">NOTHING HERE YET</h2>

                      <p className="mt-2 text-xs text-gray-500">
                        Browse the library or add a lift to get today moving.
                      </p>

                      <Link
                        href="/"
                        className="mt-5 inline-flex rounded-full bg-[#b8ff00] px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-[#c8ff33]"
                      >
                        Go to workouts
                      </Link>
                    </div>
                  )
                ) : null}
              </div>
            </div>
          </div>

          {/* Sort */}
          <div className="mt-4 flex items-center justify-end gap-2.5 md:absolute md:right-0 md:top-0 md:mt-0">
            <span className="text-xs text-gray-500">Sort By</span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-9 min-h-0 appearance-none rounded-md border border-[#252932] bg-[#12151b] px-3 pr-8 text-xs text-gray-300 outline-none"
              >
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Rating">Rating</option>
              </select>
              <IoChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
