import Image from "next/image";
import React from "react";

const MyPlanCard = ({ fitData }) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#252932] bg-[#12151b] p-3">
      {/* Image */}
      <Image
        src={fitData.image}
              alt={fitData.name}
              width={400}
              height={400}
        className="h-16 w-28 rounded-xl object-cover"
      />

      {/* Workout Info */}
      <div className="flex-1">
        <h3 className="text-sm font-bold uppercase text-white">
          {fitData.name}
        </h3>

        <p className="mt-1 text-xs text-gray-500">{fitData.equipment}</p>

        {/* Stats */}
        <div className="mt-2 flex items-center gap-3 text-[10px] text-gray-400">
          {/* Duration */}
          <span className="flex items-center gap-1">
            <span className="text-[#b8ff00]">◷</span>
            {fitData.duration} min
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1">
            <span className="text-[#b8ff00]">♥</span>
            {fitData.caloriesBurned} kcal
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1">
            <span className="text-[#b8ff00]">☆</span>
            {fitData.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="rounded-full border border-[#343b49] px-4 py-2 text-xs text-white transition hover:bg-[#1b1f27]">
          View Details
        </button>

        <button className="rounded-full bg-[#b8ff00] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#c8ff33]">
          ✓ Mark as Done
        </button>

        <button className="px-2 text-lg text-gray-500 hover:text-white">
          ×
        </button>
      </div>
    </div>
  );
};

export default MyPlanCard;
