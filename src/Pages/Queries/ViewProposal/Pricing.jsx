import ViewProposal from './ViewProposal'

const Pricing = () => {
  return (
    <>
   <div className='bg-[#f8fafa] h-full'>

   <ViewProposal/>
      <div className='flex justify-between mx-4 mt-4'>
            <p className='font-semibold text-2xl'>Nikhil Ji Dubai Trip</p>
            <p className='font-semibold'>Dubai - Adult: 2 | Child: 0</p>
      </div>

      <div>
        <table>
          <tr>
            <td></td>
            <td>Item</td>
            <td>Option</td>
            <td>Type</td>
            <td>Next</td>
            <td>Markup</td>
          </tr>
        </table>
      </div>

   </div>

    </>
  )
}

export default Pricing