import Image from "next/image";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const people = () => {
  const people = [
    {
      img: "/user1.png",
      name: "RICHARD",
      comment:
        "Good experience buying tickets from you , I will buy it again for my next trip!",
    },
    {
      img: "/user1.png",
      name: "THOMAS",
      comment:
        "Good experience buying tickets from you , I will buy it again for my next trip!",
    },
  ];
  return (
    <div className="p-20">
      <div className="text-4xl font-serif font-bold text-[#294840]">
        What do people feel...
      </div>
      <div className="p-10 w-full flex flex-row justify-between gap-x-20 mt-20">
        {people.map((card, i) => (
          <div key={i} className="flex flex-row items-center justify-between gap-3">
            <div className="rounded-full">
              <Image src={card.img} width={100} height={100} style={{borderRadius:"50%"}}></Image>
            </div>
            <ImQuotesLeft size={30} color="black" />
            <div>
              <div className="text-[#294840] text-3xl font-bold">{card.name}</div>
              <div className="text-[#294840]">{card.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default people;
