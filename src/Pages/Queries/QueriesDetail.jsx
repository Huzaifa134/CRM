import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LockIcon from "@mui/icons-material/Lock";
import Textarea from "@mui/joy/Textarea";
import AddIcon from "@mui/icons-material/Add";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonIcon from "@mui/icons-material/Person";
import TextsmsIcon from "@mui/icons-material/Textsms";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ArticleIcon from "@mui/icons-material/Article";
import "./queryDetail.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Details from "./pages/Details";
import Billing from "./pages/Billing";
import FollowUps from "./pages/FollowUps";
import GuestDocuments from "./pages/GuestDocuments";
import Mail from "./pages/Mail";
import Voucher from "./pages/Voucher";
import SupplierCommunication from "./pages/SupplierCommunication";
import History from "./pages/History";
import PostSalesSuppliers from "./pages/PostSalesSuppliers";
import Proposals from "./pages/Proposals";
import FeedBack from "./pages/FeedBack";
// modal imports 
import  { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { AgGridReact } from "ag-grid-react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { FaWhatsapp } from "react-icons/fa";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import _ from "lodash";
import { FaCalendarDays } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Menu from '@mui/material/Menu';
function QueriesDetail() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectAdultage, setSelectAdultage] = useState("");
  const [selectChildage, setSelectChildage] = useState("");
  const [selectInfantage, setSelectInfantage] = useState("");
  const [selectSource, setSelectSource] = useState("");
  const [selectPriority, setSelectPriority] = useState("");
  const [selectAssign, setSelectAssign] = useState("");
  const [selectService, setSelectService] = useState("");
  const [remarks, setRemarks] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({ name: null, helperTxt: null });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // const navigate = useNavigate()

  // calculate day

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [days, setDays] = useState(0);
  const [nights, setNights] = useState(0);


  // function goToProposals() {
  //   navigate('proposalSent')
  // }


  useEffect(() => {
    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);

      // Calculate the difference in milliseconds
      const difference = to.getTime() - from.getTime();

      // Convert milliseconds to days
      const daysDifference = Math.ceil(difference / (1000 * 3600 * 24));

      const nightsDifference = Math.max(0, daysDifference - 1); // Ek din ka difference subtract karein

      setDays(daysDifference);
      setNights(nightsDifference);
    } else {
      setDays("");
    }
  }, [fromDate, toDate]);

  //naviagte save

  // const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(
      phoneNumber,
      searchResults,
      selectAdultage,
      email,
      destination,
      selectedMonth,
      selectChildage,
      selectInfantage,
      selectSource,
      selectPriority,
      selectAssign,
      selectService,
      remarks
    );
    navigate("/queries/102498");
  };


  const handlefields = (e) => {
    const { name, value } = e.target;
    if (name === 'childage') {
      setSelectChildage(value);
    } else if (name === 'infantage') {
      setSelectInfantage(value);
    }

    if (name === "email") {
      setEmail(value);
    } else if (name === "destination") {
      setDestination(value);
    } else if (name === "month") {
      setSelectedMonth(value);
    } else if (name === "adultage") {
      setSelectAdultage(value);
    } else if (name === "childage") {
      setSelectChildage(value);
    } else if (name === "infantage") {
      setSelectInfantage(value);
    } else if (name === "source") {
      setSelectSource(value);
    } else if (name === "priority") {
      setSelectPriority(value);
    } else if (name === "assignto") {
      setSelectAssign(value);
    } else if (name === "service") {
      setSelectService(value);
    } else if (name === "remarks") {
      setRemarks(value);
    } else if (name === "type") {
      setType(value);
    }
  };

  // month array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // adultage child infant array
  const adultage = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  const childage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const infantage = [0, 1, 2, 3, 4, 5, 6];
  const handleChange = async (event) => {
    const value = event.target.value;
    setPhoneNumber(value);

    if (value.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(`/search?phone=${value}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const foundData = data.find((item) => item.phone === value);
      if (foundData) {
        setSearchResults([foundData]);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error searching database:", error);
    }
  };

  //source prioriry assign-to
  const source = [
    "Advertisnment",
    "Agent",
    "Akbar Tavel",
    "Chat",
    "Facebook",
    "Hello Travel",
    "instagram",
    "Just Dial",
    "Online",
    "Others",
    "Referral",
    "Snapchat",
    "Telephone",
    "Walk-in",
    "Website",
    "Whatsapp",
  ];
  const priority = ["General query", "Hot Query"];
  const assignto = ["Data added", "will be added", "hello"];

  //service
  const service = [
    "Activities Only",
    "Flight only",
    "Hotel + Flight",
    "Visa only",
    "Transport Only",
    "Hotel + Transport",
  ];
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [gridApi, setGridApi] = useState(null);
  const [able, setAble] = useState(false);

  const quickFilter = (search) => {
    gridApi.setGridOption("quickFilterText", search);
  };

  const [proposalModal, setProposalModal] = useState(false);
  const [queryModal, setQueryModal] = useState(false);

  const handleClose = (MODE) => {
    setAnchorEl(null);

    if (MODE === "PROPOSAL") {
      return setProposalModal(!proposalModal);
    } else if (MODE === "QUERY") {
      return setQueryModal(!queryModal);
    }
  };
  const querypage = [
    {
      icon: <RecentActorsOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Query Details    ",
      link: "detail",
    },
    {
      icon: <ArticleIcon style={{ fontSize: 18 }} />,
      name: "Proposal",
      link: "proposals",
    },
    {
      icon: <EmailOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Mails",
      link: "mail",
    },
    {
      icon: <AssignmentTurnedInOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Followup's",
      link: "followUps",
    },
    {
      icon: <Diversity3OutlinedIcon style={{ fontSize: 18 }} />,
      name: "Suppliers Communication",
      link: "supplierCommunication",
    },
    {
      icon: <CreditCardOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Post Sales Suppliers",
      link: "postSalesSuppliers",
    },
    {
      icon: <TaskAltOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Voucher",
      link: "voucher",
    },
    {
      icon: <ArticleOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Billing",
      link: "billing",
    },
    {
      icon: <PersonIcon style={{ fontSize: 18 }} />,
      name: "Guest Document",
      link: "guestDocs",
    },
    {
      icon: <TextsmsIcon style={{ fontSize: 18 }} />,
      name: "Feedback",
      link: "feedBack",
    },
    {
      icon: <ScheduleIcon style={{ fontSize: 18 }} />,
      name: "History",
      link: "history",
    },
  ];
 const [column, setColumn] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      sortable: false,
      filter: false,
      flex: 0.2,
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly   h-[45%]">
              <p className="h-5 text-blue-600 text-base hover:text-blue-800 font-semibold cursor-pointer">
                {params.data.id}
              </p>
              <div className="w-fit h-5 px-2 flex justify-center items-center  rounded-md bg-[#0cb5b5]">
                <span className="text-xs font-bold text-white">Active</span>
              </div>
            </div>
            <div className="flex flex-col h-[45%]">
              <div className=" h-6 text-slate-600 flex items-center">
                Requirement
              </div>
              <div className=" h-2 flex items-center font-bold text-sm  ">
                Hotel + Flight
              </div>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly  h-[45%]">
              <p className="text-sm font-semibold h-5">
                {`Travocorp (Corporate)`}
              </p>
              <div className="flex text-slate-600 justify-start h-2 items-center">
                9805852240
              </div>
            </div>
            <div className="flex flex-col h-[45%]">
              <div className=" h-6 text-slate-600 text-xs flex items-center">
                sahil12@gmail.com
              </div>
              <div className=" h-2 flex items-center text-slate-700 text-xs  ">
                Agent
              </div>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly  h-[45%]">
              <p className="text-sm font-semibold h-3">Destination</p>
              <div className="w-fit h-5 px-2 flex justify-center items-center  rounded-md bg-[#737373]">
                <span className="text-xs font-bold text-white">Dehli</span>
              </div>
            </div>
            <div className="flex flex-col h-[45%]">
              <div className=" h-6 text-slate-800 text-sm flex items-center">
                Travllers
              </div>
              <div className=" h-5 flex items-center text-slate-700 text-xs  ">
                <span className="font-bold text-black text-sm">{`1`}</span>
                &nbsp;Adult&nbsp;
                <span className="font-bold text-black text-sm">{`3`}</span>
                &nbsp;Child&nbsp;
                <span className="font-bold text-black text-sm">{`2`}</span>
                &nbsp;Infant&nbsp;
              </div>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly  h-[45%]">
              <span className="h-2 flex items-center">
                <CardGiftcardOutlinedIcon
                  style={{ color: "gray", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600">10-04-2024</span>
              </span>
              <span className="h-1 flex items-center">
                Till :
                <span className="text-xs text-slate-600">&nbsp;10-04-2024</span>
              </span>
            </div>
            <div className="flex flex-col h-[45%]">
              <div className=" h-6 text-slate-700 text-sm font-[500] flex items-center">
                Assinged To
              </div>
              <div className=" h-5 flex items-center text-slate-700 text-xs  ">
                <select className="border border-slate-400 w-[90%] rounded">
                  <option value={""}>Assingn To me</option>
                  <option value={""}></option>
                  <option value={""}></option>
                </select>
              </div>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly  h-[45%]">
              <span className="h-2 flex items-center">
                <CalendarMonthOutlinedIcon
                  style={{ color: "gray", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600">10-04-2024</span>
              </span>
              <span className="h-1 flex items-center">
                <TextSnippetOutlinedIcon
                  style={{ color: "#ffa500", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600">&nbsp;No Notes</span>
              </span>
            </div>
            <div className="flex flex-col h-[45%]">
              <span className="h-5 flex items-center">
                <AccessTimeOutlinedIcon
                  style={{ color: "gray", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600">Created</span>
              </span>
              <span className="h-4 flex items-center">
                <span className="text-xs text-slate-600">10-04-2024</span>
              </span>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
      flex: 0.7,
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-center items-start  h-[45%]">
              <div className=" w-full h-8 flex items-center">
                <Link to={`/queries/${params.data.id}`}>
                  <div className="group cursor-pointer hover:bg-black border border-black h-6 w-6 rounded-full flex justify-center items-center">
                    <NorthEastIcon
                      className="group-hover:text-white"
                      style={{ fontSize: 17 }}
                    />
                  </div>
                </Link>

                <div className="group cursor-pointer hover:bg-black border border-black h-6 w-6 ml-1 rounded-full flex justify-center items-center">
                  <FaWhatsapp
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
                <div className="group cursor-pointer hover:bg-black border border-black h-6 w-6 ml-1 rounded-full flex justify-center items-center">
                  <EmailOutlinedIcon
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
                <Link to={`/queries/${params.data.id}`}>
                <div
               
                  className="group cursor-pointer hover:bg-black border border-black h-6 w-6 ml-1 rounded-full flex justify-center items-center"
                >
                  <EditOutlinedIcon
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
                </Link>
                <div
                  onClick={() => {
                    setProposalModal(true);
                  }}
                  className="group cursor-pointer hover:bg-black border border-black h-6 w-6 ml-1 rounded-full flex justify-center items-center"
                >
                  <CardGiftcardIcon
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col h-[45%]">
              <span className="h-5 flex items-center">
                <AccessTimeOutlinedIcon
                  style={{ color: "gray", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600">Last Updated</span>
              </span>
              <span className="h-4 flex items-center">
                <span className="text-xs text-slate-600">
                  10-04-2024 - 07:42 PM
                </span>
              </span>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
    },
  ]);

  
 
  return (
    <div>
      <div className="flex justify-between border-y bg-[#f5f7f9] border-slate-300 px-4">
        <div className="flex flex-row px-1 items-center">
          <div className="font-[500]"> Query ID 12345 </div>
        </div>
        <div className="flex py-2 justify-evenly">
          <button className="text-xs mx-1 border px-4 py-2 hover:drop-shadow-md rounded-md flex items-center gap-1">
            <WhatsAppIcon style={{ fontSize: 18 }} className="text-green-600" />{" "}
            WhatsApp
          </button>
          <button className="text-xs mx-1 border px-4 py-2 hover:drop-shadow-md rounded-md flex items-center gap-1">
            <EmailOutlinedIcon style={{ fontSize: 18 }} /> Email
          </button>
          <button className="text-xs mx-1 border px-4 py-2 hover:drop-shadow-md rounded-md flex items-center gap-1">
            <EventAvailableOutlinedIcon style={{ fontSize: 18 }} /> Task
          </button>
          <button className="text-xs mx-1 border px-4 py-2 hover:drop-shadow-md rounded-md flex items-center gap-1" onClick= {handleClick}>
            <EditOutlinedIcon style={{ fontSize: 18 }} /> Edit
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start h-fit items-start mt-2 m-auto border border-slate-200 rounded-lg w-[99%]">
        <div className="border w-full rounded-t-lg py-1 bg-[#f5f7f9]">
          <div className="text-xs px-3 ">
            Created: 19-04-2024 | Last Updated: 19/04/2024 - 10:39 PM
          </div>
          <div className="items--container">
            <div className="item hover:!cursor-pointer group">
              <div className="arrow top group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
              <div className="content">New</div>
              <div className="arrow bottom group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
            </div>
            <div className="item hover:!cursor-pointer group">
              <div className="arrow top group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
              <div className="content">Active</div>
              <div className="arrow bottom group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
            </div>
            <div className="item  hover:!cursor-pointer group">
              <div className="arrow top group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
              <div className="content">No Connect</div>
              <div className="arrow bottom group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
            </div>
            <div className="item hover:!cursor-pointer group">
              <div className="arrow top group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
              <div className="content">Hot Lead</div>
              <div className="arrow bottom group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
            </div>
            <div className="item hover:!cursor-pointer group">
              <div className="arrow top group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
              <div className="content">Proposal Sent</div>
              <div className="arrow bottom group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
            </div>
            <div className="item hover:!cursor-pointer group">
              <div className="arrow top group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
              <div className="content">Follow Up</div>
              <div className="arrow bottom group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
            </div>
            <div className="item hover:!cursor-pointer group">
              <div className="arrow top group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
              <div className="content">Confirmed</div>
              <div className="arrow bottom group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
            </div>
            <div className="item hover:!cursor-pointer group">
              <div className="arrow top group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
              <div className="content">Cancelled</div>
              <div className="arrow bottom group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
            </div>
            <div className="item hover:!cursor-pointer group">
              <div className="arrow top group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
              <div className="content group-hover:bg-[#cecece]">Invalid</div>
              <div className="arrow bottom group-hover:bg-[#cecece] group-hover:!border-[#cecece]" />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-[68vh] "> 
          <div className="w-[20%] h-full flex flex-col border-r py-1 bordr-slate-300 bg-[#f5f7f9]">
            {querypage.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  <div
                    className={`mx-2 text-sm px-2 hover:cursor-pointer py-2 rounded-sm border-transparent border-l-[8px] ${
                      window.location.pathname.includes(item.link)
                        ? "shadow-lg border-l-[8px] border-l-green-600 bg-white"
                        : "hover:bg-slate-200"
                    }`}
                  >
                    {item.icon} {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="w-[80%] h-[67vh] overflow-y-auto ">
            <Routes>
              <Route path="/" element={<Details />} />
              <Route path="/detail" element={<Details />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/followUps" element={<FollowUps />} />
              <Route path="/guestDocs" element={<GuestDocuments />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/voucher" element={<Voucher />} />
              <Route
                path="/supplierCommunication"
                element={<SupplierCommunication />}
              />
              <Route path="/history" element={<History />} />
              <Route
                path="/postSalesSuppliers"
                element={<PostSalesSuppliers />}
              />
              <Route path="/proposals" element={<Proposals />} />
              <Route path="/feedBack" element={<FeedBack />} />
            </Routes>
          </div>
          {/* <div className="w-[80%] ">
            <div className="bg-[#f7f7f7] px-1 rounded-md mx-2 py-1 font-[600] mt-2">
              Client Information
            </div>
            <div className="flex  flex-row w-full items-center justify-start mx-2 ">
              <div className="flex-1 mt-2 text-xs">Clirnt Name</div>
              <div className="flex-1 mt-2 text-xs"> Mobile</div>
              <div className="flex-1 mt-2 text-xs">Email</div>
              <div className="flex-1" ></div>
            </div>
            <div className="flex flex-row w-full items-center justify-start mx-2">
              <div className="flex-1 font-[550] text-sm">Mr. Nayan</div>
              <div className="flex-1 font-[550] text-sm">09608829897</div>
              <div className="flex-1 font-[550] text-sm">
                info@krkhospitality.com
              </div>
              <div className="flex-1" ></div>
            </div>
            <div className="bg-[#f7f7f7] px-1 rounded-md mx-2 py-1 font-[600] mt-4">
              Querry Information
            </div>
            <div className="flex mt-2 flex-row w-full items-center justify-start mx-2">
              <div className="flex-1 text-xs">Destination</div>
              <div className="flex-1 text-xs">From Date</div>
              <div className="flex-1 text-xs">To Date</div>
              <div className="flex-1 text-xs">Travel Month</div>
            </div>
            <div className="flex flex-row w-full items-center justify-start mx-2">
              <div className="flex-1 font-[550] text-sm">Dubai</div>
              <div className="flex-1 font-[550] text-sm">01-05-2024</div>
              <div className="flex-1 font-[550] text-sm">05-05-2024</div>
              <div className="flex-1 font-[550] text-sm">May</div>
            </div>
            <div className="flex mt-4 flex-row w-full items-center justify-start mx-2">
              <div className="flex-1 text-xs"> Lead Source</div>
              <div className="flex-1 text-xs">Services</div>
              <div className="flex-1 text-xs">Pax</div>
              <div className="flex-1 text-xs">Assign To</div>
            </div>
            <div className="flex flex-row w-full items-center justify-start mx-2">
              <div className="flex-1 font-[550] text-sm"> Walk-In</div>
              <div className="flex-1 font-[550] text-sm">Full package</div>
              <div className="flex-1 font-[550] text-sm">
                Adult: 2 - Child: 0 - Infant: 0
              </div>
              <div className="flex-1 font-[550] text-sm">
                TravBizz IT Solutions
              </div>
            </div>
            <div className="bg-[#f7f7f7] px-1 rounded-md mx-2 py-1 font-[600] mt-4 flex flex-row justify-between">
              <div>Notes</div>
              <div>
                {" "}
                <button className="flex items-center text-xs rounded-md bg-[blue] text-white px-2 py-1">
                  <AddIcon style={{ fontSize: 15 }} /> Add Notes{" "}
                </button>{" "}
              </div>
            </div>
            <div className="mx-2 mt-2">
              <Textarea
                name="Outlined"
                placeholder="Type in here…"
                variant="outlined"
              />
            </div>
          </div> */}
        </div>
      </div>
      <Modal
        keepMounted
        onClose={() => {
          handleClose("PROPOSAL");
        }}
        open={proposalModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <div className="p-4 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[95%] md:w-[70%] h-fit"></div>
      </Modal>

      <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      PaperProps={{
          style: {
            borderRadius: 10, // Adjust this value as per your preference
            // backgroundColor: "#2d2f31",
            width:"100vh",
            height: "200vh",
            padding: "3px",
          },
        }}
        sx={{height:"115vh",marginLeft:"20px",marginTop:"13px"}}
    >
      <div className="flex justify-center">
        <div className="p-6 rounded-md bg-white">
          <div
            className={` flex justify-between mb-5  `} 
          >
            <div className="font-bold text-lg"> Edit Query </div>
            <div
              className="cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="flex justify-between w-full mt-2 h-[90%]">
            <div className="w-full">
              <div>
                <select



                  className={`px-2  focus:outline-none w-full border h-10  focus:border  ${
                    errors.name === "meal_plan_id"
                      ? "border-red-600"
                      : "hover:border-black border-[#d8d8d8]"
                  }  rounded-md`}
                  defaultValue={"DEFAULT"}
                  name="type"
                  value={type}
                  onChange={handlefields}
                 

          
                >
                  <option value={"DEFAULT"} disabled={true}>
                    Type
                  </option>
                  <option value="CLIENT">Client</option>
                  <option value="AGENT">Agent</option>
                  <option value="CORPORATE">Corporate</option>
                </select>
                <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                  {errors.name === "meal_plan_id" && errors.helperTxt}
                </p>
              </div>

              <div className="mt-4">
                <div className="  w-full flex gap-5 justify-between items-center">
                  <div className="">
                    <select   






                      className={`px-2 w-[200px] focus:outline-none  border h-10  focus:border  ${
                        errors.name === "meal_plan_id"
                          ? "border-red-600"
                          : "hover:border-black border-[#d8d8d8]"
                      }  rounded-md`}
                      defaultValue={"DEFAULT"}
                    >

                      
                      <option value="DEFAULT" disabled={true}>
                        Title
                      </option>
                      <option value="Mr">Mr.</option>
                      <option value="Mrs">Mrs.</option>
                      <option value="Ms">Ms.</option>
                      <option value="Dr">Dr.</option>
                      <option value="Prof">Prof.</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <div className="flex border-1 rounded-md">
                      <div className="h-10 w-10 flex items-center bg-gray-300 justify-center">
                        <FaPerson className="px-1 w-5 h-5 " />
                      </div>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        error={errors.name === "single"}
                        label={" Name"}
                        variant="outlined"
                        sx={{ width: "100%" }}





                        

                      />
                    </div>
                  </div>
                </div>
                <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                  {errors.name === "meal_plan_id" && errors.helperTxt}
                </p>
              </div>

              {/*phone / email */}
              <div className="flex w-full justify-between">
                {/*phone number */}
                <div className="mt-4">
                  <div className="flex justify-center items-center border-2 rounded-md w-full">
                    <div className="h-10 w-10 flex items-center bg-gray-300 justify-center">
                      <MdOutlineSmartphone className="px-1 w-5 h-5 " />
                    </div>
                    <div>
                      <input
                        type="number"
                        value={phoneNumber}
                        onChange={handleChange}
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}              
                        className=" py-2 px-2 w-full"
                        placeholder="Phone/Mobile"








                      />
                      {isInputFocused && (
                        <div className="dropdown-content">
                          {searchResults.length > 0 ? (
                            searchResults.map((result, index) => (
                              <div key={index} className="dropdown-item">
                                {result.name}{" "}
                                {/* Assuming result contains name of the user */}
                              </div>
                            ))
                          ) : (
                            <p>No results found</p>
                            
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/*email */}
                <div className="mt-4">
                  <div className="flex justify-center items-center border-2 rounded-md w-full">
                    <div className="h-10 w-10 flex items-center bg-gray-300 justify-center">
                      <MdEmail className="px-1 w-5 h-5 " />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={handlefields}
                      className=" py-2 px-2 w-full"





               

                      



                    />
                  </div>
                </div>
              </div>
              {/*Agent company and GST */}
              {type === "AGENT" || type === "CORPORATE" ? (
                <div className="flex gap-5 mt-3 justify-between">
                  {/* company */}
                  <div className="">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="company name"
                      className="border-2 px-[19px] py-2 rounded-md w-full"


             


                      
                    />
                  </div>
                  {/* GST */}
                  <div>
                    <label htmlFor="gst">GST</label>
                    <input
                      type="text"
                      name="gst"
                      id="gst"
                      placeholder="GST"
                      className="border-2 px-4 py-2 rounded-md w-full"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="flex justify-between w-full gap-4">
                {/* destination */}
                <div className="mt-2 w-full">
                  <label htmlFor="fromdate ">Travel Destination</label>

                  <div className="mt-2">
                    <select
                      name="destination"
                      className="border-2 rounded-md px-3 py-2 w-full"
                      id="dstionation"
                      value={destination}
                      
                      onChange={handlefields}
                      
                    >
                      <option value="Destination">Select Destination</option>
                      <option value="kashmir">Kashmir</option>
                      <option value="ladakh">Ladakh</option>
                      <option value="kashmir + ladakh">
                        Kashmir + Ladakh
                      </option>
                    </select>
                  </div>
                </div>

                {/* months */}
                <div className="mt-2 w-full">
                  <label htmlFor="fromdate ">Travel month</label>
                  <div className="mt-2">
                    <select
                      name="month"
                      className="border-2 rounded-md px-6 py-2 w-full"
                      id="month"
                      onChange={handleChange}
                      value={selectedMonth}
                    >
                      <option value="">Select Month</option>
                      {months.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* from date to date start*/}

              <div className="">
                {/* from date to date */}
                <div className="flex gap-4 w-full justify-between">
                  <div className="mt-4">
                    <label htmlFor="fromdate">From Date</label>
                    <input
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="border-2 rounded-md text-sm px-3 py-2 w-full "
                      placeholder="from date"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="todate">To Date</label>
                    <input
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="border-2 rounded-md text-sm px-3 py-2 w-full"
                      placeholder="to date"
                    />
                  </div>

                  {/* Difference days */}
                  <div className="mt-4">
                    <label htmlFor="days">Package Duration</label>
                    <input
                      type="text"
                      value={
                        (nights !== 0 ? `${nights} Nights, ` : "") +
                        days +
                        " Days"
                      }
                      className="border-2 rounded-md text-sm px-3 py-2 w-full"
                      placeholder="days"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Adult child infant */}
              <div className="flex gap-3 mt-5">
                {/* Adult */}
                <div>
                  <label htmlFor="adultage">Adult</label>
                  <div className="flex justify-center items-center border-2 rounded-md">
                    <div className="h-10 w-10 flex items-center bg-gray-300 justify-center">
                      <FaPerson className="px-1 w-5 h-5 " />
                    </div>
                    <input
                      type="number"
                      name="adultage"
                      id="adultage"
                      min="0" 
                      onChange={handlefields}
                      value={selectAdultage}
                      className=" px-3 text-sm py-2 w-full"
                    />
                  </div>
                </div>
                {/* Child */}
                <div>
                  <label htmlFor="childage">Child </label>
                  <div className="border-2 rounded-md flex">
                    <div className="h-10 w-10 flex items-center bg-gray-300 justify-center">
                      <FaPerson className="px-1 w-5 h-5 " />
                    </div>
                    <input
                      type="number"
                      name="childage"
                      id="childage"
                      min="0"
                      onChange={handlefields}
                      value={selectChildage}
                      className=" px-3 py-2 w-full"
                    />
                  </div>
                </div>
                {/*infant  */}
              <div>
                  <label htmlFor="infantage">Infant </label>
                      <div className="border-2 rounded-md flex">
                  <div className="h-10 w-10 flex items-center bg-gray-300 justify-center">
                      <FaPerson className="px-1 w-5 h-5 " />


                    </div>
                    <input  name="infantage"
                      id="infantage"
                      min="0"
                      onChange={handlefields}
                      value={selectInfantage}
                      className=" px-5 py-2 w-full" type="number" />
                  </div>
                </div>
              </div>

              {/* source priority Assign-to */}
              <div className="flex gap-3 mt-5 justify-between">
                {/* source */}
                <div>
                  <label htmlFor="source">Lead Source</label>
                  <select
                    name="source"
                    id="source"
                    className="border-2 rounded-md px-1 py-2 w-full"
                    onChange={handlefields}
                    value={selectSource}
                  >
                    <option value="">Select</option>
                    {source.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {/* priority */}
                <div>
                  <label htmlFor="priority">Priority</label>
                  <select
                    name="priority"
                    id="priority"
                    className="border-2 rounded-md px-2 py-2 w-full"
                    onChange={handlefields}
                    value={selectPriority}
                  >
                    {priority.map((item, key) => (
                      <option value={item} key={key}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {/* assignto */}
                <div>
                  <label htmlFor="assignto">Assign To</label>
                  <select
                    name="assignto"
                    id="assignto"
                    className="border-2 rounded-md px-4 py-2 w-full"
                    onChange={handlefields}
                    value={selectAssign}
                  >
                    {assignto.map((item, key) => (
                      <option value={item} key={key}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service */}
              <div className="mt-5 flex flex-col">
                <label htmlFor="service">Service</label>
                <select
                  name="service"
                  id="service"
                  className="border-2 rounded-md px-2 py-2 w-full"
                  onChange={handlefields}
                  value={selectService}
                >
                  {service.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              {/* Remarks */}
              <div className="mt-7">
                <textarea
                  name="remarks"
                  id="remarks"
                  placeholder="remarks"
                  className="border-2 h-[100px] w-full p-3 rounded-md"
                  onChange={handlefields}
                  value={remarks}
                ></textarea>
              </div>
            </div>
            {/*<div className="w-[49%]"></div>*/}
          </div>
          <div className="mt-1 flex gap-8 justify-evenly px-8 items-center w-full">
            <div
              onClick={() => {
                handleClose("QUERY");
              }}
              className=" rounded-md h-10 w-full"
            >
              <button
                disabled={able}
                className="hover:bg-[#c22626] w-full rounded-md  text-white bg-[#e51d27] h-full flex items-center justify-center"
              >
                Cancel
              </button>
            </div>

            <div
              onClick={(e) => {
                submitHandler(e);
              }}
              className=" rounded-md h-10 w-full "
            >
              <button
                disabled={able}
                className=" rounded-md w-full h-full flex hover:bg-[#1a8d42] items-center justify-center text-white bg-[#04AA6D]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      </Menu>
    </div>
  );
}

export default QueriesDetail;
