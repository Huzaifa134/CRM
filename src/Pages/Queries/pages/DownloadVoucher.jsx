import React from 'react'
import voucherBg from "../../../assets/images/voucherbg.png"
import voucherLogo from "../../../assets/images/voucherfooter.png"
import { useParams } from 'react-router-dom';
import logo from "../../../assets/images/logo.png";

const DownloadVoucher = () => {

    // const  params  = useParams();
    // console.log(params); 

    


  return (
    <>
        <div  style={{ 
                backgroundImage: `url(${voucherBg})`, 
                height: '100%', 
                width: '100%', 
                backgroundSize: 'auto', 
                backgroundPosition: 'center', 
                backgroundAttachment: 'fixed' 
            }}>

<div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100vh',
          backgroundImage: `url(${voucherLogo})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom'
        }} className='flex items-center justify-center'>

        <div className='absolute bottom-[10rem]'>
            <div className='flex flex-col items-center'>
            <div className='p-2 bg-[#ffffffb0] rounded-md'>
                <img src={logo} className='h-[40px] relative' alt="" />
            </div>

                <p className='text-xl font-semibold mt-5'>Travbizz Travel IT Solutions</p>
                <p className='text-xs mt-2 '><span className='font-semibold'>Address:</span> New Delhi  |  <span className='font-semibold'>Phone:</span> 1234567890  |  <span className='font-semibold'>Email:</span> info@travbizz.com</p>
            </div>
        </div>
      </div>

      <h2 className='text-[#09488b] font-semibold text-lg text-center pt-8'>Activity Voucher</h2>
      <h2 className='text-[#09488b] font-semibold text-3xl text-center pt-3'>Amazing Dubai Tour Mr. Abhishek Ji</h2>

     <div className='flex justify-center'>
        <table className='w-[97%]'>
            <tr className='w-full bg-[#ff9933] rounded-3xl'>
                <td className='p-2 font-semibold text-sm rounded-full text-white'>Date</td>
                <td className='p-2 font-semibold text-sm rounded-full text-white'>Name</td>
                <td className='p-2 font-semibold text-sm rounded-full text-white'>Time</td>
                <td className='p-2 font-semibold text-sm rounded-full text-white'>End Time</td>
                <td className='p-2 font-semibold text-sm rounded-full text-white'>Adult</td>
                <td className='p-2 font-semibold text-sm rounded-full text-white'>Child</td>
                <td className='p-2 font-semibold text-sm rounded-full text-white'>Confirmation No.</td>
            </tr>
        </table>
     </div>
            

        </div>
    </>
  )
}

export default DownloadVoucher