import React from "react";
import SloteSelection from "./slotSelection";
import { FaArrowLeft } from "react-icons/fa6";
import { TbHomePlus } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function page() {
  return (
    <div className="px-24 py-20 min-h-screen">
      <button className="flex gap-10 h-fit px-3 py-1 text-center items-center">
        <FaArrowLeft size={26} className="text-black" />
      </button>
      <div className="flex justify-center">
        <h3 className="text-[20px] font-[500]">Please select therapy mode</h3>
      </div>

      <div className="mt-20 flex gap-10 justify-center">
        <div className="flex flex-col gap-5 items-center text-center">
          <div className="h-24 aspect-square p-8 bg-[#1F9FE6] rounded-2xl flex items-center justify-center">
            <TbHomePlus size={35} className="text-white" />
          </div>
          <p className="text-[#004E87]">In-person</p>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <div className="w-24 h-24 aspect-square p-4 bg-white rounded-2xl flex items-center justify-center">
            <IoVideocamOutline size={35} className="text-[#004E87]" />
          </div>
          <p className="text-[#004E87]">Video</p>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <div className="w-24 h-24 aspect-square p-4 bg-white rounded-2xl flex items-center justify-center">
            <MdOutlinePhone size={35} className="text-[#004E87]" />
          </div>
          <p className="text-[#004E87]">Call</p>
        </div>
      </div>

      <div className="mt-7 flex gap-3 items-center justify-center">
        <CiLocationOn size={32} />
        <p className="text-[#888888]">3rd Floor, A2, 35, Block A2, Delhi</p>
      </div>

      <div>
        <SloteSelection />
      </div>
    </div>
  );
}

export default page;
