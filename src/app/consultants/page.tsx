import React from "react";
import Link from "next/link";
import Consultant from "./consultant";
import { FaArrowLeft } from "react-icons/fa6";
import ConsultantData from "./consultantDetails";

function Page() {
  return (
    <div className="flex">
      {/* Consultant Profile */}
      <div className="w-[65rem] h-screen relative text-center bg-[#1F9FE6] px-32 content-center overflow-hidden">
        <div className="absolute bottom-[13rem] left-[-20rem] h-[26rem] aspect-square rounded-full bg-[#208CCA5E] opacity-[100%] z-0 overflow-hidden" />
        <div className="absolute bottom-[-13rem] right-12 h-72 aspect-square rounded-full bg-[#208CCA5E] opacity-[100%] z-0 overflow-hidden" />
        <div className="absolute bottom-[7rem] right-[-16rem] h-[26rem] aspect-square rounded-full bg-[#208CCA5E] opacity-[100%] z-0 overflow-hidden" />
        <div className="relative z-10">
          <Link
            href="/"
            className="flex gap-3 h-fit px-3 py-1 text-center text-white items-center cursor-pointer"
          >
            <FaArrowLeft size={26} className="" />
            <p className="font-[500] text-[22px]">Back</p>
          </Link>
        </div>
        <Consultant />
        <div className="relative z-10">
          <Link
            href="/consultants/pricing"
            className="w-[30rem] px-32 py-6 text-[#0069D5] bg-white font-[600] text-[24px] rounded-[3rem] cursor-pointer"
          >
            Book session
          </Link>
        </div>
      </div>

      {/* Consultant Info */}
      <div className="flex flex-col gap-26 px-20 py-7 overflow-y-auto h-screen w-full">
        <ConsultantData />
      </div>
    </div>
  );
}

export default Page;
