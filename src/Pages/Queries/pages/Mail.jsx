import React from 'react'
import { GoMail } from "react-icons/go";
import { FaArrowAltCircleLeft, FaInfoCircle } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoClose } from 'react-icons/io5';
import { MdOutlineReply } from 'react-icons/md';
import logo from '../../../assets/images/logo.png'
import { Height } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: "90vh",
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  borderRadius: "8px",
  p: 1 ,
  overflowY: "scroll",

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


  <hr />


  <h4 className='text-2xl ml-2 font-semibold mt-1'>Request Received - Ref. No. 002499</h4>


{/* table div */}

    <div className='m-2 bg-[#f4fdff] pb-8'>
      <div className='flex justify-center'>
        <img src={logo} className='mt-8 mb-5' alt="" />
      </div>

        <div className='border-[1px] bg-white mx-[80px] p-4 pb-8 border-t-[4px] border-t-[#419bf3]'>
          <h4 className='text-2xl font-semibold mt-1'>Your Query Detail</h4>
          <p className='text-sm font-semibold text-[#707070] mt-1'>While replying to this query, please dont change the subject line.</p>

          <div className='bg-[#f7f7f7] p-3 mt-5'>
            <h3 className=' font-semibold bg-[#efefef] p-2'>Contact Detail</h3>

            <table className='text-xs w-full mt-1'>
              <tr className='font-semibold w-full'>
                <td>Name</td>
                <td>Phone/Mobile</td>
              </tr>
              <tr>
                <td className='py-2'>surender gupta</td>
                <td className='py-2'>98104 9059</td>
              </tr>
            </table>


             <h3 className=' font-semibold bg-[#efefef] p-2 mt-5'>Query Detail</h3>

            <table className='text-xs w-full mt-1'>
              <tr className='font-semibold w-full'>
                <td>From Date</td>
                <td>To Date</td>
                <td>Destination</td>
                <td>Duration</td>
              </tr>
              <tr>
                <td className='py-2'>02-04-2024</td>
                <td className='py-2'>05-04-2024</td>
                <td className='py-2'>Goa, ,</td>
                <td className='py-2'>3 Nights / 4 Days</td>
              </tr>
              <tr className='font-semibold w-full'>
                <td className='pt-5'>Created Date</td>
                <td className='pt-5'>Adult</td>
                <td className='pt-5'>Child</td>
                <td className='pt-5'>Infant</td>
              </tr>
              <tr>
                <td className='py-2'>30-03-2024 09:55 PM</td>
                <td className='py-2'>2</td>
                <td className='py-2'>0</td>
                <td className='py-2'>0</td>
              </tr>
            </table>
         
            
      

          </div>

            
        </div>
        
    </div>

    <div className='p-2 text-sm font-semibold'>
      <p className='font-normal'>3Night 4days</p>
      <p className='mt-5'>Thanks & Regards,</p>
      <p className='mt-5 mb-5'>Team Xogul <br />
        + 91 9797871223</p>
      <hr />
      <button className='mt-8 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'><MdOutlineReply />Reply</button>
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