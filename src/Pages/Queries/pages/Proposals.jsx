import React, { useEffect, useState } from "react";
import image from "../../../assets/images/lanscape.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//3 dots MUI
// import * as React from 'react';
import Popper from "@mui/material/Popper";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: "90vh",
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  borderRadius: "8px",
  p: 1 ,

};




function Proposals() {
  // 3dots MUI
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  

  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);



  const dropdownArr = ["2N-3D Package" , "Adventure" , "Beach" , "Economy Umrah" , "Flight Booking"]

  const createItineraryModal = <div>
    <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
    <h3>Itinerary setup</h3>
    <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
    </div>
    <hr />

<div className="overflow-y-scroll h-[78vh]">


    <div className="p-3 mt-5">
      <div className='w-full'>
        <p htmlFor="First Name" className='text-xs mb-1'>Itinerary Name</p>
        <input className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
      </div>

      <div className="flex gap-3 mt-4">
          <div className='w-full'>
            <p htmlFor="First Name" className='text-xs mb-1'>Start Date</p>
            <input className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="date" />
          </div>
          <div className='w-full'>
           <p htmlFor="First Name" className='text-xs mb-1'>End Date</p>
           <input className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="date" />
           </div>
      </div>

      <div className="flex mt-4 gap-3">
          <div className='w-[150px]'>
            <p htmlFor="First Name" className='text-xs mb-1'>Adult</p>
            <input min={0} defaultValue={0} className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="number" />
          </div>
          <div className='w-[150px]'>
              <p htmlFor="First Name" className='text-xs mb-1'>Child</p>
             <input min={0} defaultValue={0} className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="number" />
          </div>
         <div className='w-full'>
           <p htmlFor="First Name" className='text-xs mb-1'>Destinations</p>
            <input placeholder="Enter Destinations" className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
          </div>
      </div>

      <div className='w-full mt-4'>
           <p htmlFor="First Name" className='text-xs mb-1'>Notes</p>
           <textarea className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" name="" id="" placeholder="Notes"></textarea>
      </div>
    </div>

    {/* <h3 className="text-xl font-semibold ml-2">Website Setting</h3> */}

    <div className="p-3">
      {/* <div className='w-full'>
        <p htmlFor="First Name" className='text-xs mb-1'>Theme</p>
         <select className='outline-none  border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
            {dropdownArr.map((item)=>{
              return <option value="">{item}</option>
            })}
         </select>
       </div>

       <div className='w-full mt-4'>
        <p htmlFor="First Name" className='text-xs mb-1'>Show on Website</p>
         <select className='outline-none  border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
           <option value="">No</option>
           <option value="">Yes</option>
         </select>
       </div>

       <div className='w-full mt-4'>
        <p htmlFor="First Name" className='text-xs mb-1'>Per Person Price</p>
        <input className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
      </div> */}

      <div className='w-full'>
        <p htmlFor="First Name" className='text-xs mb-1'>Validity</p>
        <input className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="date" />
      </div>

      <div className='w-full mt-4'>
        <p htmlFor="First Name" className='text-xs mb-1'>Popular</p>
         <select className='outline-none  border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
           <option value="">No</option>
           <option value="">Yes</option>
         </select>
       </div>

       <div className='w-full mt-4'>
        <p htmlFor="First Name" className='text-xs mb-1'>Special</p>
         <select className='outline-none  border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
           <option value="">No</option>
           <option value="">Yes</option>
         </select>
       </div>

       <div className='w-full mt-4'>
           <p htmlFor="First Name" className='text-xs mb-1'>About Package</p>
           <textarea className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" name="" id="" ></textarea>
      </div>

      <hr className="mt-6"/>

      <div className="flex justify-end gap-3">
          <button onClick={handleClose} className='mt-5 text-sm bg-white text-black border-[1px] p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#ebf6fc]'>Cancel</button>
          <button onClick={handleClose} className='mt-5 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Save</button>
      </div>

    </div>
        
    </div>
  </div>


  const open1 = Boolean(anchorEl);
  const id = open1 ? "simple-popper" : undefined;
  return (
    <div className="m-3 flex flex-wrap flex-col">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Proposals</h1>
        <div className="flex gap-5 m-2">
          <button className="bg-black rounded-md text-white py-1 px-5 text-sm">
            All proposals
          </button>
          <button className="bg-gray-400 rounded-md text-black py-1 px-5 text-sm">
            Archived Proposals
          </button>
        </div>
      </div>
      <div className="flex">
      <div className="border-2 rounded-md w-80 ">
        <div className="w-80 relative">
          <a href="">
            <img src={image} alt="image" className="w-80 h-52" />
          </a>

          <div className="absolute top-0 right-0">
            <button aria-describedby={id} type="button" onClick={handleClick}>
              <BsThreeDotsVertical />
            </button>
            <Popper id={id} open1={open1} anchorEl={anchorEl}>
              <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                <a href="block" className="">
                  Actions
                </a>{" "}
                <br />
                <a href="">Whatsapp</a> <br />
                <a href="">Edit Itinerary</a> <br />
                <a href="">Duplicate</a> <br />
                <a href="">Archive</a> <br />
              </Box>
            </Popper>
          </div>
        </div>
        <div className="pl-4 text-sm">
          <table className="w-80">
            <thead className="p-5">
              <tr className="p-5">
                <td className="pr-20  pb-5">
                  ID: <br />
                  104216
                </td>
                <td>
                  Pax: <br />2 Adult(s)-0 Child(s)
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pb-5">
                  From <br />
                  18 Jul 2024
                </td>
                <td>
                  To: <br />
                  22 Jul 2024
                </td>
              </tr>
              <tr>
                <td>By: Time to..</td>
                <td>Created:09/05/2024</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" w-[80%] border-2 flex justify-center items-center m-auto my-5"></div>
        <div className="flex flex-col items-center justify-center text-xl font-bold mb-5">
          <h1>Option 1: ₹47,020</h1>
          <h1>Option 2: ₹31,347</h1>
        </div>
        <div className="flex flex-col gap-4 w-full justify-center items-center mb-7">
          <button className="border-2 border-[#b7b7b7] w-[80%] rounded-md font-bold py-2 px-5 bg-gray-200">
            Make Confirm
          </button>
          <button className="border-2 border-[#b7b7b7] w-[80%] rounded-md font-bold py-2 px-5 bg-[#58b4ff]">
            View Quotation
          </button>
        </div>
      </div>
      <div className=" bg-gray-200 rounded-md h-[550px] ml-3 flex gap-5 w-80 justify-center items-center flex-col">
        {/*create */}
        <div>
        <button onClick={() => handleOpen(createItineraryModal)} className="flex justify-center items-center text-white py-2 px-5 gap-2 w-64 bg-[#2a8bda]">
        <FaPlus />
        Create itinerary
        </button>

        </div>
        {/* insert */}
        <div>
          <button className="flex justify-center items-center text-white py-2 px-5 gap-2 w-64 bg-[#2575b7]">
            <FaDownload />
            Insert itninerary
          </button>
        </div>
      </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           {modalContent}
        </Box>
      </Modal>
    </div>
  );
}

export default Proposals;
