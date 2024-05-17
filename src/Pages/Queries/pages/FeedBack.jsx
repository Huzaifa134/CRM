import React from "react";

const FeedBack = () => {
  return (
    <>
      <div className="p-3">
        <div className="flex justify-between bg-[#f7f7f7] p-1 pl-3 rounded-md items-center">
          <p className="font-semibold text-sm">Feedback</p>
          <button className="text-xs font-semibold bg-blue-700 text-white p-1 px-3 rounded-md">
            Send Feedback Form
          </button>
        </div>

        <div className="border-[1px] border-[#ececec] mt-3 p-3 flex flex-col justify-center items-center rounded-md h-[100px]">
            <p className="text-sm">Wating For Feedback</p>
            <p className="text-xs mt-2"><span className="font-semibold">Send Date:</span> 17-05-2024 10:13 AM</p>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
