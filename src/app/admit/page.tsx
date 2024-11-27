import React from 'react'

const Admit = () => {
  return (
    <div>

    <div className='text-center text-[#044e83] font-bold text-[32px] mt-5'>
      <h1>Download Admit Card</h1>
    </div>

    <div className='flex justify-center mt-12 text-xl mb-20'>
      <form className='h-[400px] w-[650px] box-border border- rounded-lg pt-5 bg-[#ffffff] px-5 mt-8 shadow-lg  shadow-gray-300 '>

      <p className='mt-8 font-bold'>Email*</p>

      <div className='flex justify-around'>
      <input type="text" placeholder='Email' className='w-[452px] mt-1 h-12 p-3 border-2 rounded bg-slate-100' />

      <button className='mr-3 font-bold px-7 bg-[#044e83] text-white text-lg mt-1 rounded-r-md'>Send OTP</button>
      </div>
       <br />
      <p className='mt-6 font-bold'>OTP*</p>
  
      <input type="text" placeholder='OTP' className='w-[600px] mt-1 h-12 p-3 border-2 rounded bg-slate-100' />
   
       <button className='mt-12 ml-56  font-bold box-border px-14 py-3 bg-[#044e83] text-white text-lg'>GET CARD</button>
   
      </form>
    </div>
     
    </div>
  )
}

export default Admit