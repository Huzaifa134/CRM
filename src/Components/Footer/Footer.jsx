import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { CiBullhorn } from "react-icons/ci";
import { CiStickyNote } from "react-icons/ci";
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import FooterModal from "./FooterModal";
import { Box } from "@mui/material";
import { RiDeleteBinFill } from "react-icons/ri";

const Footer = () => {

// var onlineUser = (<div className="flex items-center gap-1"><FaUser /> ONLINE USERS</div>)

var userTable = ( 

<div id="users"  className="overflow-y-scroll h-[200px]">
    <div id="usersHead " className="flex justify-between text-sm font-semibold p-2">
        <h3>User</h3>
        <h3>Status</h3>
    </div>
    <hr className=" border-gray-300"/>

    <div id="usersTable">
        <span className="flex items-center justify-between p-1 px-2">
            <h3 className="text-sm font-normal">mohd anas</h3>
            <p className="bg-gray-500 h-3 w-3 rounded-full"></p>
        </span>
        <hr className=" border-gray-300"/>
        <span className="flex items-center justify-between p-1 px-2">
            <h3 className="text-sm font-normal">mohd anas</h3>
            <span className="bg-gray-500 h-3 w-3 rounded-full"></span>
        </span>
        <hr className=" border-gray-300"/>
        <span className="flex items-center justify-between p-1 px-2">
            <h3 className="text-sm font-normal">mohd anas</h3>
            <span className="bg-gray-500 h-3 w-3 rounded-full"></span>
        </span>
        <hr className=" border-gray-300"/>
        <span className="flex items-center justify-between p-1 px-2">
            <h3 className="text-sm font-normal">mohd anas</h3>
            <span className="bg-gray-500 h-3 w-3 rounded-full"></span>
        </span>
        <hr className=" border-gray-300"/>
        <span className="flex items-center justify-between p-1 px-2">
            <h3 className="text-sm font-normal">mohd anas</h3>
            <span className="bg-gray-500 h-3 w-3 rounded-full"></span>
        </span>
        <hr className=" border-gray-300"/>
        <span className="flex items-center justify-between p-1 px-2">
            <h3 className="text-sm font-normal">mohd anas</h3>
            <span className="bg-gray-500 h-3 w-3 rounded-full"></span>
        </span>
        <hr className=" border-gray-300"/>
        <span className="flex items-center justify-between p-1 px-2">
            <h3 className="text-sm font-normal">mohd anas</h3>
            <span className="bg-gray-500 h-3 w-3 rounded-full"></span>
        </span>
        <hr className=" border-gray-300"/>
        <p className="flex items-center justify-between p-1 px-2">
            <h3 className="text-sm font-normal">mohd anas</h3>
            <p className="bg-gray-500 h-3 w-3 rounded-full"></p>
        </p>
        <hr className=" border-gray-300"/>
        <p className="flex items-center justify-between p-1 px-2">
            <h3 className="text-sm font-normal">mohd anas</h3>
            <p className="bg-gray-500 h-3 w-3 rounded-full"></p>
        </p>
        <hr className=" border-gray-300"/>
        
    </div>
</div>
)



const [textFields, setTextFields] = useState([]);

const handleAddTextField = () => {
    setTextFields(prevTextFields => [
        ...prevTextFields,
        <div key={prevTextFields.length} className="bg-yellow-300 p-3 rounded-md mt-3">
            <textarea className="bg-yellow-300 outline-none text-sm" placeholder="Write here something..." cols={34} name="" id=""></textarea>
            <hr />
            <RiDeleteBinFill className="mt-3 cursor-pointer hover:text-red-700 transition-all" onClick={() => handleDeleteTextField(prevTextFields.length)} />
        </div>
    ]);
};

const handleDeleteTextField = (indexToRemove) => {
    setTextFields(prevTextFields => prevTextFields.filter((_, index) => index !== indexToRemove));
};

  return (
    <>
      <div className="border-2 flex justify-between items-center bottom-0 relative z-50 p-1 mx-3">
        <div>
          <button
           
            className="flex items-center gap-1 text-[12px] font-semibold hover:bg-gray-100"
          >
            <FaUser />
            

            <FooterModal btnName={"ONLINE USERS"} topHead="Online Users" userTable={userTable}/>
          </button>
       
          
        </div>

        <div className="flex items-center justify-center ">
          <button className="text-[12px] font-semibold border-x-2 px-3 border-gray-300 flex items-center gap-1 hover:bg-gray-100">
            <IoMoonOutline />
            NIGHT THEME OFF
          </button>
          <button className="text-[12px] font-semibold border-r-1 px-3 border-gray-300 flex items-center gap-1 hover:bg-gray-100">
            <CiBullhorn />
            UPDATES
          </button>
          <button className="text-[12px] font-semibold border-x-2 px-3 border-gray-300 flex items-center gap-1 hover:bg-gray-100">
            <CiStickyNote />
            <FooterModal btnName={"NOTEBOOK"} topHead="NOTEBOOK" icon={<FaPlusSquare />} userTable={
            textFields.length > 0 ? (
                <div>
                    {textFields.map((textField, index) => (
                        <div key={index}>{textField}</div>
                    ))}
                </div>
            ) : (
                <p className="mt-3">No items found</p>
            )
        } height="h-[300px]" onIconClick={handleAddTextField} />

            
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
