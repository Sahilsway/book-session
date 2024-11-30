"use client";

import React, { useState } from "react";
import consultantData from "../../../data/consultantData.json";
import testimonyData from "../../../data/testimonyData.json";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiCertificateBold } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { TbMessage2Star } from "react-icons/tb";
import { TbHomePlus } from "react-icons/tb";
import { MdOutlinePhone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";

interface ConsultantInfo {
  id: number;
  about1: string;
  about2: string;
  qualification: string[];
  licence: string;
  certification: string;
  connection: string;
  experience: string;
  location: string;
  language: string;
}

interface Testimonial {
  id: number;
  context: string;
  name: string;
}

const ConsultantData: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [showFullTestimony, setShowFullTestimony] = useState(false);

  const consultant: ConsultantInfo = consultantData[0];
  const testimonials: Testimonial[] = testimonyData || [];

  const viewMoreAbout = () => {
    setShowFullText(!showFullText);
  };

  const showMoreTestimony = () => {
    setShowFullTestimony(!showFullTestimony);
  };

  return (
    <div className="flex flex-col gap-24 p-20">
      {/* About */}
      <div className="flex flex-col gap-4">
        <h2 className="font-[500] text-[24px]">About</h2>
        <p className="font-[500] text-[18px] text-[#4C5863] leading-[28px]">
          {consultant.about1}
          <br />
          <br />
          {showFullText ? consultant.about2 : ""}
        </p>
        <div className="flex justify-end">
          <button
            onClick={viewMoreAbout}
            className="text-[16px] font-[500] underline text-[#005DC6] cursor-pointer"
          >
            {showFullText ? "Show less" : "Read more"}{" "}
          </button>
        </div>
      </div>

      {/* Credentials*/}
      <div className="flex flex-col gap-4">
        <h4 className="font-[500] text-[24px]">Credentials</h4>

        {/* Qualification */}
        <ul className="flex flex-col gap-4">
          {consultant.qualification.length > 0 ? (
            consultant.qualification.map((item, index) => (
              <li
                key={index}
                className="flex gap-4 text-[18px] font-[500] text-[#516E8A]"
              >
                <RiGraduationCapLine size={24} className="text-[#1776E0]" />
                {item}
              </li>
            ))
          ) : (
            <p>No qualifications available</p>
          )}
        </ul>

        {/* License */}
        <p className="flex gap-4 text-[18px] font-[500] text-[#516E8A]">
          <PiCertificateBold size={24} className="text-[#1776E0]" />
          {consultant.licence || "Not Available"}
        </p>

        {/* Certification */}
        <p className="flex gap-4 text-[18px] font-[500] text-[#516E8A]">
          <TbMessage2Star size={24} className="text-[#1776E0]" />
          {consultant.certification || "Not Available"}
        </p>

        {/* Connection */}
        <p className="flex gap-4 text-[18px] font-[500] text-[#516E8A]">
          <GoPeople size={24} className="text-[#1776E0]" />
          {consultant.connection || "Not Available"}
        </p>

        {/* Experience */}
        <p className="flex gap-4 text-[18px] font-[500] text-[#516E8A]">
          <IoBagOutline size={24} className="text-[#1776E0]" />
          {consultant.experience}
        </p>
      </div>

      {/* Availability */}
      <div className="flex flex-col gap-4">
        <h4 className="font-[500] text-[24px]">Available on</h4>

        <div className="flex gap-10">
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="h-24 aspect-square p-8 bg-[#D4EAFF] rounded-2xl flex items-center justify-center">
              <TbHomePlus size={35} className="text-[#1F86D0]" />
            </div>
            <p className="text-[#516E8A]">In-person</p>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="w-24 h-24 aspect-square p-4 bg-[#D4EAFF] rounded-2xl flex items-center justify-center">
              <MdOutlinePhone size={35} className="text-[#1F86D0]" />
            </div>
            <p className="text-[#516E8A]">Video/Voice call</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-col gap-4">
        <h4 className="font-[500] text-[24px]">I offer therapy for</h4>

        <div className="w-[50rem] flex flex-wrap gap-10 justify-start">
          <div className="h-[56px] justify-center content-center items-center px-[3px] py-[1px] bg-gradient-to-r from-[#63BEFF] to-[#0044FA] rounded-[2rem] text-center">
            <div className="h-[50px] px-7 py-2 bg-white rounded-[2rem] text-center">
              <p className="font-[500] text-[18px]">Stress Management</p>
            </div>
          </div>
          <div className="h-[56px] justify-center content-center items-center px-[3px] py-[1px] bg-gradient-to-r from-[#63BEFF] to-[#0044FA] rounded-[2rem] text-center">
            <div className="h-[50px] px-7 py-2 bg-white rounded-[2rem] text-center">
              <p className="font-[500] text-[18px]">Relationship Skills</p>
            </div>
          </div>
          <div className="h-[56px] justify-center content-center items-center px-[3px] py-[1px] bg-gradient-to-r from-[#63BEFF] to-[#0044FA] rounded-[2rem] text-center">
            <div className="h-[50px] px-7 py-2 bg-white rounded-[2rem] text-center">
              <p className="font-[500] text-[18px]">Anxiety Reduction</p>
            </div>
          </div>
          <div className="h-[56px] justify-center content-center items-center px-[3px] py-[1px] bg-gradient-to-r from-[#63BEFF] to-[#0044FA] rounded-[2rem] text-center">
            <div className="h-[50px] px-7 py-2 bg-white rounded-[2rem] text-center">
              <p className="font-[500] text-[18px]">Depression Relief</p>
            </div>
          </div>
          <div className="h-[56px] justify-center content-center items-center px-[3px] py-[1px] bg-gradient-to-r from-[#63BEFF] to-[#0044FA] rounded-[2rem] text-center">
            <div className="h-[50px] px-7 py-2 bg-white rounded-[2rem] text-center">
              <p className="font-[500] text-[18px]">Behavioral</p>
            </div>
          </div>
          <div className="h-[56px] justify-center content-center items-center px-[3px] py-[1px] bg-gradient-to-r from-[#63BEFF] to-[#0044FA] rounded-[2rem] text-center">
            <div className="h-[50px] px-7 py-2 bg-white rounded-[2rem] text-center">
              <p className="font-[500] text-[18px]">Trauma Healing</p>
            </div>
          </div>
        </div>
      </div>

      {/* More Info */}
      <div className="flex flex-row gap-24">
        <div>
          <h4 className="font-[500] text-[24px]">I am from</h4>
          <p className="text-[#4C5863B2] text-[20px]">{consultant.location}</p>
        </div>
        <div>
          <h4 className="font-[500] text-[24px]">Languages</h4>
          <p className="text-[#4C5863B2] text-[20px]">{consultant.language}</p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="w-full flex flex-col gap-24">
        <div className="w-full flex justify-between">
          <h4 className="font-[500] text-[24px]">Client Testimonials</h4>
          <button
            onClick={showMoreTestimony}
            className="flex gap-3 text-[18px] font-[500] text-[#3D3D3D] content-center items-center"
          >
            {showFullTestimony ? "Show less" : "Show more"}
            <IoIosArrowDown
              size={22}
              className={`${showFullTestimony ? "transform rotate-180" : ""}`}
            />
          </button>
        </div>

        <div className="w-[60rem] flex flex-wrap gap-12 justify-start">
          {/* Slice the testimonials based on showFullTestimony */}
          {(showFullTestimony ? testimonials : testimonials.slice(0, 2)).map(
            (testimonial) => (
              <div
                key={testimonial.id}
                className="px-8 py-14 w-96 justify-between content-center items-center shadow-gray-300 shadow-2xl rounded-2xl"
              >
                <FaQuoteLeft
                  size={40}
                  className="text-[#318BF087] opacity-53%"
                />
                <p className="mt-10 text-center text-[16px] font-[500]">
                  "{testimonial.context}"
                </p>
                <p className="mt-10 text-[16px] font-[500]">
                  {testimonial.name}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultantData;
