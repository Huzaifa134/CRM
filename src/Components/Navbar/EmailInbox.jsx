

import { RiPencilFill } from "react-icons/ri";
import { MdForwardToInbox } from "react-icons/md";
import CenterModal from "./ComposeModel";
import { useState } from "react";


const EmailInbox = () => {



  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };


  const handleCloseModal = () => {
    setModalOpen(false);
  };


  const data1 = <div>
   <div className="bg-[#c2e7ff] p-2">
   <p className="">New Message </p>
   <hr />
   </div>
   <div className="mt-3">
    <p>To: <input type="text" className="border-none outline-none" /></p>
    <hr />
   </div>

   <div className="mt-3">
    <p>Subject <input type="text"  className="border-none outline-none" /></p>
    <hr />
   </div>
  </div>

   

  
  return (
    <div className="bg-[#f6f8fc] h-full">
 <div className="flex">
 <div className=" p-3">
          <div>
            <button className="flex items-center font-semibold bg-[#c2e7ff] gap-3 px-3 p-4 rounded-xl"  onClick={()=>handleOpenModal(data1)}> <RiPencilFill className="text-xl "/>  Compose</button>
            </div>


            <div className="flex  w-56 bg-[#c2e7ff] justify-between p-2 rounded-xl mt-5">
            <button className="flex items-center gap-3 font-semibold text-base "> <MdForwardToInbox/> Inbox
            </button>
            <div>
            <p className="text-sm">4%</p>
            </div>
           
            </div>
      </div>

      <div className="bg-[#ffff] w-full p-3 rounded-lg">
        <div>

        <div className="flex justify-between">
        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.</p>
        <p>4:00pm</p>
        </div>
        <hr className="border-[1px] border-[#f3f2f2] mt-2" />



        <div className="flex justify-between">
        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.</p>
        <p>4:00pm</p>
        </div>
        <hr className="border-[1px] border-[#f3f2f2] mt-2" />



        <div className="flex justify-between">
        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.</p>
        <p>4:00pm</p>
        </div>
        <hr className="border-[1px] border-[#f3f2f2] mt-2" />



        <div className="flex justify-between">
        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.</p>
        <p>4:00pm</p>
        </div>
        <hr className="border-[1px] border-[#f3f2f2] mt-2" />



        <div className="flex justify-between">
        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.</p>
        <p>4:00pm</p>
        </div>
        <hr className="border-[1px] border-[#f3f2f2] mt-2" />



        <div className="flex justify-between">
        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.</p>
        <p>4:00pm</p>
        </div>
        <hr className="border-[1px] border-[#f3f2f2] mt-2" />



        <div className="flex justify-between">
        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.</p>
        <p>4:00pm</p>
        </div>
        <hr className="border-[1px] border-[#f3f2f2] mt-2" />



        <div className="flex justify-between">
        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.</p>
        <p>4:00pm</p>
        </div>
        <hr className="border-[1px] border-[#f3f2f2] mt-2" />



        



        
        
        
        <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalContent} />
     
        </div>
          
      </div>
 </div>
    </div>
  )
}

export default EmailInbox