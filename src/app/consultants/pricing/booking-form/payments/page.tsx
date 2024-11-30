import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";

function Payments() {
  return (
    <div className="px-24 py-14 min-h-screen">
      <Link
        href="/consultants/pricing/booking-form"
        className="flex gap-10 h-fit px-3 py-1 text-center items-center"
      >
        <FaArrowLeft size={26} className="text-black" />
      </Link>
      <div className="w-fit flex flex-col justify-center mx-auto shadow-gray-300 shadow-2xl rounded-2xl">
        <div className="px-14 py-5 flex justify-between text-white bg-[#1F9FE6] rounded-t-2xl">
          <div className="flex flex-col justify-center content-center items-center w-fit">
            <button className="flex flex-col gap-2 items-center text-[12px] font-[600]">
              <FaRegCalendarAlt size={21} />
              Change date
            </button>
            <p className="font-[600] text-[18px]">Sat, 06 Aug</p>
            <p className="text-[14px] font-[500]">3:30 PM - 4:20 PM</p>
          </div>
          <div className="flex justify-center content-center items-center w-fit">
            <LiaRupeeSignSolid size={32} />
            <p className="text-[28px] font-[600]">2,400/-</p>
          </div>
        </div>

        {/* Form */}
        <div className="px-16 mt-7 flex flex-col rounded-b-2xl">
          <div className="w-[50rem] flex flex-col gap-7 justify-center">
            <div className="grid grid-cols-2 gap-10">
              <input
                className="px-5 py-3 text-[18px] font-[500] border-[1.4px] border-[#A6A6A6] rounded-md"
                placeholder="First Name"
                type="text"
              />
              <input
                className="px-5 py-3 text-[18px] font-[500] border-[1.4px] border-[#A6A6A6] rounded-md"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <input
              className="px-5 py-3 text-[18px] font-[500] border-[1.4px] border-[#A6A6A6] rounded-md"
              placeholder="Email"
              type="text"
            />
            <input
              className="pl-10 pr-5 py-3 text-[18px] font-[500] border-[1.4px] border-[#A6A6A6] rounded-md"
              type="text"
            ></input>
          </div>
          <p className="mt-4 text-[16px] font-[500] text-[#868686]">
            i. You will receive booking details on WhatsApp
          </p>

          <div className="w-[50rem]">
            <h4 className="mt-10 text-[22px] font-[500]">
              Have you been referred by your employer ?
            </h4>

            <div className="mt-7 flex flex-row gap-7">
              <div className="py-2 px-3 flex gap-3 justify-center items-center content-center text-white bg-[#1F9FE6] rounded-md">
                <input
                  className="h-5 aspect-square bg-white border-2 border-white outline-none rounded-xl hover:outline-none"
                  type="checkbox"
                />
                <p>Yes, I am employed under a partnering company</p>
              </div>
              <div className="flex gap-3 justify-center items-center content-center">
                <textarea
                  className="py-2 px-3 border-[1.2px] border-[#2371E7] rounded-md"
                  placeholder={`Partnering Company \n Name" or "Company ID`}
                />
                <button className="px-7 py-3 text-[20px] font-[600] text-center items-center justify-center content-center text-white bg-[#1F9FE6] rounded-lg">
                  Verify
                </button>
              </div>
            </div>
            <div className="mt-24 mb-40 flex justify-center">
              <Link
                href="/consultants/pricing/booking-form/payments/confirmation"
                className="w-full py-4 text-center text-white bg-[#B7B7B7] font-[600] text-[18px] rounded-xl"
              >
                Book session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
