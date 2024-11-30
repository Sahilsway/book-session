"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [activeDate, setActiveDate] = useState(new Date()); // Track current calendar view

  const today = new Date();

  // Simulated available dates
  const availableDates = [
    new Date(2024, 7, 3),
    new Date(2024, 7, 6),
    new Date(2024, 7, 15),
    new Date(2024, 7, 16),
    new Date(2024, 7, 24),
  ];

  const isAvailable = (date: Date) =>
    availableDates.some(
      (availableDate) => date.toDateString() === availableDate.toDateString(),
    );

  const isPastDate = (date: Date) => date < today.setHours(0, 0, 0, 0);

  const tileClassName = ({ date }: { date: Date }) => {
    if (isPastDate(date)) return "text-gray-400";
    if (isAvailable(date)) return "text-blue-500 font-semibold";
    return "text-black"; // Ensure all normal days, including Sat/Sun, are black
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      {/* Custom Navigation */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-[24px] font-[500]">Available date</span>
          <div className="w-5 aspect-square bg-[#00A3FF] rounded-md"></div>
        </div>
        <div className="flex items-center gap-4">
          {activeDate > today.setDate(1) && (
            <button
              onClick={() =>
                setActiveDate(
                  new Date(activeDate.setMonth(activeDate.getMonth() - 1)),
                )
              }
              className="text-black"
            >
              <IoIosArrowBack />
            </button>
          )}
          <span className="text-[24px] font-[500]">
            {`${activeDate.getFullYear()} ${activeDate.toLocaleString("default", { month: "short" })}`}
          </span>
          <button
            onClick={() =>
              setActiveDate(
                new Date(activeDate.setMonth(activeDate.getMonth() + 1)),
              )
            }
            className="text-black"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Calendar */}
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        activeStartDate={activeDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveDate(activeStartDate!)
        }
        tileDisabled={({ date }) => isPastDate(date)}
        tileClassName={tileClassName}
        nextLabel={null}
        prevLabel={null}
      />

      {/* Selected Date */}
      {selectedDate && (
        <p className="mt-4 text-center">
          Selected Date: {selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
}

export default AppointmentCalendar;
