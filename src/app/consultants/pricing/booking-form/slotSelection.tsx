"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppointmentCalendar from "./calender";

function slotSelection() {
  const [selectOne, setSelectOne] = useState(false);
  const [selectTwo, setSelectTwo] = useState(false);
  const [selectThree, setSelectThree] = useState(false);
  const [selectFour, setSelectFour] = useState(false);
  const [selectFive, setSelectFive] = useState(false);
  const [selectSix, setSelectSix] = useState(false);
  const [selectSeven, setSelectSeven] = useState(false);
  const [selectEight, setSelectEight] = useState(false);
  const [selectNine, setSelectNine] = useState(false);
  const [selectTen, setSelectTen] = useState(false);
  const [selectEleven, setSelectEleven] = useState(false);
  const [selectTwelve, setSelectTwelve] = useState(false);

  const selectedOne = () => {
    setSelectOne(!selectOne);
  };
  const selectedTwo = () => {
    setSelectTwo(!selectTwo);
  };
  const selectedThree = () => {
    setSelectThree(!selectThree);
  };
  const selectedFour = () => {
    setSelectFour(!selectFour);
  };
  const selectedFive = () => {
    setSelectFive(!selectFive);
  };
  const selectedSix = () => {
    setSelectSix(!selectSix);
  };
  const selectedSeven = () => {
    setSelectSeven(!selectSeven);
  };
  const selectedEight = () => {
    setSelectEight(!selectEight);
  };
  const selectedNine = () => {
    setSelectNine(!selectNine);
  };
  const selectedTen = () => {
    setSelectTen(!selectTen);
  };
  const selectedEleven = () => {
    setSelectEleven(!selectEleven);
  };
  const selectedTwelve = () => {
    setSelectTwelve(!selectTwelve);
  };

  return (
    <div className="mx-20 mt-10">
      <h4 className="text-[24px] font-[500]">Filter by</h4>

      <div className="mt-10 flex justify-center gap-7">
        <button className="px-16 py-2 text-[20px] font-[500] text-white bg-black rounded-3xl cursor-pointer">
          Slots
        </button>
        <button className="px-16 py-2 text-[20px] font-[500] rounded-3xl cursor-pointer">
          Date
        </button>
      </div>

      <div className="mb-20 mt-10">
        <h4 className="text-[24px] font-[500]">Select slots</h4>
        <div className="mt-10 grid grid-cols-3">
          <div>
            <p className="text-[16px] font-[600] opacity-[56%]">Morning</p>
            <div className="mt-5 flex flex-wrap gap-7 col-span-1">
              <button
                onClick={selectedOne}
                className={`px-3 py-1 border-2 ${selectOne ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                8:00 - 8:45 AM
              </button>
              <button
                onClick={selectedTwo}
                className={`px-3 py-1 border-2 ${selectTwo ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                9:00 - 9:45 AM
              </button>
              <button
                onClick={selectedThree}
                className={`px-3 py-1 border-2 ${selectThree ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                11:00 - 11:45 AM
              </button>
              <button
                onClick={selectedFour}
                className={`px-3 py-1 border-2 ${selectFour ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                11:00 - 11:45 AM
              </button>
            </div>
          </div>

          <div>
            <p className="text-[16px] font-[600]  opacity-[56%]">Afternoon</p>
            <div className="mt-5 flex flex-wrap gap-7 col-span-1">
              <button
                onClick={selectedFive}
                className={`px-3 py-1 border-2 ${selectFive ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                12:00 - 12:45 PM
              </button>
              <button
                onClick={selectedSix}
                className={`px-3 py-1 border-2 ${selectSix ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                2:00 - 2:45 PM
              </button>
              <button
                onClick={selectedSeven}
                className={`px-3 py-1 border-2 ${selectSeven ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                3:00 - 3:45 PM
              </button>
              <button
                onClick={selectedEight}
                className={`px-3 py-1 border-2 ${selectEight ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                4:00 - 4:45 PM
              </button>
            </div>
          </div>

          <div>
            <p className="text-[16px] font-[600] opacity-[56%]">Evening</p>
            <div className="mt-5 flex flex-wrap gap-7 col-span-1">
              <button
                onClick={selectedNine}
                className={`px-3 py-1 border-2 ${selectNine ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                5:00 - 5:45 PM
              </button>
              <button
                onClick={selectedTen}
                className={`px-3 py-1 border-2 ${selectTen ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                6:00 - 6:45 PM
              </button>
              <button
                onClick={selectedEleven}
                className={`px-3 py-1 border-2 ${selectEleven ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                7:00 - 7:45 PM
              </button>
              <button
                onClick={selectedTwelve}
                className={`px-3 py-1 border-2 ${selectTwelve ? "bg-[#0085D0] border-[#0085D0] text-white" : "bg-white border-black text-black"} rounded-3xl`}
              >
                8:00 - 8:45 PM
              </button>
            </div>
          </div>
        </div>
        <p className="mt-10 text-[18px] font-[500] text-[#8E8E8E]">
          i. Please select one or more slots to see when the slot or slots are
          next available
        </p>
      </div>

      {/* Calender */}
      <div className="mb-20 flex justify-center">
        <AppointmentCalendar />
      </div>

      <div className="mt-7 flex justify-center">
        <Link
          href="/consultants/pricing/booking-form/payments"
          className="w-1/3 py-4 text-white bg-[#BDBDBD] text-center justify-center items-center font-[600] text-[18px] rounded-2xl cursor-pointer"
        >
          Proceed
        </Link>
      </div>
    </div>
  );
}

export default slotSelection;
