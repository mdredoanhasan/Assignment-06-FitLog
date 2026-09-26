"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { FaRegCalendarPlus } from "react-icons/fa";
import { WorkoutContext } from "../context/workoutContext";

const AddToPlan = ({ fitCard }) => {
  const { todayPlan, setTodayPlan } = useContext(WorkoutContext);

  const handelClick = () => {
    const exists = todayPlan.some((item) => item.id === fitCard.id);

    if (exists) {
      toast.info(`${fitCard.name} is already in today's plan`);
      return;
    }

    setTodayPlan([...todayPlan, fitCard]);
    toast.success(`${fitCard.name} added to today's plan`);
  };

  return (
    <button
      onClick={handelClick}
      className="flex items-center justify-center gap-1 rounded-2xl bg-[#D4FF3F] px-6 py-2.5 text-sm font-bold text-black transition-colors hover:bg-[#c2ec2e]"
    >
      <FaRegCalendarPlus />
      Add to today&apos;s plan
    </button>
  );
};

export default AddToPlan;
