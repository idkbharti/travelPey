import Image from "next/image";
import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import Date from "./datePicker"
import state from "./state"

const Hero = () => {
  const [number, setNumber] = useState();
  const [eclass, setClass] = useState();
  const [isOpen,setIsOpen]=useState()
  const [isOpenE,setIsEOpen]=useState()
  const [isOpenF,setIsOpenF]=useState()
  const [isOpenT,setIsOpenT]=useState()
  const [to,setTo]=useState()
  const [from,setFrom]=useState()


  const [showPicker,setshowPiucker]=useState(false)
  const [selected, setSelected] = useState()


  const num=[1,2,3,4,5]
  const eco=["Economy","First-Class","Business-Class"]
  return (
    <div className="w-full flex py-16 flex-col md:flex-row gap-5 bg-[#04cdcd] justify-center items-center">
      <div className="md:w-1/2 flex justify-center items-center">
        <Image src="/bags.png" width={800} height={800} />
      </div>
      <div className="flex flex-col md:w-1/2 mob:items-center md:gap-3">
        <div className="text-4xl text-white font-semibold">FLIGHTS</div>
        <span className="bg-yellow-500 text-xl w-[300px] py-1 font-bold">
          Get 20% off Your first flight
        </span>
        <div className="flex flex-row gap-4 mob:my-2 mob:justify-center text-[#294840]">
          <div className="flex items-center gap-2">
            <input type="radio" name="input"></input>
            <label className="md:text-2xl">One-way</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="input"></input>
            <label className="md:text-2xl">Round-trip</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="input"></input>
            <label className="md:text-2xl">Multi-city</label>
          </div>
        </div>

        <div className="flex flex-row flex-wrap mob:justify-center gap-8 mob:gap-4 mt-8">
          <div className="flex flex-row gap-x-2 p-2 relative px-2 items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <HiLocationMarker size={20} />
            <div className="px-3 bg-white flex  flex-row rounded-2xl focus:outline-none ">
              <input
                type="text"
                placeholder="Where from ?"
                className="focus:outline-none"
                onClick={()=>setIsOpenF(true)}
                value={from}
              ></input>
              <RiArrowDropDownLine size={30} />
            </div>
            {isOpenF && (
                      <div className="absolute top-[40px] left-0 right-[1px] w-full h-[200px] rounded-xl z-[100] text-[#9ca3b7] border-[#dcdcdc] bg-[#F5F5F5]  overflow-x-hidden overflow-y-auto">
                        {state.map((num,i) => {
                          return (
                            <div
                              key={i}
                              className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                              onClick={() => {
                                setFrom(num.name);
                                setIsOpenF(false);
                              }}
                            >
                              {num.name}
                            </div>
                          );
                        })}
                      </div>
                    )}
          </div>

          <div className="flex flex-row gap-x-2 p-2 px-2 relative items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <HiLocationMarker size={20} />
            <div className="px-3 bg-white flex flex-row rounded-2xl focus:outline-none ">
              <input
                type="text"
                className="focus:outline-none"
                placeholder="Where from ?"
                onClick={()=>setIsOpenT(true)}
                value={to}
              ></input>
              <RiArrowDropDownLine size={30} />
            </div>
            {isOpenT && (
                      <div className="absolute top-[40px] left-0 right-[1px] w-full h-[200px] rounded-xl z-[100] text-[#9ca3b7] border-[#dcdcdc] bg-[#F5F5F5]  overflow-x-hidden overflow-y-auto">
                        {state.map((num,i) => {
                          return (
                            <div
                              key={i}
                              className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                              onClick={() => {
                                setTo(num.name);
                                setIsOpenT(false);
                              }}
                            >
                              {num.name}
                            </div>
                          );
                        })}
                      </div>
                    )}
          </div>

          <div onClick={()=>setshowPiucker(!showPicker)} className="flex flex-row gap-x-2 relative p-2 px-3 items-center focus:outline-none  bg-[#79fffe] rounded-3xl text-[#294840]">
            <BsFillCalendarDateFill
              size={15}
            />
            <input 
              type="text"
              className="w-[237px] focus:outline-none bg-[#79fffe] py-[4px] px-3 text-[#294840] "
              placeholder="Departure Date"
              value={selected}
            />
            {
              showPicker && <div className="absolute top-[40px] left-0 right-[1px] w-full rounded-xl z-[100] text-[#9ca3b7] text-[10px] border-[#dcdcdc] bg-[#F5F5F5]  overflow-x-hidden overflow-y-auto">
                 <Date/>
              </div>
            }
          </div>

          <div className="flex flex-row relative gap-x-2 p-2 px-2 items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <RxAvatar size={20} />
            <div className="px-3 bg-white relative flex flex-row rounded-2xl focus:outline-none ">
              <input
                type="text"
                className="focus:outline-none"
                placeholder="Number of Person"
                value={number}
                onClick={()=>setIsOpen(true)}
              ></input>
              <RiArrowDropDownLine size={30} />
            </div>
            {isOpen && (
                      <div className="absolute top-[40px] left-0 right-[1px] w-full rounded-xl z-[100] text-[#9ca3b7] border-[#dcdcdc] bg-[#F5F5F5]  overflow-x-hidden overflow-y-auto">
                        {num.map((num,i) => {
                          return (
                            <div
                              key={i}
                              className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                              onClick={() => {
                                setNumber(num);
                                setIsOpen(false);
                              }}
                            >
                              {num}
                            </div>
                          );
                        })}
                      </div>
                    )}
          </div>
          

          <div className="flex flex-row relative gap-x-2 p-2 px-2 items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <RxAvatar size={20} />
            <div className="px-3 bg-white flex flex-row rounded-2xl focus:outline-none ">
              <input
                className="focus:outline-none"
                type="text"
                placeholder="Economy"
                value={eclass}
                onClick={()=>setIsEOpen(true)}
              ></input>
              <RiArrowDropDownLine size={30} />
            </div>
            {isOpenE && (
                      <div className="absolute top-[40px] left-0 right-[1px] w-full rounded-xl z-[100] text-[#9ca3b7] border-[#dcdcdc] bg-[#F5F5F5]  overflow-x-hidden overflow-y-auto">
                        {eco.map((num,i) => {
                          return (
                            <div
                              key={i}
                              className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                              onClick={() => {
                                setClass(eclass);
                                setIsEOpen(false);
                              }}
                            >
                              {num}
                            </div>
                          );
                        })}
                      </div>
                    )}
          </div>

          <div className="flex flex-row gap-x-2 p-2 px-2 items-center bg-[#79fffe] rounded-3xl text-[#294840]">
            <RxAvatar size={20} />
            <input
              type="number"
              className="w-[237px] py-[4px] bg-[#79fffe]  focus:outline-none px-3 text-[#294840]"
              placeholder="Enter Your Number"
            ></input>
          </div>
        </div>
        <div className="flex justify-start mt-10">
          <div className="rounded-2xl p-3 px-5 bg-yellow-500 text-2xl font-serif">
            Instant Book
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
