import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="pt-40 min-h-screen flex flex-col items-center">
      <h2 className="text-[120px] font-[600] text-[#1F86D0] opacity-[24%]">
        404
      </h2>
      <h4 className="text-[44px] font-[500] text-[#1F86D0]">
        Oops! Page Not Found
      </h4>
      <p className="mt-3 w-1/4 text-[20px] font-[500] text-[#7F7F7F] text-center">
        It seems we can't find the page you're looking for, Let's get you back
        on track!
      </p>

      <div className="w-56 mt-10 flex justify-center">
        <Link
          href="/"
          className="w-full py-4 text-white bg-[#1F86D0] font-[600] text-[18px] rounded-[3rem] cursor-pointer"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
