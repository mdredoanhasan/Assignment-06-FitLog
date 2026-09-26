"use client";

import { Children, createContext, useState } from "react";

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedPlan, setSavedPlan] = useState([]);
  const [activePlanTab, setActivePlanTab] = useState("today");

  const ShareData = {
    todayPlan,
    setTodayPlan,
    savedPlan,
    setSavedPlan,
    activePlanTab,
    setActivePlanTab,
  };

  return (
    <WorkoutContext.Provider value={ShareData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
