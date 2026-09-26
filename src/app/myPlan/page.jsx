"use client";
import React, { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";
import MyPlanCard from "./myPlanCard";

const MyPlan = () => {
  const { todayPlan, savedPlan } = useContext(WorkoutContext);

  return (
    <div className="min-h-screen bg-[#0d0f13] text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold tracking-tight">MY PLAN</h1>
          <p className="mt-1 text-xs text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 rounded-xl border border-[#252932] bg-[#12151b]">
          {/* Exercises */}
          <div className="border-r border-[#252932] px-5 py-6">
            <p className="text-[10px] text-gray-500">Exercises</p>
            <p className="mt-1 text-2xl font-bold text-[#b8ff00]">0</p>
          </div>

          {/* Minutes */}
          <div className="border-r border-[#252932] px-5 py-6">
            <p className="text-[10px] text-gray-500">Minutes</p>
            <p className="mt-1 text-2xl font-bold">0</p>
          </div>

          {/* Calories */}
          <div className="px-5 py-6">
            <p className="text-[10px] text-gray-500">Calories</p>
            <p className="mt-1 text-2xl font-bold">0</p>
          </div>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box">
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Today's Plan"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div>
              {todayPlan.length > 0 ? (
                todayPlan.map((fitData) => {
                  return <MyPlanCard key={fitData.id} fitData={fitData} />;
                })
              ) : (
                <div className="mt-4 flex min-h-48.75 flex-col items-center justify-center rounded-lg border border-dashed border-[#252932] bg-[#0d0f13]">
                  <h2 className="text-sm font-bold">NOTHING HERE YET</h2>

                  <p className="mt-1 text-[10px] text-gray-500">
                    Browse the library or add a lift to get today moving.
                  </p>

                  <button className="mt-4 rounded-full bg-[#b8ff00] px-5 py-2 text-[10px] font-semibold text-black transition hover:bg-[#c8ff33]">
                    Go to workouts
                  </button>
                </div>
              )}
            </div>


          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Saved"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
           <div>
              {savedPlan.length > 0 ? (
                savedPlan.map((fitData) => {
                  return <MyPlanCard key={fitData.id} fitData={fitData} />;
                })
              ) : (
                <div className="mt-4 flex min-h-48.75 flex-col items-center justify-center rounded-lg border border-dashed border-[#252932] bg-[#0d0f13]">
                  <h2 className="text-sm font-bold">NOTHING HERE YET</h2>

                  <p className="mt-1 text-[10px] text-gray-500">
                    Browse the library or add a lift to get today moving.
                  </p>

                  <button className="mt-4 rounded-full bg-[#b8ff00] px-5 py-2 text-[10px] font-semibold text-black transition hover:bg-[#c8ff33]">
                    Go to workouts
                  </button>
                </div>
              )}
            </div>



          </div>
        </div>



        {/* Sort */}
        <div className="mt-5 flex items-center gap-2">
          <span className="text-[10px] text-gray-500">Sort By</span>

          <select className="select select-sm h-9 min-h-0 border-[#252932] bg-[#12151b] text-xs text-white outline-none">
            <option>Duration</option>
            <option>Calories</option>
            <option>Name</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
