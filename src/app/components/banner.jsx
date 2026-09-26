import Image from "next/image";


const BannerPage = () => {
    return (
        <div className="flex container mx-auto mt-25 justify-between bg-[#222630]/40 p-20 rounded-2xl h-130 items-center">
            <div>
                <p className="text-[#C2F800] mb-5">WORKOUT LIBRARY</p>
                <h1 className="font-bold text-5xl mb-5">TRAIN WITH INTENT.LOG <br /> EVERY SET.</h1>
                <p className="opacity-60 mb-5">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
                <button className="btn  bg-[#C2F800] text-black/80 font-bold">BROWSE WORKOUTS</button>
                
            </div>
            <div>
                <Image src={'/banner.png'} width={300} height={300} alt="banner image"/>
            </div>
        </div>
    );
};

export default BannerPage;