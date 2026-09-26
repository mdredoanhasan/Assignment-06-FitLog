import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0C0D10]">
      <div className="mx-auto flex w-[96%] flex-col items-center justify-between gap-2 px-3 py-3 text-center md:flex-row md:px-6 md:py-4">
        <div className="flex items-center justify-center font-bold text-[14px] md:text-[20px]">
          <Image
            src={"/footer.png"}
            width={90}
            height={0}
            alt="Nav logo"
            className="mr-2 h-4 w-4 md:h-6 md:w-6"
          />
          <span>FITLOG</span>
        </div>
        <p className="text-[10px] text-gray-500 md:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
