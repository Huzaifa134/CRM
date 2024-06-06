import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { FaFilter, FaSearch, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import _ from "lodash";
import { FaCalendarDays } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { MdOutlineSmartphone, MdRemoveRedEye } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FormControl, FormGroup, Drawer, MenuItem, Button } from "@mui/material";
import { IoClose } from "react-icons/io5";
import CenterModal from "../ViewProposal/CenterModal";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {  LocalizationProvider } from '@mui/x-date-pickers';
import { FaRegEye } from "react-icons/fa";


const BASE_URL = import.meta.env.VITE_BASE_URL;
let destinations = [];
let clients = [];
let corporate = [];
let agents = [];

function Invalid() {
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
  const [activeButton, setActiveButton] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    console.log("Opening modal with content:", content);
    setModalContent(content);
    setModalOpen(true);
  };
  





// form function start

// Calculate days and Night
const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] = useState("");
const [days, setDays] = useState(0);
const [nights, setNights] = useState(0);

useEffect(() => {
  setActiveButton(location.pathname);
  if (fromDate && toDate) {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    // Calculate the difference in milliseconds
    const difference = to.getTime() - from.getTime();

    // Convert milliseconds to days
    const daysDifference = Math.ceil(difference / (1000 * 3600 * 24));

    const nightsDifference = Math.max(0, daysDifference - 1); // Subtract one day for nights calculation

    setDays(daysDifference);
    setNights(nightsDifference);
  } else {
    setDays('');
    setNights('');
  }
}, [fromDate, toDate, location.pathname]);




// drawerOpen function
const [drawerOpen, setDrawerOpen] = useState({
client: false,
query: false,

});



 // toggleDrawer function
 const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;

  setDrawerOpen({ ...drawerOpen, [anchor]: open });
};


// type change function
const handleTypeChange = (event) => {
  setType(event.target.value);
};


// drawer btn function 
function Btn({ handleClicked, children, className }) {
  return (
    <Button 
      onClick={handleClicked}  
      className={className} 
      size='medium'
      sx={{ 
        backgroundColor: '#000', 
        color: '#fff',
       
        '&:hover': {
          backgroundColor: '#333', // Optional: Slightly lighter shade for hover effect
        },
        textTransform: 'none', // Disable uppercase transformation
        boxShadow: 'none', // Remove default box-shadow
      }}
      variant="contained" // Ensures the button has a solid background
    >
      {children}
    </Button>
  );
}



// BtnOutlined
function BtnOutlined({ handleClicked, children }) {
  return (
    <Button onClick={handleClicked} variant='outlined'
      sx={{
        color: '#fff',
         backgroundColor: "#dc2626",
        '&:hover': {
          color: '#fff',
          borderColor: '#dc2626',
          backgroundColor: '#7f1d1d'
        }
      }}>
      {children}
    </Button>
  )
}




