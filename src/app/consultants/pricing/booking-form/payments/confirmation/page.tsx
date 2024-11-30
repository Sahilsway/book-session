import React from "react";
import Link from "next/link";

function Confirmation() {
  return (
    <div className="pt-40 my-auto min-h-screen">
      <div className="flex flex-col items-center justify-center text-center">
        <h4 className="text-[52px] font-[600]">Booking Confirmation!</h4>
        <p className="w-1/2 mt-7 text-[18px] font-[500] text-[#646464]">
          Congratulations! Your therapy session has been successfully scheduled.
          We're looking forward to helping you on your journey to better mental
          health.
        </p>
      </div>
      <div className="mt-20 flex flex-col items-center">
        <div className="w-1/3">
          <p>i. Instructions</p>
          <ul className="mt-5 list-disc text-[16px] font-[500]">
            <li>
              A confirmation email with all the session details has been sent to
              &nbsp;
              <a className="text-[#3F92F1]" href="mailto:amal123@gmail.com">
                amal123@gmail.com
              </a>
            </li>
            <li>
              If this is your first session, consider jotting down any key
              points or questions you want to discuss.
            </li>
          </ul>
        </div>
        <div className="w-1/3 mt-24 flex justify-center">
          <Link
            href="/"
            className="w-full py-4 text-white text-center bg-[#1F9FE6] font-[600] text-[18px] rounded-xl"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
