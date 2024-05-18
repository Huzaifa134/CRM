import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import { IoDocumentText, IoLogoWhatsapp } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CenterModal from './CenterModal';
import { IoClose } from "react-icons/io5";
import { HiPhoto } from 'react-icons/hi2';
import logo from "../../../assets/images/logo.png"




const ViewProposal = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
    if (content === exportModal) {
      return console.log("Export");
    }
  };

useEffect(() => {
 handleOpenModal(quotationModal)
}, [])


  

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  

  const quotationModal = <div>
    <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[900px]'>
      <h3>View Quotation</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr />
    <div className='p-3'>
      <div className='flex justify-center mb-3'>
        <img src={logo} alt="" />
      </div>
      <hr />
      <div className='mt-3'>
          <h3 className='text-sm font-semibold'>Dear Nikhil samar,</h3>
          <p className='text-sm mt-2'>This is TravBizz and I will be working with you to plan your trip to Dubai</p>
          <p className='text-sm mt-2 '>Please find below details for your trip and feel free to call me at +911234567890 or click here to view more details about this trip.</p>
      </div>

      <table className='w-full mt-6'>
        <tr >
          <td className='border-[1px] w-full text-sm p-1 bg-black text-white' colSpan={4}>Query Details</td>
        </tr>
        <tr className='w-full'>
          <td className='border-[1px] text-sm p-1 font-semibold'>QueryId:</td>
          <td className='border-[1px]  text-sm p-1'>#141391</td>
          <td className='border-[1px] w-[50px] text-sm p-1 font-semibold'>Adult(s):</td>
          <td className='border-[1px] w-[70px] text-sm p-1'>2</td>
        </tr>
        <tr className='w-full'>
          <td className='border-[1px]  text-sm p-1 font-semibold'>Nights:</td>
          <td className='border-[1px]  text-sm p-1'>2 Nights & 3 Days</td>
          <td className='border-[1px]  text-sm p-1 font-semibold'>Child(s):</td>
          <td className='border-[1px] text-sm p-1'>0</td>
        </tr>
        <tr>
          <td className='border-[1px]  text-sm p-1 font-semibold'>Destination Covered:</td>
          <td className='border-[1px]  text-sm p-1'>Dubai</td>
          <td className='border-[1px] w-[50px] text-sm p-1 font-semibold'>Start Date:</td>
          <td className='border-[1px] text-sm p-1'>Mon, 13 May, 2024</td>
        </tr>
        <tr>
          <td className='border-[1px] text-sm p-1 font-semibold'>Query Date:</td>
          <td className='border-[1px] text-sm p-1'>11-May-2024</td>
          <td className='border-[1px] text-sm p-1 font-semibold'>End Date:</td>
          <td className='border-[1px] text-sm p-1'>Wed, 15 May, 2024</td>
        </tr>
      </table>

      <h3>Nikhil Ji Dubai Trip</h3>
    </div>
  </div>



  const exportModal = <div>

    <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2  items-center w-[500px]'>
      <h3>Export Itinerary</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr className=''/>
    <div className='p-2 my-6 flex flex-col gap-3 items-center justify-center'>
        <button className='flex items-center gap-3 border-[2px] border-[#9fffe5] border-dashed rounded-md justify-center w-[400px] bg-[#eafffd] p-5 text-2xl font-semibold'><HiPhoto/>Export With Images</button>
        <button className='flex items-center gap-3 border-[2px] border-[#9fffe5] border-dashed rounded-md justify-center w-[400px] bg-[#eafffd] p-5 text-2xl font-semibold'><HiPhoto/>Export With Images Option 2</button>
        <button className='flex items-center gap-3 border-[2px] border-[#ff8c8c] border-dashed rounded-md justify-center w-[400px] bg-[#eafffd] p-5 text-2xl font-semibold'><FaDownload />Export Without Images</button>
        <button className='flex items-center gap-3 border-[2px] border-[#ff8c8c] border-dashed rounded-md justify-center w-[400px] bg-[#eafffd] p-5 text-2xl font-semibold'><FaDownload />Hotel Voucher</button>
    </div>
  </div>


  const shareModal = <div>
     <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[700px]'>
      <h3>Share</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr />

  <div className='overflow-y-scroll h-[80vh]'>


    <div className='mt-3 p-3 flex gap-5'>
      <button className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PRIVATELY</button>
      <button onClick={() => handleOpenModal(sharePublicly)} className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PUBLICLY</button>
    </div>

    <div className='p-3'>
      <p className='text-sm'>Share your itinerary privately via email to specific recipients. Recipients will be prompted to create a login in order to view this itinerary.</p>
      <h3 className='text-2xl font-semibold mt-3'>Clients</h3>
      <p className='text-sm'>Select client you would like to email this itinerary to.</p>

      <table className='mt-8'>
        <tr className='w-full hover:bg-[#f5f8fa] transition-all'>
          <td className='border-[1px] p-1 px-3'><input type="checkbox" /></td>
          <td className='border-[1px] p-1 px-3 w-full'>Nikhil samar</td>
          <td className='border-[1px] p-1 px-3 w-full'>nikhilsamar1992@gmail.com</td>
          <td className='border-[1px] p-1 px-3 w-full'>9619756981</td>
        </tr>
      </table>

      <input type="text" placeholder='CC Mail' className='w-full p-1 border-[1px] outline-none mt-5 px-2 rounded-md focus:border-black transition-all ' />

      <p className='text-xl font-semibold mt-6'>Add a message</p>
      <textarea rows={3} className='w-full p-1 border-[1px] outline-none mt-2 px-2 rounded-md focus:border-black transition-all ' name="" id="" placeholder='Enter messsage here'></textarea>

      <hr className='mt-5'/>

    <div className='flex justify-end mt-5'>
      <button className='bg-[#46cd93] hover:bg-[#41b884] text-white font-semibold p-2 px-3 rounded-md'>Send</button>
    </div>

    </div>

    </div>
  </div>


