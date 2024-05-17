import React from "react";
import { FaBed } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";


const PostSalesCard = (props) => {
  return (
    <>
      
        <div className="p-3 border-[1px] rounded-md bg-white pb-6">
          <div className="py-1 w-full rounded-md bg-[#f7f7f7]">
            {props.head}
          </div>

          {/* table div */}

          <div className="border-[1px] p-3 mt-3 rounded-md">
            <div className="flex justify-between items-center">
                 <div>
                    {props.smallHead}
                 </div>
                 <div className="text-xs flex gap-2">
                    <button className="bg-[#39b7c1] p-1 px-3 rounded-md text-white font-medium">Remark (0)</button>
                    <button className="flex items-center gap-1 bg-[#005ee2] p-1 px-3 rounded-md text-white font-medium"><RiPencilFill />Update Payment</button>
                 </div>
            </div>

            {/* main table */}


            <div className="mt-2">
                <table className="text-xs w-full">
                    <tr className="font-semibold w-full">
                        <td className="border-[1px] border-[#999999] p-1">Supplier</td>
                        <td className="border-[1px] border-[#999999] p-1">Status</td>
                        <td className="border-[1px] border-[#999999] p-1">Payment</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">Amount</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">Cancellation</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">Due Date</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">Paid Amount</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">Pending</td>
                    </tr>
                    <tr>
                        <td className="border-[1px] border-[#999999] p-1">{props.tValue1}</td>
                        <td className="border-[1px] border-[#999999] p-1">{props.tValue2}</td>
                        <td className="border-[1px] border-[#999999] p-1">{props.tValue3}</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">{props.tValue4}</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center text-[#FF0000]">{props.tValue5}</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center text-[#FF0000]">{props.tValue6}</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">{props.tValue7}</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">{props.tValue8}</td>
                    </tr>
                </table>
            </div>
          </div>

        </div>
   
    </>
  );
};

export default PostSalesCard;
