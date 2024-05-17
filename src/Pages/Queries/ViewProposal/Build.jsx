import ViewProposal from './ViewProposal'
import { FaPencilAlt } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";
import butterfly from "../../../assets/images/b.png"
import { Bs1CircleFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import viewImage from "../../../assets/images/birthdayIcon.png"
import view4 from "../../../assets/images/view4.jpeg"
import view2 from "../../../assets/images/view2.jpg"
import view3 from "../../../assets/images/view3.png"
import { FaPlus } from "react-icons/fa";
import BuildCard from './BuildCard';









const Build = () => {



const obj = [
  {
    title: "Dubai Arrival",
    para: "Arrival in Dubai .. Pickup from Airport ...",
    image: view4,
    icon:   <FaPlus/>
  },
  {
    title: "Dubai Departure",
    para: "Departure From Dubai Happy to serve you ...",
    image: view2,
    icon:   <FaPlus/>
  },
  {
    title: "Ferrari World Full Day ",
    para: "Ferrari World Full Day with private tour... ",
    image: view3,
    icon:   <FaPlus/>
  },
  {
    title: "Full Day City Tour    ",
    para: "Full Day City tour with private basis...    ",
    image: view3,
    icon:   <FaPlus/>
  },
  {
    title: "Ferrari World Full Day ",
    para: "Ferrari World Full Day with private tour... ",
    image: view3,
    icon:   <FaPlus/>
  },
  {
    title: "Full Day City Tour    ",
    para: "Full Day City tour with private basis...    ",
    image: view3,
    icon:   <FaPlus/>
  }
  
  
]



  return (
    <>
        <ViewProposal/>
        <div className='bg-[#f5f7f9] h-[90%] w-full p-2'>

          <div className='parent w-full bg-[#fff] border-2 p-2 justify-between flexborder-[#eeefef] rounded-md flex'>
                <div className='child-1 w-[800px] bg-slate-100'>
                
                <div className='box w-[800px] h-[160px] flex flex-col justify-end relative'>
                <div className='bg-gradient-to-t from-[#000] to-[#fff] h-full w-full absolute z-10 opacity-80'></div>
                <img className='absolute top-0 z-0 inset-0 w-full h-full object-cover ' src={butterfly} alt='' />

                     <div className='absolute top-0 right-0 p-2 flex items-center gap-2 bg-[#00000070] bg-opacity-5 rounded-md mt-2 mr-2 z-30'>
                    <HiPhoto className='text-white'/>
                    <button className='bg-transparent text-white'>Change Cover Photo</button>
                    </div>
                    <div className='top-0 mx-4 p-2 z-30'>
            <div className='flex gap-3 text-white items-center'>
              <p className='font-semibold text-2xl'>Magical Dubai</p>
                    <FaPencilAlt />
              </div>
              <p className='text-white mt-auto'>Dubai, Abu Dhabi</p>
         </div>
    </div>
            <div className='grand-parent flex w-full bg-[#ffffff]'>
         <div className='grand-child-1 '>
         <div className='w-[190px] p-2 bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>


            <div className='w-[190px] p-2 bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>



            <div className='w-[190px] p-2 bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>



            <div className='w-[190px] p-2 bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>


            

              <div className=' w-[190px] p-3 bg-[#f3f2f2] flex items-center hover:bg-[#cffcff] justify-evenly gap-2 '>
             <GrDocumentText /><p className='text-sm font-semibold'>Package Terms</p><div>
             <FaChevronRight className='text-white hover:text-[#5beafd]' />
             </div>
            </div>
         </div>
         


            <div className='grand-child-2  w-full'>

      <div className='flex justify-between mt-2'>
      <table>
            <tr>
              <td className='border-[1px] border-[#f1f1f1] p-2  text-[#000]  font-semibold'>Day 2</td>
              <td className='border-[1px] border-[#f1f1f1] p-2  text-[#000]  font-semibold'>03 Jun - Mon    Abu Dhabi</td>
            </tr>
          </table>

        <div className='flex '>
        <button className='text-sm font-semibold text-[#fff] bg-[#2e8be2] px-3 mx-2 '>+New Event</button>
        </div>

      </div>
      <div className='w--full bg-[#ffff] border-2 border-[#f1f1f1] shadow-md mx-2 p-3 mt-4 flex justify-between'>
              <p className='italic text-[#adabab] font-normal'>Enter Day Wise Details</p>

              <div className='w-7 h-7 border-[1px] border-[#2e8be2] rounded-full flex items-center justify-center hover:bg-[#2e8be2] group'>
                    <MdEdit className='text-[#2e8be2] group-hover:text-[#fff]' />
              </div>

            </div>

            </div>

          
            </div>

                </div>

   <div>
    
   <div className='child-2 bg-[#ffff] flex gap-2 items-start mx-2'>
  <div className='flex items-start p-2 border-2 border-[#f1f1f1]'>
    <input type="text" placeholder='Search' className='outline-0 p-1 w-48' />
  </div>

  <div className='p-2 border-2 border-[#f1f1f1]'>
  <select className='outline-0 p-1 w-56'>
    <option value="Data itinerary">Data itinerary</option>
    <option value="Accommondation">Accommondation</option>
    <option value="Activiy">Activiy</option>
    <option value="Transportation">Transportation</option>
    <option value="Insurance/Visa">Insurance/Visa</option>
    <option value="Meal">Meal</option>
    <option value="Flight">Flight</option>
    <option value="Leisure">Leisure</option>
    <option value="Cruise">Cruise</option>
  </select>
</div>

</div>

<div className='bg-[#f5f7f9]'>

{obj.map((item, index) => (
        <BuildCard
          key={index} // Ensure each card has a unique key
          title={item.title}
          para={item.para}
          image={item.image}
          icon={item.icon}
        />
      ))}



  </div> 

  
</div>


   </div>

       </div>

       
        
    </>
  )
}

export default Build






{/* <div className='items-center text-[#fff]  font-semibold'>
<p>Day</p>
<p className='flex items-center justify-center'>2</p>
</div>


<div className='dhabi text-[#fff] gap-4 justify-center mt-3 flex'>
<p className='font-semibold text-lg'>03 Jun - Mon</p>
<FaLongArrowAltRight  className='font-semibold text-lg'/>
<p className='font-semibold text-lg'>Abu Dhabi</p>
</div> */}



