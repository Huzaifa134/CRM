import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  Modal,
} from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { FaCarAlt } from "react-icons/fa";
import HotelIcon from "@mui/icons-material/Hotel";
import EventIcon from "@mui/icons-material/Event";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import BlindIcon from '@mui/icons-material/Blind';
import { FaBed } from "react-icons/fa";
import { FaBlind } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";




import "./Pricing.css";
import ViewProposal from "./ViewProposal";

const data = [
  {
    item: "Indigo",
    option: "-",
    type: "Flight",
    net: "₹ 200000",
    markup: "0%",
    itemDate: "21-05-2024",
    itemTime: "1:00-PM TO 2:00-PM",
  },
  {
    item: "Dubai:Airport to Hotel",
    option: "-",
    type: "Transportation - Private",
    net: "₹ 5000",
    markup: "0%",
    itemDate: "10-03-2024",
    itemTime: "12:00-PM TO 11:00-PM",
  },
  {
    item: "Bur Dubai",
    option: "-",
    type: "Accommodation",
    net: "₹ 2500",
    markup: "0%",
    itemDate: "20-01-2024",
    itemTime: "1:00-PM TO 2:00-PM",
  },
  {
    item: "Burj Khalifa",
    option: "-",
    type: "Activity",
    net: "₹ 6000",
    markup: "0%",
    itemDate: "01-02-2024",
    itemTime: "3:00-PM TO 12:00-PM",
  },
];

const dateFilterParams = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split("-");
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
};

const getIconForType = (type) => {
  switch (type) {
    case "Flight":
      return <div className="bg-[#343642] rounded-full p-2">
        <FaBed className="text-lg text-[#ffff]"/>
      </div>;
    case "Transportation - Private":
      return <div  className="bg-[#343642] rounded-full p-2">
        <FaCarAlt className=" text-lg text-[#ffff]" />
      </div>;
    case "Accommodation":
      return <div className="bg-[#343642] rounded-full p-2">
        <FaBlind className=" text-lg text-[#ffff]" />
      </div>;
    case "Activity":
      return <div className="bg-[#343642] rounded-full p-2">
        <FaHotel className="  text-lg text-[#ffff] " />
      </div>;
    default:
      return null;
  }
};