function AddQueryForm({ closeDrawer }) {
  return (
    <form className="drawer-form">
      <FormControl sx={{ width: '100%' }} value={"DEFAULT"} disabled={true}>
      <TextField
        select
        value={type}
        onChange={handleTypeChange}
        defaultValue="client"
        size='small'
        label="Type"
      >
        <MenuItem value="client">Client</MenuItem>
        <MenuItem value="agent">Agent</MenuItem>
        <MenuItem value="corporate">Corporate</MenuItem>
      </TextField>
    </FormControl>

      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
        <TextField label="Mobile" variant="outlined" size='small' required />
        <TextField label="Email" variant="outlined" size='small' required type='email' />
      </FormGroup>
      <FormGroup row sx={{ gap: '0.5rem' }}>
        <FormControl>
          <TextField select defaultValue="mr" size='small'>
            <MenuItem value="mr">Mr.</MenuItem>
            <MenuItem value="mrs">Mrs.</MenuItem>
            <MenuItem value="ms">Ms.</MenuItem>
            <MenuItem value="dr">Dr.</MenuItem>
            <MenuItem value="prof">Prof.</MenuItem>
          </TextField>
        </FormControl>
        <TextField label="Client name" variant="outlined" size='small' required sx={{ flex: 1 }} />
      </FormGroup>

      {type === 'agent' || type === 'corporate' ? (
      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
        <TextField label="Company" variant="outlined" size='small' required />
        <TextField label="GST" variant="outlined" size='small' required type='email' />
      </FormGroup>
    ) : null}

    
      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
        <TextField label="Destinations" variant="outlined" size='small' required />
        <FormControl>
          <TextField select defaultValue="january" size='small' label="Travel month" fullWidth>
            <MenuItem value="january">January</MenuItem>
            <MenuItem value="february">February</MenuItem>
            <MenuItem value="march">March</MenuItem>
            <MenuItem value="april">April</MenuItem>
            <MenuItem value="may">May</MenuItem>
            <MenuItem value="june">June</MenuItem>
            <MenuItem value="july">July</MenuItem>
            <MenuItem value="august">August</MenuItem>
            <MenuItem value="september">September</MenuItem>
            <MenuItem value="october">October</MenuItem>
            <MenuItem value="november">November</MenuItem>
            <MenuItem value="december">December</MenuItem>
          </TextField>
        </FormControl>
      </FormGroup>


      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
    <DatePicker
      value={fromDate}
      onChange={(date) => setFromDate(date)}
      label="From Date"
      size="small"
      slotProps={{ textField: { size: 'small' } }}
    />
    <DatePicker
      value={toDate}
      onChange={(date) => setToDate(date)}
      label="To Date"
      size="small"
      slotProps={{ textField: { size: 'small' } }}
    />
    <TextField
      value={(nights !== 0 ? `${nights} Nights, ` : '') + days + ' Days'}
      label="Package Duration"
      variant="outlined"
      size="small"
      required
      sx={{ flex: 1, width: 24 }}
    />
  </FormGroup>

      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
        <DatePicker label="From Date" size="small" slotProps={{ textField: { size: 'small' } }} />
        <DatePicker label="To Date" size="small" slotProps={{ textField: { size: 'small' } }} />
      </FormGroup>

      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
        <TextField label="Adult" variant="outlined" size='small' type='number' InputProps={{ inputProps: { min: 1, max: 24 } }} required />
        <TextField label="Child" variant="outlined" size='small' type='number' InputProps={{ inputProps: { min: 0, max: 12 } }} />
        <TextField label="Infant" variant="outlined" size='small' type='number' InputProps={{ inputProps: { min: 0, max: 6 } }} />
      </FormGroup>

      <FormGroup row sx={{ gap: '0.5rem', flexWrap: 'nowrap', '& > *': { flex: 1 } }}>
        <FormControl>
          <TextField select defaultValue="16" size='small' label="Lead source" required>
            <MenuItem value="advertisment">Advertisment</MenuItem>
            <MenuItem value="agent">Agent</MenuItem>
            <MenuItem value="akbartravel">AkbarTravel</MenuItem>
            <MenuItem value="chat">Chat</MenuItem>
            <MenuItem value="facebook">Facebook</MenuItem>
            <MenuItem value="hellotravel">Hello Travel</MenuItem>
            <MenuItem value="instagram">Instagram</MenuItem>
            <MenuItem value="justdial">Justdial</MenuItem>
            <MenuItem value="online">Online</MenuItem>
            <MenuItem value="others">Others</MenuItem>
            <MenuItem value="referral">Referral</MenuItem>
            <MenuItem value="snapchat">snapchat</MenuItem>
            <MenuItem value="telephone">Telephone</MenuItem>
            <MenuItem value="walk-in">Walk-In</MenuItem>
            <MenuItem value="website">Website</MenuItem>
            <MenuItem value="whatsapp">WhatsApp</MenuItem>
          </TextField>
        </FormControl>
        <FormControl>
          <TextField select defaultValue="hot" size='small' label="Priority" required>
            <MenuItem value="general">General Query</MenuItem>
            <MenuItem value="hot">Hot Query</MenuItem>
          </TextField>
        </FormControl>
        <FormControl>
          <TextField select defaultValue="me" size='small' label="Assign To" required>
            <MenuItem value="me">Assign to me</MenuItem>
          </TextField>
        </FormControl>
      </FormGroup>

      <FormControl sx={{ width: '100%' }}>
        <TextField select defaultValue="activitiesonly" size='small' label="Select service">
          <MenuItem value="activitiesonly">Activities only</MenuItem>
          <MenuItem value="flightonly">Flight only</MenuItem>
          <MenuItem value="fullpackage">Full package</MenuItem>
          <MenuItem value="hotelflight">Hotel + Flight</MenuItem>
          <MenuItem value="hoteltransport">Hotel + Transport</MenuItem>
          <MenuItem value="hotelonly">Hotel only</MenuItem>
          <MenuItem value="transportonly">Transport only</MenuItem>
          <MenuItem value="visaonly">Visa only</MenuItem>
        </TextField>
      </FormControl>

      <TextField label="Remark" variant="outlined" size='small' multiline />

    
      <div className="buttons">
   <FormGroup  FormGroup row sx={{ gap: '0.5rem',  flexWrap: 'nowrap', '& > *': { flex: 1 }, color: "red" }}>
        <BtnOutlined  handleClicked={closeDrawer}>Cancel</BtnOutlined>
        <Link to="/queries/invalid/detail">
      <button className="bg-[#16a34a] w-64 p-2 transition-all hover:bg-green-900 text-[#ffff]"> SAVE</  button>
    </Link>
      </FormGroup>
   </div>
   
    </form>
  )
}

