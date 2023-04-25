import Image from "next/image";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const best = () => {
  const data = ["/s1.png", "/s2.png", "/s3.png"];
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 800;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 800;
  };
  return (
    <div className="p-20 mob:p-10">
      <div className="text-4xl mob:text-2xl font-serif font-bold text-[#294840]">
        Best Flights near you
      </div>
      <div className="text-[#294840] font-serif md:text-xl font-semibold">
        Start Packing! These Countries are Open for Travel!
      </div>
      <div className="relative flex items-center bg-white w-full md:py-5 justify-center">
        <MdChevronLeft
          className="opacity-50 text-blue-600 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={50}
        />
        <div
          id="slider"
          className="w-[80%] mob:w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item, i) => (
            <Image
              key={i}
              width={1020}
              height={500}
              className="inline-block p-2 rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item}
              alt="/"
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 text-blue-600 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={50}
        />
      </div>
    </div>
  );
};

export default best;
