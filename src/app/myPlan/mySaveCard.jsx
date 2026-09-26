import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const SavedCard = ({ fitData, onRemove }) => {
  const handleDelete = () => {
    onRemove(fitData.id);
    toast.success(`${fitData.name} removed from saved workouts`);
  };

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
        <Link
          href={`/heroSection/${fitData.id}`}
          className="rounded-full border border-[#343b49] px-4 py-2 text-xs text-white transition hover:bg-[#1b1f27]"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={handleDelete}
          className="px-2 text-lg text-gray-500 hover:text-white"
          aria-label={`Remove ${fitData.name}`}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SavedCard;
