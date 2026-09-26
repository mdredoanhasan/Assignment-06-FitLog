"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "../context/workoutContext";
import { FiBookmark } from "react-icons/fi";

const SavedPlan = ({ fitCard }) => {
  const { savedPlan, setSavedPlan } = useContext(WorkoutContext);

  const handelClick = () => {
    const exists = savedPlan.some((item) => item.id === fitCard.id);

    if (exists) {
      toast.info(`${fitCard.name} is already saved for later`);
      return;
    }

    setSavedPlan([...savedPlan, fitCard]);
    toast.success(`${fitCard.name} saved for later`);
  };

  return (
    <button
      onClick={handelClick}
      className="flex items-center justify-center gap-1 rounded-2xl border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
    >
      <FiBookmark />
      Save for later
    </button>
  );
};

export default SavedPlan;
