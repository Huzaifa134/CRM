import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';



const ViewProposal = () => {
  return (
    <>
        <nav className='bg-[#06304c] text-white flex justify-between text-lg font-semibold p-1'>
            <div className='flex justify-evenly gap-9'>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg '><Link className='flex items-center gap-1' to={"/queries/queriesDetail"}><FaArrowLeft />QUERY</Link></button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg '><Link className='flex items-center gap-1' to={"/queries/proposalSent/viewProposal/"}>BUILD</Link></button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg '><Link className='flex items-center gap-1' to={"/queries/proposalSent/viewProposal/pricing"}>PRICING</Link></button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg '><Link className='flex items-center gap-1' to={"/queries/proposalSent/viewProposal/final"}>Final</Link></button>
            </div>

            <div className='flex justify-evenly gap-9'>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg' > <IoDocumentText /> QUOTATION </button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg'><IoDocumentText />EXPORT</button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg'><FaPaperPlane />SHARE</button>
            </div>
        </nav>
    </>
  )
}

export default ViewProposal