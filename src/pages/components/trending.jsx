import Image from 'next/image'
import React from 'react'

const trending = () => {
  return (
    <div className='p-20'>
        <div className='text-4xl font-serif font-bold text-[#294840]'>Trending Activities</div>
        <div className='text-[#294840] font-serif text-2xl'>Top 3 offers for you in this month! Grab these amazing offers using the coupon codes.</div>
        <div className='w-full flex justify-center p-8'>
            <Image src="/trending.png" width={1000} height={450} alt="trending"></Image>
        </div>
    </div>
  )
}

export default trending