const sharePublicly = <div>
     <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[700px]'>
      <h3>Share</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr />

    <div className='mt-3 p-3 flex gap-5'>
      <button onClick={() => handleOpenModal(shareModal)} className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PRIVATELY</button>
      <button onClick={() => handleOpenModal(sharePublicly)} className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PUBLICLY</button>
    </div>

  <div className='p-3 mb-5'>
    <p className='text-sm'>Activate link to enable the ability to share this itinerary with anyone (no sign-in required).</p>
    <p className='mt-4 text-sm'>
      <input type="checkbox" /> Turn on link sharing
    </p>

    <div className='flex justify-between mt-5 items-end'>
      <p className='text-sm'>With Price (Copy this link)</p>
      <button className='flex items-center gap-1 bg-[#46cd93] hover:bg-[#39b881] text-sm text-white p-1 px-3 rounded-md'><IoLogoWhatsapp />WhatsApp</button>
    </div>

    <input defaultValue="https://travbizz.website/crm/sharepackage/104226/nikhil-ji-dubai-trip.html" type="text" className='w-full p-1 outline-none border-[1px] mt-2 focus:border-black transition-all rounded-md bg-[#e9ecef] border-gray-300' />

    <div className='flex justify-between mt-5 items-end'>
      <p className='text-sm text-[#FF0000]'>With Price (Copy this link)</p>
      <button className='flex items-center gap-1 bg-[#46cd93] hover:bg-[#39b881] text-sm text-white p-1 px-3 rounded-md'><IoLogoWhatsapp />WhatsApp</button>
    </div>

    <input defaultValue="https://travbizz.website/crm/share/104226/nikhil-ji-dubai-trip.html" type="text" className='w-full p-1 outline-none border-[1px] mt-2 focus:border-black transition-all rounded-md bg-[#e9ecef] border-gray-300' />
  </div>
</div>


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


          <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalContent}/>
                
    </>
  )
}

export default ViewProposal