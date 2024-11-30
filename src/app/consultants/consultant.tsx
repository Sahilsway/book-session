import React from "react";
import Image from "next/image";
import consultantList from "../../../data/consultantList.json";
import consultant1DP from "../../../public/consultant1.png";
import { BsShare } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

interface Consultant {
  id: number;
  name: string;
  service: string;
  experience: string;
  charge: string;
  label: string;
  image: string;
  location: string;
  verified: boolean;
}

const consultant: Consultant = consultantList[0];

const Consultant: React.FC = () => {
  return (
    <div className="relative w-[30rem] p-10 my-16 bg-[#ffffff] rounded-2xl content-center items-center text-center justify-center">
      <div className="flex justify-end">
        <button className="cursor-pointer">
          <BsShare size={26} className="text-[#0071C4]" />
        </button>
      </div>
      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={consultant1DP}
          alt={consultant.name}
          width={250}
          height={380}
          className="object-cover rounded-md aspect-[3/3]"
        />
      </div>

      {/* Name */}
      <p className="text-[22px] font-[600] text-center mt-3 flex items-center justify-center gap-3">
        <BsShare size={26} className="text-black cursor-pointer" />
        {consultant.name || "No Name"}
        {consultant.verified && (
          <MdVerified size={26} className="text-[#289EF3]" />
        )}
      </p>

      {/* Service and Experience */}
      <p className="text-[18px] font-[500] text-center mt-3 opacity-[53%]">
        {consultant.service || "No Service"}
      </p>
      <p className="text-[16px] font-[500] text-center mt-3">
        {consultant.experience || "N/A"}+ Years of experience
      </p>

      {/* Charge per Session */}
      <span className="flex flex-row text-center justify-center items-center mt-3">
        <p className="text-[14px] font-[600]">Started at</p>
        <p className="text-[20px] font-[600]">
          &nbsp;{consultant.charge || "N/A"}&nbsp;
        </p>
        <p className="text-[14px] font-[600] text-[#848484]">/ session</p>
      </span>

      {/* Location */}
      <span className="flex flex-row gap-4 text-center justify-center items-center mt-3">
        <CiLocationOn size={26} className="text-black" />
        <p className="text-[16px] font-[500] text-[#848484]">
          {consultant.location}
        </p>
      </span>
    </div>
  );
};

export default Consultant;
