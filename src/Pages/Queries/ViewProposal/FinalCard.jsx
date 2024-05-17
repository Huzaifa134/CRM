

import final from "../../../assets/images/final.jpeg"
import { FaBed } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";




const FinalCard = () => {
  return (
    <div className="flex mt-4">
        <div className="bg-[#ffff] w-full mx-14 border-[1px] rounded-lg border-[#c7c0c0]">
           <div className="flex">
                <img src={final} className="w-[28rem] rounded-lg" alt="" />

              <div className="mx-10 mt-5">
             


            <div className="flex gap-4 mt-2">
            <p className="font-semibold text-2xl flex items-center gap-3"> <FaBed className="text-2xl "/>  Bur Dubai </p>

            <p className="flex items-center text-lg text-[#ff9900]">  <LiaStarSolid />
               <LiaStarSolid />
               <LiaStarSolid />
               <LiaStarSolid /></p>
            </div>

            <hr className="border-[1px] border-[#c7c0c0] w-[100vh]" />

              </div>
           </div>
            
        </div>
    </div>
  )
}

export default FinalCard