import { useState } from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MoreTimeIcon from '@mui/icons-material/MoreTime';

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import "./dashboard.css"
import { RiExternalLinkFill } from 'react-icons/ri';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: 'inherit',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root th:first-child": {
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          },
          "& .MuiTableRow-root th:last-child": {
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          },
          "& .MuiTableRow-root th": {
            color: "#fff",
            backgroundColor: "#4a4a69",
          }
        }
      }
    },
  },
});

export default function Dashboard() {
  const data = [
    { id: 25455, name: 'Ammazing Dubai Tour (5 Nights / 6 Days)', assigned: "Mr. Meten Ranjani 4 Adults | 2 Child", confirmed: "Day 2 (02/jan/2024) | Srinagar To Gulmarg Early Morning proceed to Gulmarg Via Tangmarg Road , driving past willow trees , fast flowoing streams ansd lush green meadows. Gulmarg- the meadows of flowers is an apt tem ...." ,detail:"Driver name: Naveed Mustufa , Mobile Number : +912222333 , Vechile No : Jkl 556 , Vehicle with : Non Ac" },
    // { id: 25455, name: 'Ajay kumar', assigned: 212, confirmed: 140 },
    // { id: 3, name: 'Faizan Raza Khan', assigned: 90, confirmed: 55 },
    // { id: 4, name: 'ratan kumar', assigned: 83, confirmed: 22 },
    // { id: 5, name: 'Mohd Imran', assigned: 81, confirmed: 43 },
    // { id: 6, name: 'Aazim Khaki', assigned: 75, confirmed: 42 },
    // { id: 7, name: 'Avesh Tyagi', assigned: 58, confirmed: 34 },
    // { id: 8, name: 'BK BK', assigned: 47, confirmed: 15 },
];
  const numberFormatter = new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', minimumFractionDigits: 0 });

  const [drawerOpen, setDrawerOpen] = useState({
    client: false,
    query: false,
    itinerary: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;

    setDrawerOpen({ ...drawerOpen, [anchor]: open });
  };

  return (
    <div className='p-5'>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main className="dashboard-container">
          <article data-type="todaysqueries" className='dashboard-card dashboard-data' >
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-3xl text-[#0cb5b5]' />Today's Queries</h2>
            <p style={{ color: "#0cb5b5"}}>0</p>
            <a href='#'><span>Open</span></a>
          </article>
          <article data-type="totalqueries" className='dashboard-card dashboard-data'>
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-3xl text-violet-600' /> Total Queries</h2>
            <p style={{ color: "#655be6"}}>2033</p>
            <a href='#'><span>Open</span></a>
          </article>
          <article data-type="proposal" className='dashboard-card dashboard-data'>
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-3xl text-[#0f1f3e]' />Proposal Sent</h2>
            <p style={{ color: "#0f1f3e"}}>30</p>
            <a href='#'><span>Open</span></a>
          </article>
          <article data-type="proconf" className='dashboard-card dashboard-data'>
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-2xl text-[#cc00a9]' />Total Pro. Conf</h2>
            <p style={{ color: "#cc00a9"}}>248</p>
            <a href='#'><span>Open</span></a>
          </article>
          <article data-type="confirmed" className='dashboard-card dashboard-data'>
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-2xl text-[#6c757d]' />Total Confirmed</h2>
            <p style={{marginLeft: "-50px" , color: "#6c757d"}}>1002</p>
            <a href='#'><span>Open</span></a>
          </article>
          <article data-type="lost" className='dashboard-card dashboard-data'>
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-2xl text-[#f9392f]' />Total Lost</h2>
            <p style={{ color: "#f9392f"}}>25</p>
            <a href='#'><span>Open</span></a>
          </article>

          <article className="dashboard-card dashboard-grid-item-col2 dashboard-create">
            <div>
              <p style={{ color: "#38cab3"}}>Good Morning</p>
              <p>Time to Travel</p>
              <p>{(new Date()).toDateString()}</p>
            </div>

            <div>
              <Btn style={{ backgroundColor: "gray!important"}} handleClick={toggleDrawer('client', true)}>
                <PersonAddAltIcon fontSize='small'/>
                Client
              </Btn>
              <Drawer anchor='right' open={drawerOpen['client']} onClose={toggleDrawer('client', false)}>
                <div className="drawer">
                  <h2 className='dashboard-card-heading'>Add Client</h2>

                  <AddClientForm closeDrawer={toggleDrawer('client', false)} />
                </div>
              </Drawer>

              <Btn handleClick={toggleDrawer('query', true)}>
                <PostAddIcon fontSize='small' />
                Query
              </Btn>


              
              <Drawer anchor='right' open={drawerOpen['query']} onClose={toggleDrawer('query', false)}>
                <div className="drawer">
                  <h2 className='dashboard-card-heading'>Add Query</h2>

                  <AddQueryForm closeDrawer={toggleDrawer('query', false)} />
                </div>
              </Drawer>

              <Btn handleClick={toggleDrawer('itinerary', true)}>
                <MoreTimeIcon fontSize='small' />
                Itinerary
              </Btn>
              <Drawer anchor='right' open={drawerOpen['itinerary']} onClose={toggleDrawer('itinerary', false)}>
                <div className="drawer">
                  <h2 className='dashboard-card-heading'>Add Itinerary</h2>

                  <AddItineraryForm closeDrawer={toggleDrawer('itinerary', false)} />
                </div>
              </Drawer>
            </div>
          </article>

          <article className="dashboard-card dashboard-grid-item-col2 dashboard-task">
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Task/Followups
            </h2>

            <p style={{ marginTop: '1rem', textAlign: 'center' }}>
              Tasks/Followups
            </p>
          </article>

          <article className='dashboard-card dashboard-grid-item-col2 dashboard-tours'>
            {/* <h2 className="dashboard-card-heading text-[#4a4a69]">
              Today's tours
            </h2> */}
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Query ID</th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Tour Details</th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Client Details</th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Transportation Details</th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Night Stay At</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b border-gray-200">{row.id}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.name}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.assigned}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.confirmed}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.detail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

            <div>
           

              <Btn>
                View all tours
              </Btn>
            </div>
          </article>

          <article className='dashboard-card dashboard-grid-item-col2 dashboard-report'>
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Finance Report
            </h2>

            <div>
              <p className='flex border-[1px] flex-col-reverse bg-[#f9f9f9]'>
                <span>2024 Sales</span>
                <span style={{color: "#4a4a69"}}>{numberFormatter.format(financialReport.yearlySales)}</span>
              </p>
              <p className='flex border-[1px] flex-col-reverse bg-[#f9f9f9]'>
                <span>2024 Collections</span>
                <span style={{color: "#4a4a69"}}>{numberFormatter.format(financialReport.yearlyCollections)}</span>
              </p>
            </div>

            <div>
              <p style={{backgroundColor:"#d2f1ff"}}>
                <span style={{fontWeight: "600" , color: "#4a4a69"}}>This Month Sales</span>
                <span style={{fontWeight: "600" , color: "black"}}>{numberFormatter.format(financialReport.monthlySales)}</span>
              </p>
              <p style={{backgroundColor:"#d2ffc1"}}>
                <span style={{fontWeight: "600" , color: "#4a4a69"}} >This Month Collections</span>
                <span style={{fontWeight: "600" , color: "black"}}>{numberFormatter.format(financialReport.monthlyCollections)}</span>
              </p>
              <p style={{backgroundColor:"#ffe1e1"}}>
                <span style={{fontWeight: "600" , color: "#4a4a69"}} >Total Pending Collection</span>
                <span style={{fontWeight: "600" , color: "black"}}>{numberFormatter.format(financialReport.pendingCollections)}</span>
              </p>
              <p style={{backgroundColor:"#ffeeb3"}}>
                <span style={{fontWeight: "600" , color: "#4a4a69"}} >Total Supplier Pending</span>
                <span style={{fontWeight: "600" , color: "black"}}>{numberFormatter.format(financialReport.totalSupplierPending)}</span>
              </p>
              <p style={{backgroundColor:"#eee1ff"}}>
                <span style={{fontWeight: "600" , color: "#4a4a69"}} >This Month Expense</span>
                <span style={{fontWeight: "600" , color: "black"}}>{numberFormatter.format(financialReport.monthlyExpense)}</span>
              </p>
            </div>
          </article>

          <article className='dashboard-card dashboard-grid-item-col2 dashboard-chart'>
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              This year queries
            </h2>

            <BarChart
              xAxis={[
                {
                  id: 'months',
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  scaleType: 'band',
                },
              ]}
              series={[{ data: yearQueries, color: 'blueviolet' }]}
              height={300}
            />
          </article>

          <article className='dashboard-card dashboard-grid-item-col2 dashboard-chart'>
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Queries by status
            </h2>


       

            <PieChart
              series={[
                {
                  innerRadius: '10%',
                  outerRadius: '80%',
                  paddingAngle: 1,
                  cornerRadius: 5,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -10, color: 'gray' },
                  data: [
                    { id: 0, value: queryByStatus.new, label: 'New', color: '#1e88e5' },
                    { id: 1, value: queryByStatus.active, label: 'Active', color: '#e53935' },
                    { id: 2, value: queryByStatus.noConnect, label: 'No connect', color: '#607d8b' },
                    { id: 3, value: queryByStatus.hotLead, label: 'Hot lead', color: '#ffc107' },
                    { id: 4, value: queryByStatus.confirmed, label: 'Confirmed', color: '#0d47a1' },
                    { id: 5, value: queryByStatus.cancelled, label: 'Cancelled', color: '#757575' },
                    { id: 6, value: queryByStatus.invalid, label: 'Invalid', color: '#424242' },
                    { id: 7, value: queryByStatus.proposalSent, label: 'Proposal Sent', color: '#ffee58' },
                    { id: 8, value: queryByStatus.followUp, label: 'Follow up', color: '#2196f3' },
                  ],
                },
              ]}
              height={300}
              slotProps={{ legend: { hidden: true } }}
            />
    
          </article>

          <article className='dashboard-card dashboard-grid-item-col2 dashboard-sales'>
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Sales Rep
            </h2>

            <TableContainer sx={{ marginTop: '1.5rem', maxHeight: '300px' }}>
              <Table size='small' aria-label="simple table" >
                <TableHead >
                  <TableRow >
                    <TableCell >#</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align='right'>Assigned</TableCell>
                    <TableCell align='right'>Confirmed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selesRep.map((row, i) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">{i + 1}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align='right' sx={{backgroundColor:"#f3f3f3"}}>{row.assigned}</TableCell>
                      <TableCell align='right' sx={{ backgroundColor: '#e8fff1' }}>{row.confirmed}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </article>

          <article className='dashboard-card dashboard-grid-item-col2 dashboard-sales'>
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Top Lead Sources
            </h2>

            <TableContainer sx={{ marginTop: '1.5rem', maxHeight: '300px' }}>
              <Table size='small' aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align='right'>Total queries</TableCell>
                    <TableCell align='right'>Confirmed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leadSources.map((row, i) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">{i + 1}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align='right' sx={{backgroundColor:"#f3f3f3"}}>{row.totalQueries}</TableCell>
                      <TableCell align='right' sx={{ backgroundColor: '#e8fff1' }}>{row.confirmed}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </article>

          <article className="dashboard-card dashboard-grid-item-col2 dashboard-payment">
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Payment Collection
            </h2>

            <TableContainer sx={{ marginTop: '1.5rem', maxHeight: '300px' }}>
              <Table size='small' aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Query ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {payments.map((row) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell sx={{ color: row.status === 'overdue' ? 'red' : 'black' }}> <p className='bg-[red] text-white text-center rounded-md text-xs ' >{row.status}</p> </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </article>
        </main>
      </LocalizationProvider>
    </ThemeProvider>
    </div>
  )
}

function Btn({ handleClick, children, className }) {
  return (
    <Button onClick={handleClick} variant='contained' sx={{ backgroundColor: '#12344d', color:"white" , fontWeight: "600" , '&:hover': { backgroundColor: '#1699dd' } }} className={className} size='large'>
      {children}
    </Button>
  )
}

function BtnOutlined({ handleClick, children }) {
  return (
    <Button onClick={handleClick} variant='outlined'
      sx={{
        borderColor: '#0d47a1',
        color: '#0d47a1',
        '&:hover': {
          color: '#0d47a1c0',
          borderColor: '#0d47a1c0',
          backgroundColor: '#0d47a110'
        }
      }}>
      {children}
    </Button>
  )
}

function AddClientForm({ closeDrawer }) {
  return (
    <form className="drawer-form">
      <FormControl sx={{ width: '100%' }}>
        <TextField select defaultValue="mr" size='small'>
          <MenuItem value="mr">Mr.</MenuItem>
          <MenuItem value="mrs">Mrs.</MenuItem>
          <MenuItem value="ms">Ms.</MenuItem>
          <MenuItem value="dr">Dr.</MenuItem>
          <MenuItem value="prof">Prof.</MenuItem>
        </TextField>
      </FormControl>

      <TextField label="First name" variant="outlined" size='small' />
      <TextField label="Last name" variant="outlined" size='small' />
      <TextField label="Email" variant="outlined" size='small' />
      <TextField label="Mobile" variant="outlined" size='small' />
      <TextField label="City" variant="outlined" size='small' />
      <TextField label="Address" variant="outlined" size='small' />
      <TextField label="Date of birth" variant="outlined" size='small' />

      <FormGroup row sx={{ gap: '0.5rem', flexWrap: 'nowrap', '& > *': { flex: 1 } }}>
        <BtnOutlined handleClick={closeDrawer}>Cancel</BtnOutlined>
        <Btn handleClick={() => { }}>Save</Btn>
      </FormGroup>
    </form>
  )
}

function AddQueryForm({ closeDrawer }) {
  return (
    <form className="drawer-form">
      <FormControl sx={{ width: '100%' }}>
        <TextField select defaultValue="client" size='small' label="Type" >
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

      <FormGroup row sx={{ gap: '0.5rem', flexWrap: 'nowrap', '& > *': { flex: 1 } }}>
        <BtnOutlined handleClick={closeDrawer}>Cancel</BtnOutlined>
        <Btn handleClick={() => { }}>Save</Btn>
      </FormGroup>
    </form>
  )
}

function AddItineraryForm({ closeDrawer }) {
  return (
    <form className="drawer-form">
      <TextField label="Itinerary name" variant="outlined" size='small' />
      <DatePicker label="Start Date" size="small" slotProps={{ textField: { size: 'small' } }} />
      <DatePicker label="End Date" size="small" slotProps={{ textField: { size: 'small' } }} />
      <TextField label="Adult" variant="outlined" size='small' type='number' />
      <TextField label="Child" variant="outlined" size='small' type='number' />
      <TextField label="Destinations" variant="outlined" size='small' />
      <TextField label="Notes" variant="outlined" size='small' multiline />

      <p>Website setting</p>

      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#0d47a1', '&.Mui-checked': { color: '#0d47a1' } }} />} label="Show on website" />
      </FormGroup>
      <FormControl sx={{ width: '100%' }}>
        <TextField select size='small' label="Theme">
          <MenuItem value={'2n-3dpackage'}>2N-3D Package</MenuItem>
          <MenuItem value={'adventure'}>Adventure</MenuItem>
          <MenuItem value={'beach'}>Beach</MenuItem>
          <MenuItem value={'economyumrah'}>Economy Umrah</MenuItem>
          <MenuItem value={'fundaymemoriableday'}>FunDay/Memoriable Day</MenuItem>
          <MenuItem value={'heritage'}>Heritage</MenuItem>
          <MenuItem value={'hillstation'}>Hill Station</MenuItem>
          <MenuItem value={'honeymoon'}>Honeymoon</MenuItem>
          <MenuItem value={'islandtrip'}>Island trip</MenuItem>
          <MenuItem value={'umrah'}>Umrah</MenuItem>
          <MenuItem value={'wildlife'}>Wildlife</MenuItem>
        </TextField>
      </FormControl>
      <TextField label="Per person price" variant="outlined" size='small' />
      <DatePicker label="Validity" size="small" slotProps={{ textField: { size: 'small' } }} />
      <FormGroup row>
        <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#0d47a1', '&.Mui-checked': { color: '#0d47a1' } }} />} label="Popular" />
        <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#0d47a1', '&.Mui-checked': { color: '#0d47a1' } }} />} label="Special" />
      </FormGroup>
      <TextField label="About package" variant="outlined" size='small' multiline />


      <FormGroup row sx={{ gap: '0.5rem', flexWrap: 'nowrap', '& > *': { flex: 1 } }}>
        <BtnOutlined handleClick={closeDrawer}>Cancel</BtnOutlined>
        <Btn handleClick={() => { }}>Save</Btn>
      </FormGroup>
    </form>
  )
}

/** Data */

const financialReport = {
  yearlySales: 5517876,
  yearlyCollections: 3256695,
  monthlySales: 863886,
  monthlyCollections: 607741,
  pendingCollections: 17788563,
  totalSupplierPending: 18487310,
  monthlyExpense: 15000,
}

const tours = [];

const yearQueries = [119, 84, 61];

const queryByStatus = {
  new: 527,
  active: 48,
  noConnect: 28,
  hotLead: 26,
  confirmed: 1014,
  cancelled: 70,
  invalid: 25,
  proposalSent: 34,
  followUp: 264,
}

const payments = [
  {
    id: 100052,
    name: 'Aniket Patade',
    amount: 50000,
    status: 'overdue'
  },
  {
    id: 100051,
    name: 'Mujahid',
    amount: 28000,
    status: 'overdue'
  },
  {
    id: 100050,
    name: 'Mujahid',
    amount: 22223,
    status: 'overdue'
  },
  {
    id: 100053,
    name: 'Aniket Patade',
    amount: 80500,
    status: 'overdue'
  },
  {
    id: 100061,
    name: 'pooja Shah',
    amount: 53525,
    status: 'overdue'
  },
  {
    id: 100066,
    name: 'Himanshu',
    amount: 10000,
    status: 'overdue',
  },
  {
    id: 100088,
    name: 'Atul',
    amount: 10000,
    status: 'overdue',
  },
  {
    id: 100089,
    name: 'Surath Mukherjee',
    amount: 10000,
    status: 'overdue',
  },
  {
    id: 100153,
    name: 'Aniket Patade',
    amount: 80500,
    status: 'overdue'
  },
  {
    id: 100161,
    name: 'pooja Shah',
    amount: 53525,
    status: 'overdue'
  },
  {
    id: 100166,
    name: 'Himanshu',
    amount: 10000,
    status: 'overdue',
  },
  {
    id: 100188,
    name: 'Atul',
    amount: 10000,
    status: 'overdue',
  },
  {
    id: 100189,
    name: 'Surath Mukherjee',
    amount: 10000,
    status: 'overdue',
  },
];

const selesRep = [
  { id: "11", name: 'TravBizz IT Solutions', assigned: 973, confirmed: 461 },
  { id: "12", name: 'Ajay kumar', assigned: 212, confirmed: 140 },
  { id: "13", name: 'Faizan Raza Khan', assigned: 90, confirmed: 55 },
  { id: "14", name: 'ratan kumar', assigned: 83, confirmed: 22 },
  { id: "15", name: 'Mohd Imran', assigned: 81, confirmed: 43 },
  { id: "16", name: 'Aazim Khaki', assigned: 75, confirmed: 42 },
  { id: "17", name: 'Avesh Tyagi', assigned: 58, confirmed: 34 },
  { id: "18", name: 'BK BK', assigned: 47, confirmed: 15 },
  { id: "19", name: 'Ashwin Naidu', assigned: 47, confirmed: 30 },
  { id: "111", name: 'User Panel', assigned: 46, confirmed: 19 },
  { id: "112", name: 'Ayaaz Ahmad', assigned: 32, confirmed: 20 },
  { id: "113", name: 'Surya Ji', assigned: 30, confirmed: 19 },
  { id: "114", name: 'Azhar Ansari', assigned: 28, confirmed: 17 },
  { id: "115", name: 'mohd anas', assigned: 27, confirmed: 16 },
  { id: "116", name: 'Azhar A Ansari', assigned: 18, confirmed: 11 },
]

const leadSources = [
  { id: "13", name: 'Advertisment', totalQueries: 536, confirmed: 250 },
  { id: "14", name: 'Walk-In', totalQueries: 469, confirmed: 316 },
  { id: "3", name: 'Referral', totalQueries: 165, confirmed: 102 },
  { id: "4", name: 'Facebook', totalQueries: 85, confirmed: 40 },
  { id: "5", name: 'Instagram', totalQueries: 75, confirmed: 37 },
  { id: "6", name: 'Telephone', totalQueries: 63, confirmed: 38 },
  { id: "7", name: 'WhatsApp', totalQueries: 61, confirmed: 22 },
  { id: "8", name: 'Agent', totalQueries: 47, confirmed: 22 },
  { id: "9", name: 'Website', totalQueries: 48, confirmed: 20 },
  { id: "10", name: 'Chat', totalQueries: 43, confirmed: 28 },
  { id: "11", name: 'Online', totalQueries: 26, confirmed: 14 },
  { id: "12", name: 'Others', totalQueries: 21, confirmed: 6 },
]
