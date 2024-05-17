import React from "react";
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
function Proposals() {
  // 3dots MUI
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  


  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
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
            <Popper id={id} open={open} anchorEl={anchorEl}>
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
        <button className="flex justify-center items-center text-white py-2 px-5 gap-2 w-64 bg-[#2a8bda]">
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
    </div>
  );
}

export default Proposals;
