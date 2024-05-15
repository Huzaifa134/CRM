import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CenterModal from './CenterModal';
import { IoClose } from "react-icons/io5";




const ViewProposal = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };


  const handleCloseModal = () => {
    setModalOpen(false);
  };
  

  const quotationModal = <div>quotation data</div>



  const exportModal = <div>

    <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center'>
      <h3>Export Itinerary</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr className='mt-2'/>
    <div className='p-2'>
      hello
    </div>
  </div>
  const shareModal = <div>share data</div>

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
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg' type='quotation'  onClick={() => handleOpenModal(quotationModal)}> <IoDocumentText /> QUOTATION </button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg' type='export' onClick={() => handleOpenModal(exportModal)}><IoDocumentText />EXPORT</button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg' type='share' onClick={() => handleOpenModal(shareModal)}><FaPaperPlane />SHARE</button>
            </div>
        </nav>


          <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalContent} />
                
    </>
  )
}

export default ViewProposal