import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0C0D10] border-t border-white/5">
      <div className="mx-auto flex h-22.25 w-[96%] items-center justify-between px-6">
        <div className="flex font-bold text-[20px] items-center">
          <Image
            src={"/footer.png"}
            width={90}
            height={0}
            alt="Nav logo"
            className="h-6 w-6 mr-2"
          />
          FITLOG
        </div>
        <p className="text-sm text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
