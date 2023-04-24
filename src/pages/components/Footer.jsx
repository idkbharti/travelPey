import React from 'react'
import Image from 'next/image'
import {AiFillFacebook,AiFillInstagram,AiOutlineWhatsApp,AiFillPhone,AiOutlineMail} from "react-icons/ai"



const Footer = () => {
  const items = ["Privacy Policy","Terms & Condition","Contact-Us","Cancelation Policy"]
  return (
<>
<div className='flex justify-center mb-[-70px]'>
  <Image src="/mahel2.png" width={1000} height={500}></Image>
</div>

<div className=' bg-[#04cdcd]'>
  <div className='flex flex-row justify-around'>
    <div className='flex flex-col mt-16 text-[#294840]'>
      <div className='text-2xl'>Our Products</div>
      <div>Flights</div>
    </div>
    
    <div className='flex flex-col mt-16 text-[#294840]'>
     <div className='text-2xl'>  About TravelPey</div>
  <div className='flex flex-col'>
  {
      items.map((item,i)=>(
        <div className='underline' key={i}>{item}</div>
      ))
     }
  </div>
      </div>
   
    <div className='flex flex-col mt-16 text-[#294840]'>
    <div className='text-2xl'> Connect With TravelPey</div>
    <div className='flex flex-row gap-6 justify-evenly text-[#294840] '>
      <AiFillFacebook size={40}/>
       <AiFillInstagram size={40}/>
       <AiOutlineWhatsApp size={40}/>
    </div>
    <div className='flex flex-row gap-4 text-[#294840] items-center underline '> 
      <AiFillPhone></AiFillPhone>
      <span>+1 8886763247</span>
    </div>

    <div className='flex flex-row gap-4 text-[#294840] items-center underline'> 
    <AiOutlineMail></AiOutlineMail>
      <span>info@travelPey.com</span>
    </div>
    </div>

  </div>
<div className='flex flex-row justify-center  py-20'>
            <Image src="/logo-bg.png" alt="logo" width={60} height={60} ></Image>
            <span className='text-[#294840] font-medium text-4xl'>TravelPey</span>
        </div>
    </div>
</>
  )
}

export default Footer