const Dashboard = () => {
  const [row, setRow] = useState(data);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [services, setServices] = useState([
    {
      service: "Hotel Option 1",
      price: 1000,
      markup: 200,
      cgst: 30,
      sgst: 30,
      igst: "-",
      tcs: 50,
      discount: "-",
      total: "₹122638",
    },
  ]);

  const columnDefs = [
    {
      width: 80,
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      cellRenderer: (params) => {
        return (
          <Link>
            <div className="cursor-pointer">
              <div className="flex justify-center items-center">
                {getIconForType(params.data.type)}
              </div>
            </div>
          </Link>
        );
      },
    },
    {
      headerName: "Item",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 330,
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col">
            <div className="text-black font-medium">{params.data.item}</div>
            <div className="text-slate-400 mt-[-15px]">
              {params.data.itemDate} {params.data.itemTime}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Option",
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      field: "option",
      width: 200,
    },
    {
      headerName: "Type",
      cellStyle: { display: "flex", alignItems: "center" },
      field: "type",
      width: 310,
    },
    {
      headerName: "Net",
      field: "net",
      cellStyle: { display: "flex", justifyContent: "right" },
      width: 100,
    },
    {
      headerName: "Markup",
      field: "markup",
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      width: 100,
    },
    {
      headerName: "Gross",
      field: "net",
      cellStyle: { display: "flex", justifyContent: "right" },
      width: 100,
    },
    {
      sortable: false,
      filter: false,
      flex: 0.2,
      cellRenderer: (params) => {
        return (
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="flex items-center justify-center w-full h-full"
          >
            <MoreVertIcon
              className="hover:bg-black hover:text-white rounded-full border p-1 border-black"
              style={{ fontSize: "25px" }}
            />
          </div>
        );
      },
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    cellStyle: {
      borderRight: "1px solid #d9d9db",
      display: "flex",
      alignItems: "center",
    },
    width: 191,
    tooltipField: "name",
  };

  const calculateTotal = (service) => {
    return (
      service.price +
      service.markup +
      service.cgst +
      service.sgst +
      service.igst +
      service.tcs -
      service.discount -
      service.total
    );
  };

  return (
    <div>
      <ViewProposal />

      <div className="flex justify-between items-center m-3 p-3 bg-slate-100 rounded-lg">
        <div className="text-2xl font-medium">Dubai Trip Mr.Nikhil</div>
        <div className="text-sm">Dubai, - Adult: 2 | Child: 0</div>
      </div>

      <div className="h-full w-full px-3">
        <div className="ag-theme-quartz" style={{ height: "100%", width: "100%" }}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={row}
            defaultColDef={defaultColDef}
            enableBrowserTooltips={true}
            rowHeight={60}
            domLayout="autoHeight"
          />
        </div>
      </div>

      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <div className="p-4 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[25%]">
          <div className="flex justify-between text-3xl items-center h-[10%] px-2 pb-3">
            <div className="font-bold text-lg text-slate-600"> Edit Pricing </div>
            <div onClick={() => setOpen(false)} className="cursor-pointer">
              <CloseIcon />
            </div>
          </div>
          <hr />
          <div className="flex flex-row justify-between w-full mt-4 h-[90%]">
            <div className="w-full mx-2">
              <div className=" w-full">
                <p className="text-xs mb-2">Per Adult Cost</p>
                <TextField
                  id="outlined-basic"
                  size="small"
                  name="first_name"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </div>
              <p className="text-[0.6rem] text-red-600 h-2 flex items-start"></p>
              <div className="mt-3 w-full">
                <p className="text-xs mb-2">Markup %</p>
                <TextField
                  id="outlined-basic"
                  size="small"
                  name="first_name"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </div>
              <p className="text-[0.6rem] text-red-600 h-2 flex items-start"></p>
              <div className="mt-3 w-full">
                <p className="text-xs mb-2">Markup Value</p>
                <TextField
                  id="outlined-basic"
                  size="small"
                  name="first_name"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </div>
              <p className="text-[0.6rem] text-red-600 h-2 flex items-start"></p>
              <div className="flex justify-between w-full mt-4">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md border-[1px] p-1.5 hover:bg-slate-100 px-6 text-black"
                >
                  Cancel
                </button>
                <button className="bg-black text-white px-6 py-1.5 rounded-md">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        keepMounted
        open={open2}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <div className="p-4 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[80%]">
          <div className="flex justify-between text-3xl items-center h-[10%] px-2 pb-3">
            <div className="font-bold text-lg text-slate-600">Edit Pricing</div>
            <div onClick={() => setOpen2(false)} className="cursor-pointer">
              <CloseIcon />
            </div>
          </div>
          <hr />
          <div className="w-full h-[90%]">
            <div className="px-2 w-full mt-4">
              <div className="flex justify-end">
                <button
                  className="flex items-center bg-black text-white py-1 px-2 rounded-md"
                  onClick={() =>
                    setServices([
                      ...services,
                      {
                        service: "",
                        price: "",
                        markup: "",
                        cgst: "",
                        sgst: "",
                        igst: "",
                        tcs: "",
                        discount: "",
                        total: "",
                      },
                    ])
                  }
                >
                  <CreateIcon className="mr-1" />
                  Add More Services
                </button>
              </div>
              <div className="overflow-y-auto h-[75vh]">
                {services.map((service, index) => (
                  <div key={index} className="mt-6 p-3 bg-gray-100 rounded-md">
                    <div className="flex justify-between items-center">
                      <div className="w-full px-2">
                        <p className="text-xs mb-2">Service</p>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          name="service"
                          variant="outlined"
                          sx={{ width: "100%" }}
                          value={service.service}
                          onChange={(e) => {
                            const updatedServices = [...services];
                            updatedServices[index].service = e.target.value;
                            setServices(updatedServices);
                          }}
                        />
                      </div>
                      <div className="w-full px-2">
                        <p className="text-xs mb-2">Price</p>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          name="price"
                          variant="outlined"
                          sx={{ width: "100%" }}
                          value={service.price}
                          onChange={(e) => {
                            const updatedServices = [...services];
                            updatedServices[index].price = e.target.value;
                            setServices(updatedServices);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="w-full px-2">
                        <p className="text-xs mb-2">Markup %</p>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          name="markup"
                          variant="outlined"
                          sx={{ width: "100%" }}
                          value={service.markup}
                          onChange={(e) => {
                            const updatedServices = [...services];
                            updatedServices[index].markup = e.target.value;
                            setServices(updatedServices);
                          }}
                        />
                      </div>
                      <div className="w-full px-2">
                        <p className="text-xs mb-2">CGST</p>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          name="cgst"
                          variant="outlined"
                          sx={{ width: "100%" }}
                          value={service.cgst}
                          onChange={(e) => {
                            const updatedServices = [...services];
                            updatedServices[index].cgst = e.target.value;
                            setServices(updatedServices);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="w-full px-2">
                        <p className="text-xs mb-2">SGST</p>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          name="sgst"
                          variant="outlined"
                          sx={{ width: "100%" }}
                          value={service.sgst}
                          onChange={(e) => {
                            const updatedServices = [...services];
                            updatedServices[index].sgst = e.target.value;
                            setServices(updatedServices);
                          }}
                        />
                      </div>
                      <div className="w-full px-2">
                        <p className="text-xs mb-2">IGST</p>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          name="igst"
                          variant="outlined"
                          sx={{ width: "100%" }}
                          value={service.igst}
                          onChange={(e) => {
                            const updatedServices = [...services];
                            updatedServices[index].igst = e.target.value;
                            setServices(updatedServices);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="w-full px-2">
                        <p className="text-xs mb-2">TCS</p>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          name="tcs"
                          variant="outlined"
                          sx={{ width: "100%" }}
                          value={service.tcs}
                          onChange={(e) => {
                            const updatedServices = [...services];
                            updatedServices[index].tcs = e.target.value;
                            setServices(updatedServices);
                          }}
                        />
                      </div>
                      <div className="w-full px-2">
                        <p className="text-xs mb-2">Discount</p>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          name="discount"
                          variant="outlined"
                          sx={{ width: "100%" }}
                          value={service.discount}
                          onChange={(e) => {
                            const updatedServices = [...services];
                            updatedServices[index].discount = e.target.value;
                            setServices(updatedServices);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="w-full px-2">
                        <p className="text-xs mb-2">Total</p>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          name="total"
                          variant="outlined"
                          sx={{ width: "100%" }}
                          value={service.total}
                          onChange={(e) => {
                            const updatedServices = [...services];
                            updatedServices[index].total = e.target.value;
                            setServices(updatedServices);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setOpen2(false)}
                className="rounded-md border-[1px] p-1.5 hover:bg-slate-100 px-6 text-black"
              >
                Cancel
              </button>
              <button className="bg-black text-white px-6 py-1.5 rounded-md ml-2">
                Update
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