// form all functions completed







  

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  const importModal = <div>
     <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[400px]'>
      <h3>Import</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr />

    <div className="p-5">
      <p className="text-xs mt-4">Import Excel File</p>
      <input type="file" className="border-[1px] p-1 rounded-md w-full mt-2" />
    </div>
    <hr className="mt-8 mx-3"/>
    <div className='flex p-5 justify-end items-center gap-2 mt-2'>
        <button className='bg-[#12344d] hover:bg-[#2a4355] p-1 rounded-md px-3 text-white font-semibold text-sm'>Import</button>
      </div>
  </div>
  

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };


  const dropdownStyles = {
    maxHeight: isDropdownVisible ? '100px' : '0',
    marginTop: !isDropdownVisible ? "-15px" : "0",
    opacity: isDropdownVisible ? '1' : '0',
    overflow: 'hidden',
    transition: '300ms',
  };


  const buttons = [
    { label: 'TOTAL', path: '/queries', color: 'bg-black', count: 2082 },
    { label: 'NEW', path: '/queries/new', color: 'bg-[#655be6]', count: 2082 },
    { label: 'ACTIVE', path: '/queries/active', color: 'bg-[#0cb5b5]', count: 2082 },
    { label: 'NO CONNECT', path: '/queries/noConnect', color: 'bg-[#0f1f3e]', count: 2082 },
    { label: 'HOT LEAD', path: '/queries/hotLead', color: 'bg-[#e45555]', count: 2082 },
    { label: 'FOLLOW UP', path: '/queries/followUp', color: 'bg-[#ff6700]', count: 2082 },
    { label: 'PROPOSAL SENT', path: '/queries/proposalSent', color: 'bg-[#cc00a9]', count: 2082 },
    { label: 'CONFIRMED', path: '/queries/confirmed', color: 'bg-[#46cd93]', count: 2082 },
    { label: 'CANCELED', path: '/queries/canceled', color: 'bg-[#6c757d]', count: 2082 },
    { label: 'INVALID', path: '/queries/invalid', color: 'bg-[#f9392f]', count: 2082 },
  ];



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const navigate = useNavigate()

  // calculate day

 



