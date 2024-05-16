const Voucher = () => {
  return (
    <div className=" border-2 m-4 p-2 mr-4 border-[#f1f1f2] rounded-lg shadow-sm">
      <div className="bg-[#f7f7f7]">
        <p className="font-semibold p-1 m-2 mr-2">Vouchers</p>
      </div>
      <div>
        <table className="w-full ">
          <tr className="w-full ">
            <td className="border-[1px] border-[#dbdbdb] w-[70%] font-semibold p-1" colSpan={5}>
              Type
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold">From Date</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold">To Date</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold w-3"></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Voucher;
