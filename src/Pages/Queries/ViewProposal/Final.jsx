import ViewProposal from "./ViewProposal";
import logo from "../../../assets/images/logo.png";
import view2 from "../../../assets/images/view2.jpg";
import FinalCard from "./FinalCard";

const Final = () => {
  return (
    <>
      <ViewProposal />





      <div className="bg-[#f0f0f0] h-full">

      {/* top heading */}

   <div className="flex justify-between mx-14 bg-[#ffff] p-6">
   <div>
        <p className="font-semibold text-3xl">Nikhil Ji Dubai Trip</p>
        <p className="font-normal text-xl">13 May 2024 to 15 May 2024 - ID: 104226</p>
      </div>

    <div>
        <img src={logo} alt="" />
    </div>

   </div>



{/* table div */}

<div className="bg-[#fff] p-5 mx-14 mt-2 rounded-xl shadow">
<table className="w-full ">
  <tr className=" bg-[#4fbdff] text-[#ffff]">
    <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-1" colSpan={11}>Option1</td>
  </tr>
          <tr className="w-full bg-[#e4e4e4] p-2">
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-1" colSpan={5}>
              City
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Hotel Name</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Check In</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2 ">Check Out</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Nights</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Room Types</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Meal Plan</td>
          </tr>
          <tr className="w-full ">
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2" colSpan={5}>
              Dubai
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2"><p>Bur Dubai (5 Star) <br />
                  Double Room: 1</p></td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">13-May-2024	</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2 ">13-May-2024	</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">0</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">Front Villa</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">	</td>
          </tr>
        </table>


        <p className="text-center font-semibold text-xl mt-3 p-4 ">Option 1 - Total Package Price: <span className="text-[#f5604c]">26,775 INR</span> 
</p>
</div>

{/* table div 2 */}
<div className="bg-[#fff] p-5 mx-14 mt-4 rounded-xl shadow">

  
<table className="w-full ">
  <tr className=" bg-[#04bf58] text-[#ffff]">
    <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-1" colSpan={11}>Option1</td>
  </tr>
          <tr className="w-full bg-[#e4e4e4] p-2">
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-1" colSpan={5}>
              City
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Hotel Name</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Check In</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2 ">Check Out</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Nights</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Room Types</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Meal Plan</td>
          </tr>
          <tr className="w-full ">
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2" colSpan={5}>
              Dubai
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2"><p>dfssd (1 Star)
 <br />
            Double Room: 1
            </p></td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">14-May-2024	</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2 ">14-May-2024	</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">0</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">sdfdf	</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">	sdfdf	</td>
          </tr>
        </table>


        <p className="text-center font-semibold text-xl mt-3 p-4 ">Option 1 - Total Package Price: <span className="text-[#f5604c]">24,150 INR</span> 
</p>
</div>



{/* hr lines */}

<div className="mx-14">
<hr className="border-[1px] mt-5 border-[#c5c2c2]"/>

<p className="font-semibold text-2xl mt-3">Day 1 Mon, 13 May 2024</p>


<hr className="border-[1px] mt-5 border-[#c5c2c2]"/>
</div>



{/* card start */}

<div className='flex bg-[#ffff] border-2  items-start border-[#dbdbdb] justify-between mx-14 rounded-lg shadow-sm mt-8 p-3'>
<div className='flex items-center'>
<div className=' rounded'>
  <img src={view2} className='w-20 h-20 rounded-lg' alt="" />
</div>

  <div className='flex flex-col mx-2'>
        <p className='font-semibold text-xl'>Arrival in dubai</p>
        <p className='text-base'>Arrival in dubai and transfer to hotel via private car</p>
  </div>
</div>
  </div> 



  {/* card 2 start */}

  <FinalCard />



   </div>
    </>
  );
};

export default Final;
