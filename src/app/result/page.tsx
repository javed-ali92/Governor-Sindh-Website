import React from 'react'

const Result = () => {
  return (
    <div>

    <div className='text-center text-[#044e83] font-bold text-[35px] '>
      <h1 className='pt-3'>Grand Entrance Exam Result</h1>
    </div>

    <div className='flex justify-center mt-20 text-xl mb-32'>
      <form className='h-[420px] w-[670px] box-border border- rounded-lg pt-5 bg-[#ffffff] px-5 mt-3 shadow-lg  shadow-gray-300 '>

      <p className='mt-8 mb-1'>Registration Number *</p>
      
      <input type="text" placeholder='Registration Number' className='w-[600px] mt-1 h-12 p-3 border-2 rounded bg-slate-100' />
       <br />
      <p className='mt-6 mb-1'>CNIC or B-Form Number *</p>
  
      <input type="text" placeholder='CNIC or B-Form Number' className='w-[600px] mt-1 h-12 p-3 border-2 rounded bg-slate-100' />
   
       <button className='mt-12 ml-56  font-bold box-border px-12 py-3 bg-[#044e83] text-white text-lg'>GET RESULT</button>
   
      </form>
    </div>
    </div>
  )
}

export default Result