
const GuestDocuments = () => {
  return (
    <div>
     <div className="flex justify-between bg-[#f7f7f7] p-1 m-2 rounded-md items-center">
      <p className="font-semibold text-sm">Guests (1)</p>
      <button className="text-sm font-semibold bg-blue-700 text-white p-1 px-2 rounded-md">+ Add Task</button>
    </div>


    <div className=" border-2 m-2 p-2 mr-4 border-[#f1f1f2] rounded-lg shadow-sm">
    <table className="w-full">
          <tr className="w-full ">
            <td className="border-[1px] border-[#dbdbdb] w-[20%] font-semibold p-2" colSpan={5}>
            First Name	
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold w-[20%] p-2">Last Name	</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold p-2">Gender	</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold p-2">Date of Birth</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold p-2 w-[20%]"></td>
          </tr>

          <tr className="w-full ">
            <td className="border-[1px] border-[#dbdbdb] w-[20%] font-semibold  p-2" colSpan={5}>
            Mr. hello	
            </td>
            <td className="border-[1px] border-[#dbdbdb]  p-2 w-[20%]">world</td>
            <td className="border-[1px] border-[#dbdbdb] p-2">MALE</td>
            <td className="border-[1px] border-[#dbdbdb] p-2">05-05-2004	
</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold p-2 w-[20%]">
        <div className="flex gap-3 justify-center">
        <button className="bg-[#1699dd] px-2 py-1 text-white text-sm">Document</button>
              <button className="bg-[#1699dd] px-2 py-1 text-white text-sm">Edit</button>
        </div>
            </td>
          </tr>
        </table>


    </div>
    </div>
  )
}

export default GuestDocuments