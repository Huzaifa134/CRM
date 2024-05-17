import React from 'react'
import { FaBriefcase } from "react-icons/fa";
import { IoDocumentText } from 'react-icons/io5';

const Billing = () => {
  return (
    <>
      {/* <div className='flex flex-col justify-center items-center w-full h-[70%] text-[#999999]'>
          <FaBriefcase className='text-6xl mb-3' />
          <p>No itinerary confirmed or supplier's cancellation date not entered</p>
      </div> */}
      <div className='p-3'>
        <div className='flex justify-evenly gap-2'>
            <div className='bg-[#655be6] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹46,351</h3>
                <p className='text-xs font-semibold mb-1'>TOTAL AMOUNT</p>
            </div>
            <div className='bg-[#0cb5b5] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹15,000</h3>
                <p className='text-xs font-semibold mb-1'>RECEIVED</p>
            </div>
            <div className='bg-[#e45555] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹31,351</h3>
                <p className='text-xs font-semibold mb-1'>PENDING</p>
            </div>
            <div className='bg-[#ffffff] shadow-lg text-black p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹12,851</h3>
                <p className='text-xs font-semibold mb-1'>GROSS PROFIT</p>
            </div>
            <div className='bg-[#e69f5b] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹33,500</h3>
                <p className='text-xs font-semibold mb-1'>SUPPLIER AMOUNT</p>
            </div>
            <div className='bg-[#71b183] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹1,000</h3>
                <p className='text-xs font-semibold mb-1'>SUPPLIER RECEIVED</p>
            </div>
            <div className='bg-[#ae8393] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹32,500</h3>
                <p className='text-xs font-semibold mb-1'>SUPPLIER PENDING</p>
            </div>
        </div>

        <div className="flex justify-between bg-[#f7f7f7] p-1 pl-3 rounded-md items-center mt-3">
          <p className="font-semibold text-sm">Payments (3)</p>
          <button className="text-xs font-semibold bg-blue-700 text-white p-1 px-2 rounded-md">Send Payment Plan To Mail</button>
        </div>

        {/* table div */}


        <div className='border-[1px] mt-3 p-3 rounded-md'>
            <div className='w-full'>
                <table className='w-full'>
                  <tr className='w-full'>
                    <td className='border-[1px] text-xs font-semibold p-2'>Payment ID</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Trans. ID</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Type</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Amount</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Payment Date</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Status</td>
                    <td className='border-[1px] text-xs font-semibold p-2'></td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Convenience Fee</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Receipt</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Action</td>
                  </tr>
                  <tr className='w-full'>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'>₹50000</td>
                    <td className='border-[1px] text-xs p-2'>22/05/2024</td>
                    <td className='border-[1px] text-xs p-2'><span className='bg-[#fdba45] font-semibold p-1 px-2 rounded-md'>Scheduled</span></td>
                    <td className='border-[1px] text-xs p-2 text-center'><button className='bg-[#1699dd] hover:bg-[#1489c6] transition-all text-white font-semibold p-1 px-2 rounded-md'>Send Link</button></td>
                    <td className='border-[1px] text-xs p-2 text-center'><input defaultValue={0} className='text-center outline-none border-[1px] p-1' type="number" /></td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'><span><button className='bg-[#f9392f] hover:bg-[#f82116] p-1 px-2 text-white font-semibold rounded-md'>Delete</button> <button className='bg-[#1699dd] hover:bg-[#1489c6] p-1 px-2 text-white font-semibold rounded-md'>Edit</button></span></td>
                  </tr>
                  <tr className='w-full'>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'>₹50000</td>
                    <td className='border-[1px] text-xs p-2'>25/05/2024</td>
                    <td className='border-[1px] text-xs p-2'><span className='bg-[#fdba45] font-semibold p-1 px-2 rounded-md'>Scheduled</span></td>
                    <td className='border-[1px] text-xs p-2 text-center'><button className='bg-[#1699dd] hover:bg-[#1489c6] transition-all text-white font-semibold p-1 px-2 rounded-md'>Send Link</button></td>
                    <td className='border-[1px] text-xs p-2 text-center'><input defaultValue={0} className='text-center outline-none border-[1px] p-1' type="number" /></td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'><span><button className='bg-[#f9392f] hover:bg-[#f82116] p-1 px-2 text-white font-semibold rounded-md'>Delete</button> <button className='bg-[#1699dd] hover:bg-[#1489c6] p-1 px-2 text-white font-semibold rounded-md'>Edit</button></span></td>
                  </tr>
                  <tr className='w-full'>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'>₹135351</td>
                    <td className='border-[1px] text-xs p-2'>29/05/2024</td>
                    <td className='border-[1px] text-xs p-2'><span className='bg-[#fdba45] font-semibold p-1 px-2 rounded-md'>Scheduled</span></td>
                    <td className='border-[1px] text-xs p-2 text-center'><button className='bg-[#1699dd] hover:bg-[#1489c6] transition-all text-white font-semibold p-1 px-2 rounded-md'>Send Link</button></td>
                    <td className='border-[1px] text-xs p-2 text-center'><input defaultValue={0} className='text-center outline-none border-[1px] p-1' type="number" /></td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'><span><button className='bg-[#f9392f] hover:bg-[#f82116] p-1 px-2 text-white font-semibold rounded-md'>Delete</button> <button className='bg-[#1699dd] hover:bg-[#1489c6] p-1 px-2 text-white font-semibold rounded-md'>Edit</button></span></td>
                  </tr>
                  <tr>
                    <td colSpan={3} className='border-[1px] text-xs p-2 text-end font-semibold'>Not Scheduled Amount:</td>
                    <td className='border-[1px] text-xs p-2 font-semibold'>₹0</td>
                    <td colSpan={6} className='border-[1px] text-xs p-2 font-semibold'></td>
                  </tr>
                </table>
            </div>
        </div>

        {/* table end */}

        <div className="flex justify-between bg-[#f7f7f7] p-1 pl-3 rounded-md items-center mt-3">
          <p className="font-semibold text-sm">Invoice</p>
        </div>

        <div className='border-[1px] mt-3 p-3 rounded-md flex items-center justify-between mb-5'>
          <div className='flex gap-2 items-center'>
            <p><IoDocumentText className='text-5xl text-[#0066cc] '/></p>
            <div>
              <p className='text-[#666666] text-sm font-medium'>Invoice - 16 May 2024</p>
              <p className='text-xl'>GI/23-24/001</p>
            </div>
          </div>
          <button className='bg-[#264966] hover:bg-[#203d55] transition-all text-white p-1 px-3 text-sm rounded-md'>View Invoice</button>
        </div>
      </div>
    </>
  )
}

export default Billing