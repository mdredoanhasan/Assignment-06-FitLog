export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-[#0d0f13] px-6 py-12 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#252932] border-t-[#b8ff00]" />
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-300">
          Loading workouts
        </p>
      </div>
    </div>
  );
}
