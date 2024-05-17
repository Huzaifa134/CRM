import { GoMail } from "react-icons/go";
import { FaInfoCircle } from "react-icons/fa";

const Mail = () => {
  return (
    <>
      <div className='bg-[#cfd7df] m-3 p-4 flex gap-4'>
        <button className='text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-5 hover:bg-[#1699dd]'><GoMail />Compose</button>
        <button className='text-sm text-[#12344d] bg-white border-[1.5px] border-[#b1b0b0] p-2 px-5 rounded-md font-semibold flex items-center gap-1'><FaInfoCircle />anas@travbizz.com</button>
      </div>
    </>
  )
}

export default Mail