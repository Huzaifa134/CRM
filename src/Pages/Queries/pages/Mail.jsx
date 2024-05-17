import React from 'react'
import { GoMail } from "react-icons/go";
import { FaArrowAltCircleLeft, FaInfoCircle } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoClose } from 'react-icons/io5';
import { MdOutlineReply } from 'react-icons/md';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  borderRadius: "8px",
  p: 1,

};


const Mail = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const mailModal = <div>
     <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
    <h3>Mail</h3>
    <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
  </div>
  <hr />
  <div className='p-2 flex justify-between items-center' >
    <div>
      <p className='text-xl font-semibold'>niraj</p>
      <p className='text-sm font-semibold text-[#707070]'>northeasttravels1975@gmail.com</p>
    </div>
    <MdOutlineReply className="text-[#007bff] hover:text-[#0056b3] cursor-pointer"/>
  </div>
  </div>

  return (
    <>
    <div className='p-3'>

      <div className='bg-[#f3f5f7] p-4 flex gap-4'>
        <button className='text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-5 hover:bg-[#1699dd]'><GoMail />Compose</button>
        <button className='text-sm text-[#12344d] bg-white border-[1.5px] border-[#b1b0b0] p-2 px-5 rounded-md font-semibold flex items-center gap-1'><FaInfoCircle />northeasttravels1975@gmail.com</button>
      </div>

      <div className='flex items-center p-3 gap-5 hover:bg-[#f3f5f7] cursor-pointer' onClick={handleOpen}>
         <FaArrowAltCircleLeft className='text-[#f47836]' />
         <p className='text-sm '>northeasttravels1975@gmail.com</p>
         <p className='text-sm ml-36'>Request Received - Ref. No. 002499</p>
         <p className='text-sm ml-36'>30 March 2024</p>
      </div>
      <hr/>
    </div>



    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           {mailModal}
        </Box>
      </Modal>




    </>
  )
}

export default Mail