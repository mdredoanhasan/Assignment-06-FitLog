import Image from "next/image";

const BannerPage = () => {
  return (
    <div className="container mx-auto mt-8 px-4 md:mt-16 md:px-6 lg:mt-25">
      <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-[#222630]/40 p-6 md:p-10 lg:flex-row lg:p-20">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#C2F800] md:text-base">
            WORKOUT LIBRARY
          </p>
          <h1 className="mb-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            TRAIN WITH INTENT.
            <br className="hidden md:block" /> LOG EVERY SET.
          </h1>
          <p className="mb-5 text-sm opacity-70 md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <button className="btn bg-[#C2F800] px-6 py-3 rounded-full text-sm font-bold text-black/80 md:text-base">
            BROWSE WORKOUTS
          </button>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <Image
            src={"/banner.png"}
            width={300}
            height={300}
            alt="banner image"
            className="h-auto w-full max-w-[260px] md:max-w-[320px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
