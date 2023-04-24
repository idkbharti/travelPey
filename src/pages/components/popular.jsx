import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const popular = () => {
  const data=["/1.png","/2.png","/3.png","/4.png","/5.png","/6.png","/7.png","/8.png"]
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 2305;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <div className='p-20'>
            <div className='text-4xl font-serif font-bold text-[#294840]'>Popular Flights near you</div>
        <div className='text-[#294840] font-serif text-xl'>Find dashing deals on domestic and international flights!</div>
  <div className='relative flex items-center bg-white w-full py-5 justify-center'>
    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
    <div
      id='slider'
      className='w-[85%]  h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
    >
      {data.map((item,i) => (
        <img key={i}
          className='w-[220px] inline-block p-2 rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300'
          src={item}
          alt='/'
        />
      ))}
    </div>
    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
  </div>
</div>
  )
}

export default popular