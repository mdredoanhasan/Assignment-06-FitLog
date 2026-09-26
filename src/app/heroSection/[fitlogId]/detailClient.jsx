import AddToPlan from "@/app/button/addToPlan";
import SavedPlan from "@/app/button/savePlan";
import Image from "next/image";


export default function DetailClient({ fitCard }) {
  const stats = [
    { label: "Equipment", value: fitCard.equipment },
    { label: "Difficulty", value: fitCard.difficulty },
    { label: "Sets", value: fitCard.sets },
    { label: "Reps", value: fitCard.reps },
    { label: "Duration", value: `${fitCard.duration} min` },
    { label: "Calories", value: `${fitCard.caloriesBurned} kcal` },
    { label: "Rating", value: fitCard.rating },
  ];

  return (
    <div className="min-h-screen bg-[#0C0D10] px-6 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:h-full">
          <Image
            src={fitCard.image}
            alt={fitCard.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-2xl font-extrabold uppercase tracking-tight">
            {fitCard.name}
          </h1>
          <p className="mt-2 max-w-md text-sm text-gray-400">
            {fitCard.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {fitCard.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#D4FF3F] px-4 py-1 text-xs font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-white/7 bg-[#1c1f27]">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center justify-between px-4 py-3 text-sm ${
                  i !== stats.length - 1 ? "border-b border-white/[0.07]" : ""
                } ${i % 2 === 1 ? "bg-[#1c1f27]" : ""}`}
              >
                <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {stat.label}
                </span>
                <span className="font-semibold text-white">{stat.value}</span>
              </div>
            ))}
          </div>

          <h2 className="mt-8 text-sm font-bold uppercase tracking-wide">
            Instructions
          </h2>
          <ol className="mt-3 space-y-2">
            {fitCard.instructions.map((step, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="text-gray-500">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <AddToPlan fitCard={fitCard} />
            <SavedPlan fitCard={fitCard} />
          </div>
        </div>
      </div>
    </div>
  );
}
