import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    const items = ["Flights","Privacy-Policy","Terms & Conditions"]
  return (
    <div className='bg-[#04cdcd] w-full h-16 flex flex-row justify-between items-center px-20 sticky top-0 z-50'>
        <div className='flex flex-row cursor-pointer'>
            <Image src="/logo-bg.png" alt="logo" width={40} height={50} ></Image>
            <span className='text-[#294840] font-medium text-2xl'>TravelPey</span>
        </div>
        <div className='flex flex-row gap-8 items-center '>
           {
            items?.map((items,i)=>
            (
                <span key={i} className='text-[#294840] font-medium text-[18px] font-serif cursor-pointer'>{items}</span>
            ))
           }
           <div className='flex flex-row items-center cursor-pointer'>
           <Image src="/c.png" width={40} height={40} alt="phone_no"></Image>
           <span className='text-[#294840] font-medium text-[16px]'> +1 8886763247</span>
           </div>
        </div>

    </div>
  )
}

export default Navbar