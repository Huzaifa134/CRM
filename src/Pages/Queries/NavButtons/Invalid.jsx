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
import { FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import _ from "lodash";
import { FaCalendarDays } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Menu } from "@mui/material";
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



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const navigate = useNavigate()

  // calculate day

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [days, setDays] = useState(0);
  const [nights, setNights] = useState(0);



function goToQueries() {
    navigate('/queries')   
}

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
                <div
                  onClick={editHandler}
                  className="group cursor-pointer hover:bg-black border border-black h-6 w-6 ml-1 rounded-full flex justify-center items-center"
                >
                  <EditOutlinedIcon
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
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
      <div className="flex justify-between items-center h-16 sm:h-12 sm:flex-row flex-col px-2 border-t border-slate-300 border-b bg-[#f5f7f9]">
        <div className="font-[700]"> Invalid </div>
        <div className="flex justify-center  sm:w-[65%] md:w-[55%] lg:w-[43%]  w-[90%] items-center gap-3 h-full">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              quickFilter(e.target.value);
            }}
            className="border border-slate-300 h-[80%] px-2 rounded-md text-sm w-[60%] focus:outline-none focus:border focus:border-black"
            placeholder="Search by anything...."
          />
          <div className="w-[40%] h-[80%]">
            <button
              onClick={handleClick}
              className="border w-[100%] border-slate-300 h-full bg-[#1d3f5a] text-white  text-[0.8rem] font-[700] rounded-md px-2 "
            >
              <span className="sm:block hidden">Add Queries</span>
              <span className="sm:hidden block">
                <AddRoundedIcon />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="h-fit py-1 px-2 flex items-center justify-evenly w-full flex-row flex-wrap">
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

      {/* Add Query Modal */}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
      >
        <div className="flex justify-center">
          <div className="p-6 rounded-md bg-white">
            <div
              className={` flex justify-between mb-5  `} 
            >
              <div className="font-bold text-lg"> Create Query </div>
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

export default Invalid;