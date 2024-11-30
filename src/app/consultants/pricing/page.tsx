"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { MdErrorOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { LiaRupeeSignSolid } from "react-icons/lia";

function page() {
  const [showMessage, setShowMessage] = useState(false);

  const hideGuideMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="px-24 py-20 min-h-screen">
      <div className="relative">
        <Link
          href="/consultants"
          className="flex gap-10 h-fit px-3 py-1 text-center items-center cursor-pointer"
        >
          <FaArrowLeft size={26} className="text-black" />
          <p className="font-[600] text-[18px]">Available sessions</p>
        </Link>
      </div>

      <div
        className={`flex justify-center transition-transform duration-500 ease-in-out ${
          showMessage
            ? "opacity-0 scale-95 h-0 overflow-hidden"
            : "opacity-100 scale-100"
        }`}
      >
        <div className="w-fit px-7 py-5 flex gap-4 bg-[#C2E1F9] border-2 border-[#0085D0] rounded-xl">
          <MdErrorOutline size={24} className="text-[#015DB2]" />
          <p className="text-[14px] font-[500] text-[#015DB2] items-center">
            Click on the duration to see the pricing details
          </p>
          <button onClick={hideGuideMessage}>
            <RxCross2 size={24} className="text-[#015DB2]" />
          </button>
        </div>
      </div>

      <div className="flex mt-20 gap-10 justify-center text-white">
        <div className="flex flex-col gap-6 px-16 py-7 bg-gradient-to-b from-[#0093FE] to-[#005BB0] rounded-2xl">
          <div className="flex flex-row items-center">
            <LiaRupeeSignSolid className="font-[700] text-[36px]" />
            <p className="font-[700] text-[36px]">3,200</p>
            <p className="text-[16px] font-[500] opacity-[70%]">/ session</p>
          </div>
          {/* Durations */}
          <div className="flex gap-3">
            <button className="px-3 py-1 border-2 border-white opacity-[30%] rounded-2xl">
              45 min
            </button>

            <button className="px-3 py-1 border-2 border-white rounded-2xl">
              60 min
            </button>

            <button className="px-3 py-1 border-2 border-white opacity-[30%] rounded-2xl">
              90 min
            </button>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <h4 className="font-[600] text-[20px]">Group Therapy</h4>
            <div className="h-[1px] bg-white w-full opacity-[50%]" />

            <ul className="mt-3 flex flex-col gap-2 list-disc text-[14px]">
              <li>Joint Evaluation</li>
              <li>Communication Exercises</li>
              <li>Conflict Resolution</li>
              <li>Goal Setting</li>
              <li>Follow up plan</li>
            </ul>
          </div>

          <div className="mt-7 flex justify-center">
            <Link
              href="/consultants/pricing/booking-form"
              className="w-full py-4 text-[#0069D5] bg-white text-center justify-center items-center font-[600] text-[18px] rounded-[3rem] cursor-pointer"
            >
              Proceed
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-16 py-7 bg-gradient-to-b from-[#0093FE] to-[#005BB0] rounded-2xl">
          <div className="flex flex-row items-center">
            <LiaRupeeSignSolid className="font-[700] text-[36px]" />
            <p className="font-[700] text-[36px]">3,200</p>
            <p className="text-[16px] font-[500] opacity-[70%]">/ session</p>
          </div>
          {/* Durations */}
          <div className="flex gap-3">
            <button className="px-3 py-1 border-2 border-white opacity-[30%] rounded-2xl">
              45 min
            </button>

            <button className="px-3 py-1 border-2 border-white rounded-2xl">
              60 min
            </button>

            <button className="px-3 py-1 border-2 border-white opacity-[30%] rounded-2xl">
              90 min
            </button>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <h4 className="font-[600] text-[20px]">Individual Therapy</h4>
            <div className="h-[1px] bg-white w-full opacity-[50%]" />

            <ul className="mt-3 flex flex-col gap-2 list-disc text-[14px]">
              <li>Joint Evaluation</li>
              <li>Communication Exercises</li>
              <li>Conflict Resolution</li>
              <li>Goal Setting</li>
              <li>Follow up plan</li>
            </ul>
          </div>

          <div className="mt-7 flex justify-center">
            <Link
              href="/consultants/pricing/booking-form"
              className="w-full py-4 text-[#0069D5] bg-white text-center justify-center items-center font-[600] text-[18px] rounded-[3rem] cursor-pointer"
            >
              Proceed
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-16 py-7 bg-gradient-to-b from-[#0093FE] to-[#005BB0] rounded-2xl">
          <div className="flex flex-row items-center">
            <LiaRupeeSignSolid className="font-[700] text-[36px]" />
            <p className="font-[700] text-[36px]">3,200</p>
            <p className="text-[16px] font-[500] opacity-[70%]">/ session</p>
          </div>
          {/* Durations */}
          <div className="flex gap-3">
            <button className="px-3 py-1 border-2 border-white opacity-[30%] rounded-2xl">
              45 min
            </button>

            <button className="px-3 py-1 border-2 border-white rounded-2xl">
              60 min
            </button>

            <button className="px-3 py-1 border-2 border-white opacity-[30%] rounded-2xl">
              90 min
            </button>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <h4 className="font-[600] text-[20px]">Individual Therapy</h4>
            <div className="h-[1px] bg-white w-full opacity-[50%]" />

            <ul className="mt-3 flex flex-col gap-2 list-disc text-[14px]">
              <li>Joint Evaluation</li>
              <li>Communication Exercises</li>
              <li>Conflict Resolution</li>
              <li>Goal Setting</li>
              <li>Follow up plan</li>
            </ul>
          </div>

          <div className="mt-7 flex justify-center">
            <Link
              href="/consultants/pricing/booking-form"
              className="w-full py-4 text-[#0069D5] bg-white text-center justify-center items-center font-[600] text-[18px] rounded-[3rem] cursor-pointer"
            >
              Proceed
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
