
const BuildCard = (props) => {
  return (
    <div>
        <div className='flex bg-[#ffff] border-2 p-4 items-center border-[#d4d4d4] justify-between mx-2 mt-2'>
<div className='flex items-center'>
<div className='w-14 h-14 bg-black rounded'>
  <img src={props.image} className='h-14' alt="" />
</div>

  <div className='flex flex-col mx-2'>
        <p className='font-bold text-base'>{props.title}</p>
        <p className='text-sm'>{props.para}</p>
  </div>
</div>

  <div className='bg-[#6e6d6d] hover:bg-[#5bf048]  w-10 h-10 rounded-full flex items-center justify-center'>

  <p className="text-[#FFFF]">{props.icon}</p>
  </div>

  </div> 
    </div>
  )
}

export default BuildCard