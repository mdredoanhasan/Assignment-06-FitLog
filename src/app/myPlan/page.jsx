"use client";
import React, { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";
import MyPlanCard from "./myPlanCard";
import SavedCard from "./mySaveCard";

const MyPlan = () => {
  const { todayPlan, savedPlan } = useContext(WorkoutContext);

  return (
    <div className="min-h-screen bg-[#0d0f13] text-white">
      <div className="container mx-auto px-8 py-10">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            MY PLAN
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 rounded-xl border border-[#252932] bg-[#12151b]">

          {/* Exercises */}
          <div className="border-r border-[#252932] px-6 py-7">
            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <p className="mt-1.5 text-3xl font-bold text-[#b8ff00]">
              0
            </p>
          </div>

          {/* Minutes */}
          <div className="border-r border-[#252932] px-6 py-7">
            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <p className="mt-1.5 text-3xl font-bold">
              0
            </p>
          </div>

          {/* Calories */}
          <div className="px-6 py-7">
            <p className="text-xs text-gray-500">
              Calories
            </p>

            <p className="mt-1.5 text-3xl font-bold">
              0
            </p>
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
              defaultChecked
            />

            <div className="tab-content mt-3 w-full border-0 bg-transparent p-0">

              <div>
                {todayPlan.length > 0 ? (
                  todayPlan.map((fitData) => {
                    return (
                      <MyPlanCard
                        key={fitData.id}
                        fitData={fitData}
                      />
                    );
                  })
                ) : (
                  <div className="mt-5 flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252932] bg-[#0d0f13]">

                    <h2 className="text-base font-bold">
                      NOTHING HERE YET
                    </h2>

                    <p className="mt-2 text-xs text-gray-500">
                      Browse the library or add a lift to get today moving.
                    </p>

                    <button className="mt-5 rounded-full bg-[#b8ff00] px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-[#c8ff33]">
                      Go to workouts
                    </button>

                  </div>
                )}
              </div>

            </div>

            <input
              type="radio"
              name="my_tabs_6"
              className="tab h-9 min-h-9 w-[90px] rounded-md border border-transparent px-3 text-xs text-gray-500"
              aria-label="Saved"
              
            />

            <div className="tab-content mt-3 w-full border-0 bg-transparent p-0">

              <div>
                {savedPlan.length > 0 ? (
                  savedPlan.map((fitData) => {
                    return (
                      <SavedCard
                        key={fitData.id}
                        fitData={fitData}
                      />
                    );
                  })
                ) : (
                  <div className="mt-5 flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252932] bg-[#0d0f13]">

                    <h2 className="text-base font-bold">
                      NOTHING HERE YET
                    </h2>

                    <p className="mt-2 text-xs text-gray-500">
                      Browse the library or add a lift to get today moving.
                    </p>

                    <button className="mt-5 rounded-full bg-[#b8ff00] px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-[#c8ff33]">
                      Go to workouts
                    </button>

                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Sort */}
          <div className="absolute right-0 top-0 flex h-9 items-center gap-2.5">
            <span className="text-xs text-gray-500">
              Sort By
            </span>

            <select className="h-9 min-h-0 rounded-md border border-[#252932] bg-[#12151b] px-3 text-xs text-gray-300 outline-none">
              <option>Duration</option>
              <option>Calories</option>
              <option>Name</option>
            </select>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MyPlan;