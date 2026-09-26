"use client";

import React, { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";
import { FiBookmark } from "react-icons/fi";

const SavedPlan = ({ fitCard }) => {
  const { savedPlan, setSavedPlan } = useContext(WorkoutContext);
  const handelClick = () => {
    setSavedPlan([...savedPlan, fitCard]);
    alert(` '${fitCard.name} Added to Today's Plan`);
  };

  return (
    <button
      onClick={() => handelClick()}
      className="flex items-center justify-center gap-1 rounded-2xl border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
    >
      <FiBookmark />
      Save for later
    </button>
  );
};

export default SavedPlan;
