import React, { useState , useEffect } from 'react'
import ViewProposal from './ViewProposal'
import { FaPencilAlt } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";
import butterfly from "../../../assets/images/b.png"
import { Bs1CircleFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import viewImage from "../../../assets/images/birthdayIcon.png"
import view4 from "../../../assets/images/view4.jpeg"
import view2 from "../../../assets/images/view2.jpg"
import view3 from "../../../assets/images/view3.png"
import { FaPlus } from "react-icons/fa";
import BuildCard from './BuildCard';
import { Box, Modal } from '@mui/material';
import { IoClose } from 'react-icons/io5';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: "auto",
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  borderRadius: "8px",
  p: 1 ,

};





const Build = () => {

  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

const iconModal = <div>
<div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
<h3>Day 1 Details</h3>
<IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
</div>
<hr />

<div className='p-3'>
  <p htmlFor="Subject" className='text-xs mb-1'>Subject</p>
  <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />

  <p htmlFor="Details" className='text-sm mb-1 font-semibold mt-4' >Details</p>
  <textarea rows={10}  className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />

  <div className='flex justify-end'>
     <button onClick={handleClose} className='mt-4 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Send Mail</button>
  </div>
</div>

</div>

const obj = [
  {
    title: "Dubai Arrival",
    para: "Arrival in Dubai .. Pickup from Airport ...",
    image: view4,
    icon:   <FaPlus/>
  },
  {
    title: "Dubai Departure",
    para: "Departure From Dubai Happy to serve you ...",
    image: view2,
    icon:   <FaPlus/>
  },
  {
    title: "Ferrari World Full Day ",
    para: "Ferrari World Full Day with private tour... ",
    image: view3,
    icon:   <FaPlus/>
  },
  {
    title: "Full Day City Tour    ",
    para: "Full Day City tour with private basis...    ",
    image: view3,
    icon:   <FaPlus/>
  },
  {
    title: "Ferrari World Full Day ",
    para: "Ferrari World Full Day with private tour... ",
    image: view3,
    icon:   <FaPlus/>
  },
  {
    title: "Full Day City Tour    ",
    para: "Full Day City tour with private basis...    ",
    image: view3,
    icon:   <FaPlus/>
  }
]

const imageObj = [
  {
    image: "https://travbizz.website/crm/package_image/landcruiser1715157404.jpeg" ,
    head: "Landcruiser"
  },
  {
    image: "https://travbizz.website/crm/package_image/Butterfly1714465676.PNG" ,
    head: "Butterfly"
  },
  {
    image: "https://travbizz.website/crm/package_image/WhatsApp_Image_2023-10-11_at_11713953512.jpeg" ,
    head: "WhatsApp Image -- at"
  },
  {
    image: "https://travbizz.website/crm/package_image/25_Thailand1713339511.jpeg" ,
    head: "Thailand"
  },
  {
    image: "https://travbizz.website/crm/package_image/IMG_47711712599527.jpg" ,
    head: "IMG"
  },
  {
    image: "https://travbizz.website/crm/package_image/PDF-Image31712591174.jpg" ,
    head: "PDF-Image"
  },
]


const changePhotoModal = <div>
      <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
      <h3>Media library</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
    </div>
    <hr />

<div className='p-3'>

    <div className='flex '>
        <h3 className='text-md p-2 cursor-pointer hover:text-black rounded-t-md px-3 text-white bg-[#2da36b] hover:bg-[#bdffe0] transition-all font-semibold flex items-center gap-1'><HiPhoto className=''/>My Uploads</h3>
    </div>
    <hr />

    <div className='mt-5 flex items-center justify-between'>
      <input type="text" placeholder='Search' className='outline-none border-[1px] border-[#494949] w-[420px] p-1 px-2 rounded-md' />
      <button onClick={handleClose} className=' text-sm bg-[#12344d] text-white p-1 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Upload Photo</button>
    </div>

  <div className='flex flex-wrap justify-center gap-2'>
    {imageObj.map((item)=>{
      return <div className='mt-5 flex flex-col justify-center items-center'>
        <div className='overflow-hidden h-[90px]  p-1 transition-all'>
          <img src={item.image} className='w-[170px]' alt="" />
        </div>
      <p className='text-sm mt-2'>{item.head}</p>
    </div>
    })}
  </div>

<div className='flex justify-center mt-5 mb-3'>
  <button className=' text-sm bg-[#12344d] text-white p-1 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Load more</button>
</div>


</div>


</div>

  return (
    <>
        <ViewProposal/>
        <div className='bg-[#f5f7f9] h-[90%] w-full p-2'>

          <div className='parent w-full bg-[#fff] border-2 p-2 justify-between flexborder-[#eeefef] rounded-md flex'>
                <div className='child-1 w-[800px] bg-slate-100'>
                
                <div className='box w-[800px] h-[160px] flex flex-col justify-end relative'>
                <div className='bg-gradient-to-t from-[#000] to-[#fff] h-full w-full absolute z-10 opacity-80'></div>
                <img className='absolute top-0 z-0 inset-0 w-full h-full object-cover ' src={butterfly} alt='' />

                     <div className='absolute top-0 right-0 p-2 flex items-center gap-2 bg-[#00000070] bg-opacity-5 rounded-md mt-2 mr-2 z-30 cursor-pointer'   onClick={() => handleOpen(changePhotoModal)}>
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
            <div className='grand-parent flex w-full bg-[#ffffff]'>
         <div className='grand-child-1 '>
         <div className='w-[190px] p-2 bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>


            <div className='w-[190px] p-2 bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>



            <div className='w-[190px] p-2 bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>



            <div className='w-[190px] p-2 bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>


            

              <div className=' w-[190px] p-3 bg-[#f3f2f2] flex items-center hover:bg-[#cffcff] justify-evenly gap-2 '>
             <GrDocumentText /><p className='text-sm font-semibold'>Package Terms</p><div>
             <FaChevronRight className='text-white hover:text-[#5beafd]' />
             </div>
            </div>
         </div>
         


            <div className='grand-child-2  w-full'>

      <div className='flex justify-between mt-2'>
      <table>
            <tr>
              <td className='border-[1px] border-[#f1f1f1] p-2  text-[#000]  font-semibold'>Day 2</td>
              <td className='border-[1px] border-[#f1f1f1] p-2  text-[#000]  font-semibold'>03 Jun - Mon    Abu Dhabi</td>
            </tr>
          </table>

        <div className='flex '>
        <button className='text-sm font-semibold text-[#fff] bg-[#2e8be2] px-3 mx-2 '>+New Event</button>
        </div>

      </div>
      <div className='w--full bg-[#ffff] border-2 border-[#f1f1f1] shadow-md mx-2 p-3 mt-4 flex justify-between'>
              <p className='italic text-[#adabab] font-normal'>Enter Day Wise Details</p>

              <div onClick={()=> handleOpen(iconModal)} className='w-7 h-7 border-[1px] border-[#2e8be2] rounded-full flex items-center justify-center hover:bg-[#2e8be2] group'>
                    <MdEdit className='text-[#2e8be2] group-hover:text-[#fff]' />
              </div>

            </div>

            </div>

          
            </div>

                </div>

   <div>
    
   <div className='child-2 bg-[#ffff] flex gap-2 items-start mx-2'>
  <div className='flex items-start p-2 border-2 border-[#f1f1f1]'>
    <input type="text" placeholder='Search' className='outline-0 p-1 w-48' />
  </div>

  <div className='p-2 border-2 border-[#f1f1f1]'>
  <select className='outline-0 p-1 w-56'>
    <option value="Data itinerary">Data itinerary</option>
    <option value="Accommondation">Accommondation</option>
    <option value="Activiy">Activiy</option>
    <option value="Transportation">Transportation</option>
    <option value="Insurance/Visa">Insurance/Visa</option>
    <option value="Meal">Meal</option>
    <option value="Flight">Flight</option>
    <option value="Leisure">Leisure</option>
    <option value="Cruise">Cruise</option>
  </select>
</div>

</div>

<div className='bg-[#f5f7f9]'>

{obj.map((item, index) => (
        <BuildCard
          key={index} // Ensure each card has a unique key
          title={item.title}
          para={item.para}
          image={item.image}
          icon={item.icon}
        />
      ))}



  </div> 

  
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

       
        
    </>
  )
}

export default Build






{/* <div className='items-center text-[#fff]  font-semibold'>
<p>Day</p>
<p className='flex items-center justify-center'>2</p>
</div>


<div className='dhabi text-[#fff] gap-4 justify-center mt-3 flex'>
<p className='font-semibold text-lg'>03 Jun - Mon</p>
<FaLongArrowAltRight  className='font-semibold text-lg'/>
<p className='font-semibold text-lg'>Abu Dhabi</p>
</div> */}



