
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";



const FollowUps = () => {
  return (
  <>
    <div className="flex justify-between bg-[#f7f7f7] p-1 m-2 rounded-md items-center">
      <p className="font-semibold text-sm">Followup's / Task</p>
      <button className="text-sm font-semibold bg-blue-700 text-white p-1 px-2 rounded-md">+ Add Task</button>
    </div>

    <div className="flex align-top">

  <div className="bg-[#f7f7f7] border-2 border-[#ebf2ef] mx-2 rounded-full flex items-center          justify-center w-12 h-12">
    <FaRegCalendarCheck className="text-[#414141] " />
  </div>

  <div className="bg-[#ebfff7] border-2 border-[#ebf2ef] flex justify-between w-full p-3 m-2 items-center rounded-lg">
    <div className="flex flex-col items-start"> 
      <p className="text-[12px] font-semibold">TravBizz IT SolutionsDue on: 16/05/2024 - 01:00 PM</p>
      <p className="text-[14px] p-1 font-semibold">hello</p>
    </div>
    <FaCheckSquare  className="text-2xl text-[#5da334]" />
  </div>
</div>

  </>
  )
}

export default FollowUps