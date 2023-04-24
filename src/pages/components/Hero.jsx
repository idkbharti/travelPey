import Image from 'next/image'
import React from 'react'
import {HiLocationMarker} from "react-icons/hi"
import {RiArrowDropDownLine} from "react-icons/ri"
import {BsFillCalendarDateFill} from "react-icons/bs"
import {RxAvatar} from "react-icons/rx"

const Hero = () => {
  return (
    <div className="w-full flex py-16 flex-col md:flex-row gap-5 bg-[#04cdcd] justify-center items-center">
      <div className="w-1/2">
        <Image src="/bags.png" width={800} height={800} />
      </div>
      <div className="flex flex-col w-1/2 gap-3">
        <div className='text-4xl text-white font-semibold'>FLIGHTS</div>
        <span className='bg-yellow-500 text-xl w-[300px] py-1 font-bold'>Get 20% off Your first flight</span>
        <div className="flex flex-row gap-4 text-[#294840]">
          <div className="flex items-center gap-2">
            <input type="radio"></input>
            <label className='text-2xl'>One-way</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio"></input>
            <label className='text-2xl'>Round-trip</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio"></input>
            <label className='text-2xl'>Multi-city</label>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-8 mt-8">
          <div className="flex flex-row gap-x-2 p-2 px-2 items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <HiLocationMarker size={20} />
            <div className="px-3 bg-white flex flex-row rounded-2xl">
              <input type="text" placeholder="Where from ?"></input>
              <RiArrowDropDownLine size={30} />
            </div>
          </div>

          <div className="flex flex-row gap-x-2 p-2 px-2 items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <HiLocationMarker size={20} />
            <div className="px-3 bg-white flex flex-row rounded-2xl">
              <input type="text" placeholder="Where from ?"></input>
              <RiArrowDropDownLine size={30} />
            </div>
          </div>

          <div className="flex flex-row gap-x-2 p-2 px-3 items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <BsFillCalendarDateFill size={15} />
            <span className="w-[237px] py-[4px] px-3 text-[#294840]">
              Depature Date
            </span>
          </div>

          <div className="flex flex-row gap-x-2 p-2 px-2 items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <RxAvatar size={20} />
            <div className="px-3 bg-white flex flex-row rounded-2xl">
              <input type="text" placeholder="Where from ? " value="1"></input>
              <RiArrowDropDownLine size={30} />
            </div>
          </div>

          <div className="flex flex-row gap-x-2 p-2 px-2 items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <RxAvatar size={20} />
            <div className="px-3 bg-white flex flex-row rounded-2xl">
              <input
                type="text"
                placeholder="Where from ?"
                value="Economy"
              ></input>
              <RiArrowDropDownLine size={30} />
            </div>
          </div>

          <div className="flex flex-row gap-x-2 p-2 px-2 items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <RxAvatar size={20} />
            <span className="w-[237px] py-[4px] px-3 text-[#294840]">
              Enter Mobile Number
            </span>
          </div>
        </div>
        <div className='flex justify-start mt-10'>
          <div className='rounded-2xl p-3 px-5 bg-yellow-500 text-2xl font-serif'>Instant Book</div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Hero