function goToQueries() {
    navigate('/queries')   
}



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
    navigate("/queriesDetail");
  };

  const editHandler = () => {
    navigate("queriesDetail");
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

  const data = [
    {
      id: "102498",
    },
    {
      id: "102499",
    },
    {
      id: "102500",
    },
    {
      id: "102501",
    },
    {
      id: "102502",
    },
  ];

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const [column, setColumn] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      sortable: false,
      filter: false,
      flex: 0.2,
      cellClass: 'custom-checkbox', // Add this line to apply the custom class
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly   h-[45%]">
              <p className="h-5 text-blue-600 text-base hover:text-blue-800 font-semibold cursor-pointer">
              <Link to={`/queries/${params.data.id}`}>
                {params.data.id}
              </Link>
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
                <CalendarMonthOutlinedIcon
                  style={{ color: "gray", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600 ml-1">10-04-2024</span>
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
              
                <span className="text-xs text-slate-600">No Task</span>
              </span>
              <span className="h-1 flex items-center">
                <TextSnippetOutlinedIcon
                  style={{ color: "#ffa500", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600 ml-1">&nbsp;No Notes</span>
              </span>
            </div>
            <div className="flex flex-col h-[45%]">
              <span className="h-5 flex items-center">
                <AccessTimeOutlinedIcon
                  style={{ color: "gray", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600 ml-2">Created</span>
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
          <div className="flex flex-col h-full w-full ml-[30%]">
            <div className="flex w-full flex-col justify-center items-start  h-[45%]">
              <div className=" w-full h-8 flex items-center">
                <Link to={`/queries/${params.data.id}`}>
                <div className="border px-2 p-1 text-xs bg-gradient-to-t from-[#e9e4e4]  to-[#fff] hover:bg-gradient-to-b from-[#f3f3f3]  to-[#e9e4e4]-md  flex items-center gap-1">
                    <FaRegEye  
                      className="group-hover:text-white"
                      style={{ fontSize: 17 }}
                    />
                  </div>
                </Link>

                <div className="border px-2 p-1 text-xs bg-gradient-to-t from-[#e9e4e4]  to-[#fff] hover:bg-gradient-to-b from-[#f3f3f3]  to-[#e9e4e4]-md  flex items-center gap-1">
                  <FaWhatsapp
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
                <div className="border px-2 p-1 text-xs bg-gradient-to-t from-[#e9e4e4]  to-[#fff] hover:bg-gradient-to-b from-[#f3f3f3]  to-[#e9e4e4]-md  flex items-center gap-1">
                  <EmailOutlinedIcon
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
                <Link to={`/queries/${params.data.id}`}>
                <div
               
                  className="border px-2 p-1 text-xs bg-gradient-to-t from-[#e9e4e4]  to-[#fff] hover:bg-gradient-to-b from-[#f3f3f3]  to-[#e9e4e4]-md  flex items-center gap-1"
                >
                  <EditOutlinedIcon
                    className=""
                    style={{ fontSize: 17 }}
                  />
                </div>
                </Link>
                {/* <div
                  onClick={() => {
                    setProposalModal(true);
                  }}
                  className="group cursor-pointer hover:bg-black border border-black h-6 w-6 ml-1 rounded-full flex justify-center items-center"
                >
                  <CardGiftcardIcon
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div> */}
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

  const [row, setRow] = useState(data);

  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
    cellStyle: { margin: "0px !important" },
    tooltipField: "name",
  };

  const [errors, setErrors] = useState({ name: null, helperTxt: null });

  useEffect(() => {
    const getDestinations = () => {
      axios.get(`${BASE_URL}api/v1/destination`).then((response) => {
        destinations = response.data;
      });
    };
    const getClients = () => {
      axios.get(`${BASE_URL}api/v1/client`).then((response) => {
        clients = response.data;
      });
    };
    const getAgents = () => {
      axios.get(`${BASE_URL}api/v1/agent`).then((response) => {
        agents = response.data;
      });
    };
    const getCorporate = () => {
      axios.get(`${BASE_URL}api/v1/corporate`).then((response) => {
        corporate = response.data;
      });
    };

    getDestinations();
    getClients();
    getAgents();
    getCorporate();
  }, []);

  return (
    <div className="h-full w-full">
      <style>{`
      .ag-header{
        display:none;
      }
      .ag-cell{
       padding:0;
       margin:0; 
      }

      .ag-cell:focus {
        border:1px solid transparent !important; 
      }

      .ag-row{}
      
      `}</style>
      <div>
      <div className="flex justify-between items-center h-16 sm:h-12 flex-row px-2 border-t border-slate-300 border-b bg-[#f5f7f9] overflow-x-auto whitespace-nowrap">
  <div className="font-[700] flex-shrink-0 mr-3">Invalid</div>
  <div className="flex items-center gap-3 h-full flex-nowrap">
    <input
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        quickFilter(e.target.value);
      }}
      className="border border-slate-300 h-[80%] px-2 rounded-md text-sm flex-grow max-w-[300px] focus:outline-none focus:border focus:border-black flex-shrink-0"
      placeholder="Search by anything...."
    />

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Btn handleClicked={toggleDrawer('query', true)} className="h-[80%] flex-shrink-0">
        Add Queries
      </Btn>
      <Drawer anchor='right' open={drawerOpen['query']} onClose={toggleDrawer('query', false)}>
        <div className="drawer">
          <h2 className='dashboard-card-heading text-black'>Create Query</h2>
          <AddQueryForm closeDrawer={toggleDrawer('query', false)} />
        </div>
      </Drawer>
    </LocalizationProvider>

    <button className="border-[1px] px-2 py-2 w-36 border-gray-400 rounded-md text-black flex-shrink-0 flex items-center justify-center h-[80%]">
      Load Leads
    </button>
    <select
      onChange={(e) => {
        if (e.target.value === "import") {
          handleOpenModal(importModal);
        }
      }}
      value="Options"
      className="border-[1px] px-2 py-2 border-gray-400 rounded-md text-black bg-transparent w-24 flex-shrink-0 h-[80%]"
    >
      <option value="default" className="hidden">Options</option>
      <option value="">Download Excel Format</option>
      <option value="import">Import Excel</option>
      <option value="">Export Data</option>
    </select>
    <button
      className="border-[1px] px-2 py-2 w-24 border-gray-400 rounded-md text-black flex-shrink-0 h-[80%] flex items-center justify-center gap-1"
      onClick={toggleDropdown}
    >
      <FaFilter className="text-sm" /> Filter
    </button>
  </div>
</div>

       {/* dropdown div */}
       <div style={dropdownStyles} className="w-full h-12 bg-[#f5f7f9] p-2 flex gap-2 px-2 dropdown-Div ">
        <input type="date" placeholder="from" className="bg-[#e9ecef] p-1 py-3 rounded-md outline-none focus:border-black border-[1px] border-gray-300 transition-all" />
        <input type="date" placeholder="from" className="bg-[#e9ecef] p-1 py-3 rounded-md outline-none focus:border-black border-[1px] border-gray-300 transition-all" />
        <input type="text" className="p-1 px-3 rounded-md outline-none focus:border-black border-[1px] border-gray-300 transition-all" placeholder="Search by ID, name, email, mobile" />
        <select className="p-1 rounded-md outline-none focus:border-black border-[1px] text-gray-500 border-gray-300 transition-all">
          <option>All User</option>
          <option>User Panal</option>
          <option>Trishti Samar</option>
          <option>Suriya ji</option>
        </select>
        <select className="p-1  rounded-md outline-none focus:border-black border-[1px] text-gray-500 border-gray-300 transition-all">
          <option>All Sourse</option>
          <option>Advertizment</option>
          <option>Agent</option>
          <option>Akbar Travel</option>
        </select>
        <select className="p-1 rounded-md outline-none focus:border-black border-[1px] text-gray-500 border-gray-300 transition-all">
          <option>All</option>
          <option>Client</option>
          <option>Agent</option>
          <option>Corporate</option>
        </select>
        <button className="border border-slate-300 bg-[#1d3f5a] h-auto items-center flex text-white text-[0.8rem] font-[700] rounded-md px-2 py-2 flex-shrink-0">
          <span className="flex justify-center items-center gap-1 px-2"><FaSearch />Search</span>
        </button>
        <button className="border border-slate-300 bg-[#1d3f5a] h-auto flex items-center text-white text-[0.8rem] font-[700] rounded-md px-2 py-2 flex-shrink-0">
          <span className="flex justify-center items-center gap-1 px-2">All</span>
        </button>
      </div>
    </div>
      {/* <div className="h-fit py-1 px-2 flex items-center justify-evenly w-full flex-row flex-wrap">
        <div onClick={()=>{navigate("/queries")}} className="flex flex-col items-center m-1 h-12 w-[7rem] cursor-pointer shadow-xl bg-black rounded-md justify-center">
          <div className="text-white text-xl ">2082</div>
          <div className="text-white text-[0.65rem] font-[700] ">TOTAL</div>
        </div>

        <div onClick={()=>{navigate("/queries/new")}} className="flex flex-col items-center m-1 h-12 w-[7rem] cursor-pointer shadow-xl bg-[#655be6] rounded-md justify-center">
          <div className="text-white text-xl ">2082</div>
          <div className="text-white  text-[0.65rem] font-[700] ">NEW</div>
        </div>

        <div onClick={()=>{navigate("/queries/active")}} className="flex flex-col items-center m-1 h-12 w-[7rem] cursor-pointer shadow-xl bg-[#0cb5b5] rounded-md justify-center">
          <div className="text-white text-xl ">2082</div>
          <div className="text-white  text-[0.65rem] font-[700] ">ACTIVE</div>
        </div>

        <div onClick={()=>{navigate("/queries/noConnect")}} className="flex flex-col items-center m-1 h-12 w-[7rem] cursor-pointer shadow-xl bg-[#0f1f3e] rounded-md justify-center">
          <div className="text-white text-xl ">2082</div>
          <div className="text-white  text-[0.65rem] font-[700] ">
            NO CONNECT
          </div>
        </div>

        <div onClick={()=>{navigate("/queries/hotLead")}} className="flex flex-col items-center m-1 h-12 w-[7rem] cursor-pointer shadow-xl bg-[#e45555] rounded-md justify-center">
          <div className="text-white text-xl ">2082</div>
          <div className="text-white  text-[0.65rem] font-[700] ">HOT LEAD</div>
        </div>

        <div onClick={()=>{navigate("/queries/followUp")}} className="flex flex-col items-center m-1 h-12 w-[7rem] cursor-pointer shadow-xl bg-[#ff6700] rounded-md justify-center">
          <div className="text-white text-xl ">2082</div>
          <div className="text-white  text-[0.65rem] font-[700] ">
            FOLLOW UP
          </div>
        </div>

        <div onClick={()=>{navigate("/queries/proposalSent")}} className="flex flex-col items-center m-1 h-12 w-[7rem] cursor-pointer shadow-xl bg-[#cc00a9] rounded-md justify-center">
          <div className="text-white text-xl ">2082</div>
          <div className="text-white  text-[0.65rem] font-[700] ">
            PROPOSAL SENT
          </div>
        </div>

        <div onClick={()=>{navigate("/queries/confirmed")}} className="flex flex-col items-center m-1 h-12 w-[7rem] cursor-pointer shadow-xl bg-[#46cd93] rounded-md justify-center">
          <div className="text-white text-xl ">2082</div>
          <div className="text-white  text-[0.65rem] font-[700] ">
            CONFIRMED
          </div>
        </div>

        <div onClick={()=>{navigate("/queries/canceled")}} className="flex flex-col items-center m-1 h-12 w-[7rem] cursor-pointer shadow-xl bg-[#6c757d] rounded-md justify-center">
          <div className="text-white text-xl ">2082</div>
          <div className="text-white  text-[0.65rem] font-[700] ">CANCELED</div>
        </div>

        <div onClick={()=>{navigate("/queries/invalid")}} className="flex flex-col items-center m-1 h-12 w-[7rem] cursor-pointer shadow-xl bg-[#f9392f] rounded-md justify-center">
          <div className="text-white text-xl ">2082</div>
          <div className="text-white  text-[0.65rem] font-[700] ">INVALID</div>
        </div>
      </div> */}

<div className="h-fit py-1 px-2 flex items-center justify-evenly w-full overflow-x-auto">
  {buttons.map((button) => (
    <div
      key={button.label}
      onClick={() => {
        setActiveButton(button.path);
        navigate(button.path);
      }}
      className={`flex flex-col items-center m-1 h-12 w-[120px] cursor-pointer shadow-xl rounded-md justify-center ${
        activeButton === button.path ? `active-animation ${button.color}` : button.color
      }`}
      style={{ flexShrink: 0 }} // Prevent buttons from shrinking
    >
      <div className="text-white text-xl">{button.count}</div>
      <div className="text-white text-[0.65rem] font-[700]">{button.label}</div>
    </div>
  ))}
</div>

      <div className="h-[80%] w-full mt-[6px] px-5 overflow-x-auto ">
        <div className="ag-theme-quartz h-full xl:w-full  w-[1200px]">
          <AgGridReact
            onGridReady={onGridReady}
            columnDefs={column}
            rowData={row}
            defaultColDef={defaultColDef}
            enableBrowserTooltips={true}
            pagination={true}
            paginationPageSize={20}
            suppressColumnHeaders={true}
            rowSelection="multiple"
            className="Grid"
            rowHeight={120}
          />
        </div>
      </div>

  

      {/* Add Query Modal */}

      


        <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalContent}/>

        <style jsx>{`
        .custom-checkbox .ag-selection-checkbox {
          margin-left: 10px; /* Adjust the value as needed */
        }
      `}</style>
    </div>
  );
}

export default Invalid;
