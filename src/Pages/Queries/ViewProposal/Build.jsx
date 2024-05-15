import React from 'react'
import ViewProposal from './ViewProposal'
import { FaPencilAlt } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";
import butterfly from "../../../assets/images/b.png"
import { Bs1CircleFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";






const Build = () => {
  return (
    <>
        <ViewProposal/>
        <div className='bg-[#f5f7f9] h-[90%] w-full p-2'>

          <div className='parent w-full bg-[#fff] border-2 p-2 flexborder-[#eeefef] rounded-md'>
                <div className='child-1 w-[220px]'>
                
                <div className='box w-[800px] h-[160px] flex flex-col justify-end relative'>
                <div className='bg-gradient-to-t from-[#000] to-[#fff] h-full w-full absolute z-10 opacity-80'></div>
                <img className='absolute top-0 z-0 inset-0 w-full h-full object-cover' src={butterfly} alt='' />

                     <div className='absolute top-0 right-0 p-2 flex items-center gap-2 bg-[#00000070] bg-opacity-5 rounded-md mt-2 mr-2 z-30'>
                    <HiPhoto className='text-white'/>
                    <button className='bg-transparent text-white'>Change Cover Photo</button>
                    </div>
                    <div className='top-0 mx-4 p-2 z-30'>
            <div className='flex gap-3 text-white items-center'>
              <p className='font-semibold text-2xl'>Magical Dubai</p>
                    <FaPencilAlt />
              </div>
              <p className='text-white mt-auto'>Dubai, Abu Dhabi</p>
         </div>
    </div>
            <div className='grand-parent flex w-full bg-slate-800'>
         <div className='grand-child-1 '>
         <div className='w-[190px] p-2 bg-[#2fd1dd]'>
           <div className='w-[190px] p-3  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-xl ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2'>
              <option value="abu-dhabi">Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>


              <div className=' w-[190px] p-3 bg-[#f3f2f2] flex items-center hover:bg-[#cffcff] justify-evenly gap-2 '>
             <GrDocumentText /><p className='text-sm font-semibold'>Package Terms</p><div>
             <FaChevronRight className='text-white hover:text-[#5beafd]' />
             </div>
            </div>
         </div>


            <div className='grand-child-2 w-[] flex bg-[#ee1e1e]'>

              <div className='items-center  font-bold'>
                <p>Day</p>
                <p>2</p>
              </div>

              <div className='dhabi'>
              <p>03 Jun - Mon Abu Dhabi</p>

              </div>
            </div>
            </div>


                </div>
                <div className='child-2'>

                </div>
          </div>
        </div>
    </>
  )
}

export default Build