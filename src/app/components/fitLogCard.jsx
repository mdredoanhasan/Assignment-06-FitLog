import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { PiFireSimpleFill } from "react-icons/pi";

const FitLogCard = ({ fitlog }) => {
  return (
    <Link href={`/heroSection/${fitlog.id}`} className="block h-full">
      <div className="h-full w-full overflow-hidden rounded-3xl bg-[#1c1f27] transition hover:scale-[1.01] hover:shadow-lg hover:shadow-black/20">
        <div className="relative h-56 w-full sm:h-64">
          <Image
            src={fitlog.image}
            alt={fitlog.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="px-4 pb-4 pt-3">
          <div className="flex flex-wrap gap-2">
            {fitlog.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#D4FF3F] px-4 py-1 text-xs font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="mt-3 text-xl font-extrabold uppercase tracking-tight text-white">
            {fitlog.name}
          </h2>
          <p className="mt-0.5 text-sm text-gray-400">{fitlog.equipment}</p>

          <div className="mt-3 border-t border-white/10 pt-3">
            <div className="flex items-center gap-10 text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <FaRegClock />
                <span>{fitlog.duration} min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PiFireSimpleFill />
                <span>{fitlog.caloriesBurned} kcal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IoMdStarOutline />
                <span>{fitlog.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FitLogCard;
