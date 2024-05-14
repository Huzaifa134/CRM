import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ManageProfile = () => {
  const navigate = useNavigate()

  function goToEditProfile() {
    navigate('/manageProfile/editProfile')
  }
  return (
    <>
      <div className='h-[140vh] w-full bg-[#f8fafa] flex justify-center items-start'>
        <div className=' w-full mt-3 mx-3 bg-white border-[1.5px] border-[eff3f7] rounded-lg p-5'>

          <div className='flex items-start justify-between mt-3 mb-6'>
          <div className=' flex items-center gap-3'>
            <p className='p-3 bg-[#c6e5f5] h-[70px] w-[70px] text-4xl font-semibold text-center rounded-full flex items-center justify-center'>T</p>
            <div>
            <h2 className="font-semibold text-black text-lg">TravBizz IT Solutions</h2>
              <p className="text-black text-sm">Email: <span className="font-semibold">info@travbizz.com</span></p>
              <p className="text-black text-sm">Last Login: <span className="font-semibold">13/05/2024 - 04:03 PM</span></p>
            </div>
          </div >

        <div onClick={goToEditProfile} className='bg-[#c6e5f5] p-2 rounded-full hover:drop-shadow-xl transition-all hover:scale-125 active:scale-100 hover:bg-[#acafb191] cursor-pointer'>
          <MdEdit className='text-lg text-[#545e72]'/>
        </div>
          </div>
          <hr />

          <div className='py-5'>
            <h3 className=' font-semibold'>User Information</h3>

            <div className='flex gap-20 text-sm mt-3 ml-2' >
              <div className='flex flex-col gap-3'> 
                <p>Profile</p>
                <p>Mobile</p>
                <p>Website</p>
              </div>

              <div className='flex flex-col gap-3'>
                <p>Administrator</p>
                <p>1234567890</p>
                <p>www.travbizz.com</p>
              </div>
            </div>
          </div>


          <div className='py-5 mt-3'>
            <h3 className=' font-semibold'>Locale Information</h3>

            <div className='flex gap-6 text-sm mt-3 ml-2' >
              <div className='flex flex-col gap-3'> 
                <p>Language</p>
                <p>Country Location</p>
                <p>Time Format</p>
                <p>Time Zone</p>
              </div>

              <div className='flex flex-col gap-3'>
                <p>English (United States)</p>
                <p>India</p>
                <p>12 Hours</p>
                <p>(GMT 5:30) India Standard Time (Asia/Kolkata)</p>
              </div>
            </div>
          </div>


          <div className='py-5 mt-3'>
            <h3 className=' font-semibold'>Signature</h3>

            <div className='bg-[#f8fafa] border-[2px] border-[eff3f7] transition-all mt-2 p-8 text-sm font-semibold rounded-lg hover:bg-white cursor-pointer'>
              <p>Thanks & Regards,</p>
              <p className='mt-5'>Team Travbizz.com <br />
                + 91 9797871223</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ManageProfile