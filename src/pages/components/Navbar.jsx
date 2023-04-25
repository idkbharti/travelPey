import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {GrClose} from "react-icons/gr"

const Navbar = () => {
  const [ show, setShow ] = useState(false);
  const items = ["Flights", "Privacy-Policy", "Terms & Conditions"];
  return (
    <div className="bg-[#04cdcd] w-full h-16 flex flex-row justify-between items-center px-5 lg:px-20 md:px-10 sticky top-0 z-50">
      <div className="flex flex-row cursor-pointer">
        <Image src="/logo-bg.png" alt="logo" width={40} height={50}></Image>
        <span className="text-[#294840] font-medium text-2xl">TravelPey</span>
      </div>
      <div className="flex flex-row lg:gap-8 md:gap-4 items-center mob:hidden">
        {items?.map((items, i) => (
          <span
            key={i}
            className="text-[#294840] font-medium text-[18px] font-serif cursor-pointer"
          >
            {items}
          </span>
        ))}
        <div className="flex flex-row items-center cursor-pointer">
          <Image src="/c.png" width={40} height={40} alt="phone_no"></Image>
          <span className="text-[#294840] font-medium text-[16px]">
            {" "}
            +1 8886763247
          </span>
        </div>
      </div>
      <div className="md:hidden" onClick={()=>setShow(!show)}>
        {!show?<GiHamburgerMenu size={40} />:<GrClose size={30}/>}
      </div>
      {show && (
        <div className="flex flex-col p-5 bg-[#04cdcd] md:hidden w-full h-[100vh] py-10 gap-y-10 absolute top-14 right-0 gap-2 items-center z-50">
          {items?.map((items, i) => (
            <span onClick={()=>setShow(false)}
              key={i}
              className="text-[#294840] font-medium text-[18px] font-serif cursor-pointer"
            >
              {items}
            </span>
          ))}
          <div className="flex flex-row items-center cursor-pointer">
            <Image src="/c.png" width={40} height={40} alt="phone_no"></Image>
            <span className="text-[#294840] font-medium text-[16px]">
              {" "}
              +1 8886763247
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
