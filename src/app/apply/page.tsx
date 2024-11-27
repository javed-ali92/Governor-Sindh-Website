import React from 'react'
 
import Link from 'next/link'

import Image from 'next/image'

import facebook from "../../../public/facebook_image.png"

const Apply = () => {
  return (

    <div>
    <div className='flex justify-center mb-10 '>
    <div className='h-[510px] w-[700px] text-[#044e83]  box-border border- rounded-lg pt-5 bg-[#ffffff] px-5 mt-16 shadow-lg  shadow-gray-300 '>
       
       <p className='mt-10 text-center text-4xl'>Before continuing to the application</p>

        <p className=' text-center text-4xl'>please subscribe on these social</p>

        <p className=' text-center text-4xl'>media platforms.</p>
    
        <Image src={facebook} alt='image' width={100} height={100} className='mt-10 ml-72 w-16 h-10'/> 
    
        <button className='mt-16 ml-56  font-bold box-border px-14 py-3 bg-[#6895b5] text-white text-lg'>CONTINUE</button>
    
        <p className='text-center mt-4 mr-2'>Already applied? <u className='text-[#78b2fb]'><Link href="/admit">Get Admit Card</Link></u></p>
    </div>
    </div>
     <div className='flex justify-center mb-20 text-[#5d8caf] '>
      <div className='flex ml-5 items-center'><p className=' mr-3 border-2 px-3 py-1 border-[#165b8c] text-[#165b8c] rounded-full'>1</p>Facebook <hr className='ml-4 w-10 font-'/></div>
      <u className=''></u>
      <div className='flex ml-5 items-center'><p className='mr-3 border-2 px-3 py-1 rounded-full'>2</p>Youtube<hr className='ml-4 w-10 font-'/></div>

      <div className='flex ml-5 items-center'><h1 className='mr-3 border-2 px-3 py-1 rounded-full'>3</h1>Twitter <hr className='ml-4 w-10 font-'/></div>

      <div className='flex ml-5 items-center'><h1 className='mr-3 border-2 px-3 py-1 rounded-full'>4</h1>Instagram <hr className='ml-4 w-10 font-'/></div>
      
      <div className='flex ml-5 items-center'><p className='mr-3 border-2 px-3 py-1 rounded-full'>5</p>Apply</div> 
   </div>
   </div>
  )
}

export default Apply