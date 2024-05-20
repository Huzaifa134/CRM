import { Select } from 'antd'
import React from 'react'
import indianFlag from "../../../../assets/images/indianFlag.webp"


const EditProfile = () => {
  return (
    <>



  

    <div className=' main-container flex bg-[#f8fafa]  h-auto w-full p-5 items-start justify-center gap-4 flex-wrap'>
      <div className='w-[800px] transition-all max-[800px]:w-full container-1 bg-white border-[#f1f1f1] border-2 rounded-xl max-[110px]:w-[200vh]'>

        <p className=' text-blue-600 font-medium text-md p-3'>Edit Profile</p>
        <hr/>




        <div className='flex justify-between items-end mx-2 mt-6 gap-4'>

      <select className='p-2 text-left  border-[#ddd] border-2 rounded w-full'>
          <option value="Mr.">Mr.</option>
          <option value="Mr.">Mrs.</option>
          <option value="Mr.">Mr.</option>
          <option value="Mr.">Dr.</option>
          <option value="Mr.">Prof.</option>
      </select>
      
      <div className='flex flex-col w-full'>
          <label htmlFor="Name " className="text-sm">Name</label>
           <input type='text' placeholder='TravBizz' className='p-2 w-full border-[#ddd] border-2 rounded-md transition-all'/>
      </div>

      
      </div>



      <div className='mx-2 mt-2'> 
        <label htmlFor="Name " className="text-sm">Email Address</label>
        <input type='email' placeholder='Email'  className='p-2 w-full border-[#ddd] border-2 rounded-md  transition-all bg-[#e3e6e6]'/>
      </div>



      <div className='flex justify-center items-center mx-2 mt-2 w-full  max-[1000px]:flex-wrap max-[1000px]:justify-center max-[1000px]:flex-col max-[1000px]:gap-2'>

        <div className='flex flex-col justify-center items-center'>
          
        <label htmlFor="Name " className="text-sm">Mobile</label>
          <select name="code" id="code" className='border-2 py-2'>

          <option value="code">
                +91 
            </option>
          </select>
      </div>


      <div className='flex flex-col mt-[21px]'>
        <input type='number' placeholder='12345678'  className='p-2 w-72 border-[#ddd] border-2 border-l-0 transition-all'/>
      </div>


      <div className='ml-14 w-full'>
       <p className='text-sm'>Profile Image</p>
      <label htmlFor="fileUpload" className=' flex justify-between items-center border-2 w-96'>
        <input type="file" id="fileUpload" style={{ display: 'none' }}  />
        Choose File
        <span className='bg-gray-300 py-2 self-center px-3'>Browse</span>
      </label>
    
      </div>


      </div>

      <div className='mx-2'>
      <label htmlFor="Name " className="text-sm ">Website</label>
        <input type='temail' className='p-2 w-full border-[#ddd] border-2 rounded-md transition-all'/>

        <hr className='mt-5 border-[#e7e9e9] '/>

       <div>
       <p className='text-sm mt-3'>Themes</p>

       <hr className='mt-4 border-[#9b9b9bcc] '/>

       <div className='flex cursor-pointer mt-5'>
        <div className='bg-[#f14242] w-5 h-5'></div>
        <div className='bg-[#b1ce30] w-5 h-5'></div>
        <div className='bg-[#4033f8] w-5 h-5'></div>
        <div className='bg-[#d36c6c] w-5 h-5'></div>
        <div className='bg-[#4d811c] w-5 h-5'></div>
        <div className='bg-[#37fceb] w-5 h-5'></div>
        <div className='bg-[#180505] w-5 h-5'></div>
        <div className='bg-[#ff8534] w-5 h-5'></div>
        <div className='bg-[#2f155e] w-5 h-5'></div>
        <div className='bg-[#baca71] w-5 h-5'></div>
        <div className='bg-[#ecb8b8] w-5 h-5'></div>
        <div className='bg-[#d9db39] w-5 h-5'></div>
        <div className='bg-[#1b5728] w-5 h-5'></div>
        <div className='bg-[#d3f166] w-5 h-5'></div>
        <div className='bg-[#eb3cb6] w-5 h-5'></div>
        <div className='bg-[#1b5723] w-5 h-5'></div>
        <div className='bg-[#f1ba41] w-5 h-5'></div>
        <div className='bg-[#942ead] w-5 h-5'></div>
        <div className='bg-[#4033f8] w-5 h-5'></div>
        <div className='bg-[#d36c6c] w-5 h-5'></div>
        <div className='bg-[#4d811c] w-5 h-5'></div>
        <div className='bg-[#37fceb] w-5 h-5'></div>
        <div className='bg-[#180505] w-5 h-5'></div>
        <div className='bg-[#ff8534] w-5 h-5'></div>
        <div className='bg-[#2f155e] w-5 h-5'></div>
        <div className='bg-[#baca71] w-5 h-5'></div>
        <div className='bg-[#ecb8b8] w-5 h-5'></div>
       </div>
       <hr className='mt-5 border-[#9b9b9bcc] '/>

       </div>
      </div>

      <div className='flex gap-5 justify-end mx-2 mt-3 p-5'>
          <button className='bg-[#e2f0f0] px-3 text-base border-[#f1f1f1e5] border-2 py-1 rounded'>Cancel</button>
          <button className='bg-[#2c3d3d] text-white text-base px-2 py-1 rounded'>Save Changes</button>
      </div>
      </div>

{/* container 2 */}

      <div className='container-2'>


      <div className=' bg-white border-2 border-[#f1f1f1] w-[400px] max-[1200px]:w-[800px] transition-all max-[800px]:w-full rounded-xl'>
          <p className=' text-blue-600 font-medium text-md p-3'>Change Password</p>
          <hr/>

      <div className='mt-6 items-center '>
          <div className='flex flex-col mx-2 '>
          <label htmlFor="Name " className="text-sm">Old Password</label>
          <input type='text' className='p-2 w-full border-[#ddd] border-2 rounded-md transition-all'/>
          </div>

          <div className='flex flex-col mx-2 '>
          <label htmlFor="Name " className="text-sm mt-3">New Password</label>
          <input type='text' className='p-2 w-full border-[#ddd] border-2 rounded-md transition-all'/>
          </div>

          <div className='flex flex-col mx-2'>
          <label htmlFor="Name " className="text-sm mt-2">Confirm Password</label>
          <input type='text' className='p-2 w-full border-[#ddd] border-2 rounded-md transition-all'/>
          </div>
         
    </div>

   
<div className='flex justify-end mx-3 mt-3 mb-3'>
         <button className='bg-[#2c3d3d] text-white text-base px-2 py-1 rounded '> New Password</button>
         </div>

      </div>


      <div className='mt-5 bg-white border-2 border-[#f1f1f1] w-[400px] max-[1200px]:w-[800px] transition-all max-[800px]:w-full rounded-xl'>
          <p className=' text-blue-600 font-medium text-md p-3'>Change Pin</p>
          <hr/>

      <div className='mt-6 items-center '>
          <div className='flex flex-col mx-2 '>
          <label htmlFor="Name " className="text-sm">Old Pin</label>
          <input type='text' className='p-2 w-full border-[#ddd] border-2 rounded-md transition-all'/>
          </div>

          <div className='flex flex-col mx-2 '>
          <label htmlFor="Name " className="text-sm mt-3">New Pin</label>
          <input type='text' className='p-2 w-full border-[#ddd] border-2 rounded-md transition-all'/>
          </div>

          <div className='flex flex-col mx-2'>
          <label htmlFor="Name " className="text-sm mt-2">Confirm Pin</label>
          <input type='text' className='p-2 w-full border-[#ddd] border-2 rounded-md transition-all'/>
          </div>
         
    </div>

   
<div className='flex justify-end mx-3 mt-3 mb-3'>
         <button className='bg-[#2c3d3d] text-white text-base px-2 py-1 rounded '> New Password</button>
         </div>

      </div>


      </div>
    
    </div>

    </>
  )
}

export default EditProfile



