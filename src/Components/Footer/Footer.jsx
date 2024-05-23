import React, { useState } from "react";
import { FaUser, FaPlusSquare } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { CiBullhorn, CiStickyNote } from "react-icons/ci";
import { RiDeleteBinFill } from "react-icons/ri";
import FooterModal from "./FooterModal";

const Footer = () => {
  const usersArr = [
    {
      name: "mohd anas",
      message: ["sdchbfld", "fcyg", "vknc d", "jhgf", "dfgbnm", "bfbfg", "hii", "hi", "Hi Anas"],
      reply: [],
      messageTime: ["27-11-2023 03:54 PM", "25-12-2023 12:51 PM", "29-12-2023 04:30 PM", "29-12-2023 04:30 PM", "05-01-2024 07:31 PM", "13-01-2024 12:35 PM", "16-01-2024 01:12 PM", "23-03-2024 04:07 PM", "02-04-2024 07:51 PM"],
      replyMessageTime: []
    },
    {
      name: "Lalit Kumar",
      message: ["hiii", "djcb", "hi"],
      reply: [],
      messageTime: ["10-10-2023 06:36 PM", "10-10-2023 06:36 PM", "18-04-2024 03:37 PM"],
      replyMessageTime: []
    },
    {
      name: "Shikher chaudhary",
      message: ["dfghnm"],
      reply: [],
      messageTime: ["17-10-2023 04:16 PM"],
      replyMessageTime: []
    },
    {
      name: "ratan kumar",
      message: ["hi", "hh"],
      reply: ["hello"],
      messageTime: ["06-09-2023 12:07 PM", "21-12-2023 05:30 PM"],
      replyMessageTime: ["06-09-2023 12:08 PM"]
    },
    {
      name: "Faizan Raza Khan",
      message: [],
      reply: [],
      messageTime: [],
      replyMessageTime: []
    },
    {
      name: "mohd anas",
      message: ["sdchbfld", "fcyg", "vknc d", "jhgf", "dfgbnm", "bfbfg", "hii", "hi", "Hi Anas"],
      reply: [],
      messageTime: ["27-11-2023 03:54 PM", "25-12-2023 12:51 PM", "29-12-2023 04:30 PM", "29-12-2023 04:30 PM", "05-01-2024 07:31 PM", "13-01-2024 12:35 PM", "16-01-2024 01:12 PM", "23-03-2024 04:07 PM", "02-04-2024 07:51 PM"],
      replyMessageTime: []
    },
    {
      name: "Lalit Kumar",
      message: ["hiii", "djcb", "hi"],
      reply: [],
      messageTime: ["10-10-2023 06:36 PM", "10-10-2023 06:36 PM", "18-04-2024 03:37 PM"],
      replyMessageTime: []
    },
    {
      name: "Shikher chaudhary",
      message: ["dfghnm"],
      reply: [],
      messageTime: ["17-10-2023 04:16 PM"],
      replyMessageTime: []
    },
    {
      name: "ratan kumar",
      message: ["hi", "hh"],
      reply: ["hello"],
      messageTime: ["06-09-2023 12:07 PM", "21-12-2023 05:30 PM"],
      replyMessageTime: ["06-09-2023 12:08 PM"]
    },
    {
      name: "Faizan Raza Khan",
      message: [],
      reply: [],
      messageTime: [],
      replyMessageTime: []
    },
  ];

  const parseDate = (dateString) => {
    // Parsing the date string in the format "DD-MM-YYYY hh:mm A"
    const [datePart, timePart] = dateString.split(" ");
    const [day, month, year] = datePart.split("-");
    const [time, modifier] = timePart.split(" ");
    let [hours, minutes] = time.split(":");

    if (modifier === "PM" && hours !== "12") {
      hours = parseInt(hours, 10) + 12;
    }

    return new Date(year, month - 1, day, hours, minutes);
  };

  const generateUserChat = (user) => {
    const messages = Array.isArray(user.message) ? user.message : [];
    const messageTimes = Array.isArray(user.messageTime) ? user.messageTime : [];
    const replies = Array.isArray(user.reply) ? user.reply : [];
    const replyTimes = Array.isArray(user.replyMessageTime) ? user.replyMessageTime : [];

    const combinedMessages = [
      ...messages.map((msg, i) => ({ type: 'message', text: msg, time: messageTimes[i] })),
      ...replies.map((reply, i) => ({ type: 'reply', text: reply, time: replyTimes[i] }))
    ];

    combinedMessages.sort((a, b) => parseDate(a.time) - parseDate(b.time));

    if (combinedMessages.length === 0) {
      return <p className="text-center italic mt-5">No Chat Found</p>;
    }

    return (
      <div>
        {combinedMessages.map((msg, index) => (
          <div key={index} className={`mt-3 flex ${msg.type === 'reply' ? 'justify-start' : 'justify-end'}`}>
            <div className={`${msg.type === 'reply' ? 'bg-blue-100' : 'bg-gray-100'} p-2 rounded-md w-[130px]`}>
              <p className="font-semibold text-sm">{msg.text}</p>
              <p className="text-xs">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const userTable = (
    <div id="users" className="overflow-y-scroll h-[300px]">
      <div id="usersHead" className="flex justify-between text-sm font-semibold p-2">
        <h3>User</h3>
        <h3>Status</h3>
      </div>
      <hr className="border-gray-300" />

      <div id="usersTable">
        {usersArr.map((item, index) => (
          <div key={index}>
            <span className="flex items-center justify-between p-1 px-2 cursor-pointer hover:bg-gray-50">
              <FooterModal btnName={item.name} topHead={item.name} userTable={
                <div>
                  {generateUserChat(item)}
                  <div className="mt-2 p-2 flex justify-center">
                    <input type="text" placeholder="Send Message..." className="p-2 py-3 mb-2 border-t absolute bottom-0 outline-none rounded-md w-[90%]" />
                  </div>
                </div>
              }  marginLeft="ml-[290px]" height="h-[450px]" width="w-[400px]" />
              <p className="bg-gray-500 h-3 w-3 rounded-full"></p>
            </span>
            <hr className="border-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );

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
          <button className="flex items-center gap-1 text-[12px] font-semibold hover:bg-gray-100">
            <FaUser />
            <FooterModal btnName={"ONLINE USERS"} topHead="Online Users" userTable={userTable} width="w-[300px]"/>
          </button>
        </div>

        <div className="flex items-center justify-center">
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
            <FooterModal btnName={"NOTEBOOK"} topHead="NOTEBOOK" width="w-[300px]" icon={<FaPlusSquare />} userTable={
              textFields.length > 0 ? (
                <div>
                  {textFields.map((textField, index) => (
                    <div key={index}>{textField}</div>
                  ))}
                </div>
              ) : (
                <p className="mt-3">No items found</p>
              )
            } height="h-[400px]" onIconClick={handleAddTextField} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
