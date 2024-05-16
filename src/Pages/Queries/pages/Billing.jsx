import React from 'react'
import { FaBriefcase } from "react-icons/fa";

const Billing = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full h-[70%] text-[#999999]'>
          <FaBriefcase className='text-6xl mb-3' />
          <p>No itinerary confirmed or supplier's cancellation date not entered</p>
      </div>
    </>
  )
}

export default Billing